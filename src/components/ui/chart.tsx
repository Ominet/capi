"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"
import type { TooltipProps } from "recharts"
import { cn } from "@/lib/utils"

// Types personnalisés
interface ChartConfig {
  [key: string]: {
    label?: string
    icon?: React.ComponentType
    color?: string
    theme?: {
      light?: string
      dark?: string
    }
  }
}

interface ChartContextValue {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextValue | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)
  if (!context) {
    throw new Error("useChart must be used within a ChartContainer")
  }
  return context
}

// ✅ Composant Tooltip avec typage correct
const ChartTooltip = React.forwardRef
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof RechartsPrimitive.Tooltip> &
    Partial<TooltipProps<number, string>>
>(({ active, payload, label, className, ...props }, ref) => {
  if (!active || !payload?.length) {
    return null
  }

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border bg-background p-2 shadow-md",
        className
      )}
      {...props}
    >
      {label && (
        <div className="mb-2 font-medium text-sm">{label}</div>
      )}
      <div className="grid gap-2">
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor: entry.color,
              }}
            />
            <span className="text-sm text-muted-foreground">
              {entry.name}:
            </span>
            <span className="ml-auto font-medium text-sm">
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
})
ChartTooltip.displayName = "ChartTooltip"

// ✅ ChartTooltipContent avec type spécifique
interface ChartTooltipContentProps<T extends number | string = number>
  extends Omit<TooltipProps<T, string>, 'content'> {
  hideLabel?: boolean
  hideIndicator?: boolean
  indicator?: 'line' | 'dot' | 'dashed'
  nameKey?: string
  labelKey?: string
}

const ChartTooltipContent = React.forwardRef
  HTMLDivElement,
  ChartTooltipContentProps
>(
  (
    {
      active,
      payload,
      className,
      indicator = 'dot',
      hideLabel = false,
      hideIndicator = false,
      label,
      labelClassName,
      ...props
    },
    ref
  ) => {
    const { config } = useChart()

    if (!active || !payload?.length) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn(
          'grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl',
          className
        )}
      >
        {!hideLabel && label && (
          <div className={cn('font-medium', labelClassName)}>
            {label}
          </div>
        )}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = item.dataKey as string
            const itemConfig = config[key]
            const indicatorColor = item.color || itemConfig?.color

            return (
              <div
                key={index}
                className="flex w-full items-center gap-2"
              >
                {!hideIndicator && (
                  <div
                    className={cn(
                      'shrink-0',
                      indicator === 'dot' && 'h-2.5 w-2.5 rounded-full',
                      indicator === 'line' && 'h-0.5 w-4',
                      indicator === 'dashed' && 'h-0.5 w-4 border-b-2 border-dashed'
                    )}
                    style={{
                      backgroundColor: indicatorColor,
                      borderColor: indicatorColor,
                    }}
                  />
                )}
                <div className="flex flex-1 justify-between gap-2">
                  <span className="text-muted-foreground">
                    {itemConfig?.label || item.name}
                  </span>
                  <span className="font-mono font-medium">
                    {item.value}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)
ChartTooltipContent.displayName = 'ChartTooltipContent'

export {
  ChartTooltip,
  ChartTooltipContent,
  ChartContext,
  useChart,
}