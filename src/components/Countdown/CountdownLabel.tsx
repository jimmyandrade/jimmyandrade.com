import { forwardRef, HTMLAttributes } from 'react';
import { AsChildComponent } from '../../lib/types/AsChildComponent';

export interface CountdownLabelProps
  extends HTMLAttributes<HTMLSpanElement>,
    AsChildComponent {}

export const CountdownLabel = forwardRef<HTMLSpanElement, CountdownLabelProps>(
  ({ children, className = '', ...props }, forwardedRef) => (
    <span
      className={`lowercase text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl ${className}`}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </span>
  )
);
CountdownLabel.displayName = 'CountdownLabel';
