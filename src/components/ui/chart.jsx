import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

const ChartContext = React.createContext(null);

export function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}

export const ChartContainer = React.forwardRef(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "ChartContainer";

// ChartStyle renders CSS variables based on config
export const ChartStyle = ({ id, config }) => {
  if (!config) return null;

  const css = Object.entries(config)
    .map(([key, value]) => `--color-${key}: ${value};`)
    .join("\n");

  return <style dangerouslySetInnerHTML={{ __html: `[data-chart=${id}] { ${css} }` }} />;
};

// Tooltip
export const ChartTooltip = RechartsPrimitive.Tooltip;

export const ChartTooltipContent = React.forwardRef(
  (
    {
      active,
      payload,
      className,
      hideLabel = false,
      hideIndicator = false,
      indicator = "dot",
      labelKey,
      formatter,
    },
    ref
  ) => {
    const { config } = useChart();

    if (!active || !payload?.length) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {payload.map((item, index) => {
          const key = labelKey || item.dataKey || item.name || `value-${index}`;
          const color = item.color || "currentColor";
          return (
            <div key={key} className="flex items-center gap-2">
              {!hideIndicator && (
                <div
                  className={cn("shrink-0 rounded-[2px]", {
                    "h-2.5 w-2.5": indicator === "dot",
                    "w-1": indicator === "line",
                  })}
                  style={{ backgroundColor: color }}
                />
              )}
              <div className="flex flex-1 justify-between">
                <span>{item.name}</span>
                <span className="font-mono font-medium">{item.value}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltipContent";

// Legend
export const ChartLegend = RechartsPrimitive.Legend;

export const ChartLegendContent = React.forwardRef(
  ({ className, payload, hideIcon = false, nameKey, verticalAlign = "bottom" }, ref) => {
    const { config } = useChart();
    if (!payload?.length) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className
        )}
      >
        {payload.map((item, index) => {
          const key = nameKey || item.dataKey || `value-${index}`;
          const color = item.color || "currentColor";
          return (
            <div key={key} className="flex items-center gap-1.5">
              {!hideIcon && <div className="h-2 w-2 rounded-[2px]" style={{ backgroundColor: color }} />}
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    );
  }
);
ChartLegendContent.displayName = "ChartLegendContent";
