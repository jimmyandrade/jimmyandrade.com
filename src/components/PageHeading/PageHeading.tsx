import { forwardRef, HTMLAttributes } from 'react';
import { AsChildComponent } from '../../lib/types/AsChildComponent';
import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';

export interface PageHeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    AsChildComponent {}

export const PageHeading = forwardRef<HTMLHeadingElement, PageHeadingProps>(
  ({ asChild = false, children, className, ...props }, forwardedRef) => {
    const Component = asChild ? Slot : 'h2';

    return (
      <Component
        {...props}
        ref={forwardedRef}
        className={classNames(
          'text-5xl bg-clip-text text-transparent bg-gradient-to-br from-lavender-70 select-none to-grape-40',
          'text-5xl leading-normal bg-clip-text text-transparent bg-gradient-to-br from-lavender-70 select-none to-grape-40',
          className
        )}
      >
        {children}
      </Component>
    );
  }
);
PageHeading.displayName = 'PageHeading';
