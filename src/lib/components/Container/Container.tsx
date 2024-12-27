import { forwardRef, HTMLAttributes } from "react";
import type { AsChildComponent } from "../../types/AsChildComponent";

export interface ContainerProps
  extends AsChildComponent,
    HTMLAttributes<HTMLDivElement> {
  /**
   * @default false
   */
  asChild?: boolean;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ ...props }, forwardedRef) => {
    return (
      <Component
        className={`container max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ${className}`}
        {...props}
        ref={forwardedRef}
      />
    );
  }
);
