import { DataHTMLAttributes, forwardRef } from 'react';
import { AsChildComponent } from '../../lib/types/AsChildComponent';
import { Slot } from '@radix-ui/react-slot';

export interface BigNumberProps
  extends DataHTMLAttributes<HTMLDataElement>,
    AsChildComponent {}

export const BigNumber = forwardRef<HTMLDataElement, BigNumberProps>(
  ({ asChild = false, children, className, value, ...props }, forwardedRef) => {
    const Component = asChild ? Slot : 'data';
    return (
      <Component
        className={'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'}
        value={value}
        {...props}
        ref={forwardedRef}
      >
        {children ?? value}
      </Component>
    );
  }
);
BigNumber.displayName = 'BigNumber';
