import * as React from "react"
import * as RechartsPrimitive from "recharts"
import { TooltipProps } from "recharts"
import { cn } from "./utils"

// ---- Types perso pour payload Recharts ----
interface CustomTooltipPayload<ValueType = number | string, NameType = string> {
  value: ValueType
  name: NameType
  color?: string
  dataKey?: string | number
  payload?: Record<string, unknown>
}

// ---- Props tooltip enrichies ----
type CustomTooltipProps<VT extends string | number, NT extends string> = TooltipProps<VT, NT> & {
  payload?: CustomTooltipPayload<VT, NT>[]
  hideLabel?: boolean
  hideIndicator?: boolean
  indicator?: "line" | "dot" | "dashed"
  nameKey?: string
  labelKey?: string
}

// ---- Contexte pour config des charts ----
interface ChartConfigItem {
  label?: string
  icon?: React.ComponentType
}

interface ChartContextProps {
  config: Record<string, ChartConfigItem>
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

export function useChart() {
  const ctx = React.useContext(ChartContext)
  if (!ctx) {
    throw new Error("useChart must be used within a ChartContext.Provider")
  }
  return ctx
}

// ---- Tooltip Content ----
export const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  CustomTooltipProps<string | number, string> & React.ComponentProps<"div">
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref
  ) => {
    const { config } = useChart()

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) return null

      const item = payload[0]
      if (!item) return null

      const key = `${labelKey || item.dataKey || item.name || "value"}`
      const itemConfig = config[key as keyof typeof config]
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>
            {labelFormatter(value, payload)}
          </div>
        )
      }

      if (!value) return null

      return <div className={cn("font-medium", labelClassName)}>{value}</div>
    }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey])

    if (!active || !payload?.length) return null

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {tooltipLabel}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`
            const itemConfig = config[key as keyof typeof config]
            const indicatorColor = color || item.payload?.fill || item.color

            return (
              <div
                key={`${item.dataKey}-${index}`}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2",
                  indicator === "dot" && "items-center"
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            "shrink-0 rounded-[2px]",
                            indicator === "dot" && "h-2.5 w-2.5",
                            indicator === "line" && "w-1",
                            indicator === "dashed" &&
                              "w-0 border-[1.5px] border-dashed bg-transparent"
                          )}
                          style={{
                            backgroundColor:
                              indicator !== "dashed" ? indicatorColor : undefined,
                            borderColor:
                              indicator === "dashed" ? indicatorColor : undefined,
                          }}
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        hideLabel ? "items-end" : "items-center"
                      )}
                    >
                      <div className="grid gap-1.5">
                        <span className="text-muted-foreground">
                          {itemConfig?.label || item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {typeof item.value === "number"
                            ? item.value.toLocaleString()
                            : item.value}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)

ChartTooltipContent.displayName = "ChartTooltipContent"
