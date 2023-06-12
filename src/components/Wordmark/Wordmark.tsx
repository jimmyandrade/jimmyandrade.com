import { forwardRef, HTMLAttributes } from 'react';
import { AsChildComponent } from '../../lib/types/AsChildComponent';
import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';

export interface WordmarkProps
  extends HTMLAttributes<HTMLElement>,
    AsChildComponent {}

export const Wordmark = forwardRef<HTMLElement, WordmarkProps>(
  ({ asChild = false, className = '', ...props }, forwardedRef) => {
    const Component = asChild ? Slot : 'strong';
    return (
      <Component
        className={classNames('font-semibold uppercase', className)}
        {...props}
        ref={forwardedRef}
      >
        Jimmy&nbsp;Andrade
      </Component>
    );
  }
);
Wordmark.displayName = 'Wordmark';
