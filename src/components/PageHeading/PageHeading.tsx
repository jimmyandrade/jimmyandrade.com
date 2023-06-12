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
          'bg-clip-text bg-duvida bg-gradient-to-br leading-normal text-transparent',
          'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl',
          className
        )}
      >
        {children}
      </Component>
    );
  }
);
PageHeading.displayName = 'PageHeading';
