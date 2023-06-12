import { forwardRef, HTMLAttributes } from 'react';
import { AsChildComponent } from '../../lib/types/AsChildComponent';
import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';

export interface PageHeaderProps
  extends HTMLAttributes<HTMLElement>,
    AsChildComponent {}

export const PageHeader = forwardRef<HTMLElement, PageHeaderProps>(
  ({ asChild = false, className = '', ...props }, forwardedRef) => {
    const Component = asChild ? Slot : 'header';
    return (
      <Component className={classNames('pt-20 pb-12', className)} {...props} />
    );
  }
);
PageHeader.displayName = 'PageHeader';
