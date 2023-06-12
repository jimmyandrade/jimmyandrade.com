import { forwardRef, HTMLAttributes } from 'react';
import type { AsChildComponent } from '../../types/AsChildComponent';
import { Slot } from '@radix-ui/react-slot';

export interface ContainerProps
  extends AsChildComponent,
    HTMLAttributes<HTMLDivElement> {
  /**
   * @default false
   */
  asChild?: boolean;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ asChild = false, className = '', ...props }, forwardedRef) => {
    const Component = asChild ? Slot : 'div';
    return (
      <Component
        className={`container max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ${className}`}
        {...props}
        ref={forwardedRef}
      />
    );
  }
);
Container.displayName = 'Container';
