import * as React from "react";
import { cn } from "@/lib/utils";

export interface CalculatorDisplayProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const CalculatorDisplay = React.forwardRef<
  HTMLDivElement,
  CalculatorDisplayProps
>(({ className, value, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex h-20 items-center justify-end overflow-hidden rounded-lg bg-gray-800 px-4 text-5xl font-light text-white",
        className
      )}
      {...props}
    >
      {value}
    </div>
  );
});
CalculatorDisplay.displayName = "CalculatorDisplay";

export { CalculatorDisplay };
