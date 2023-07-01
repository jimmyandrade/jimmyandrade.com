import { forwardRef, HTMLAttributes } from 'react';
import type { AsChildComponent } from '../../lib/types/AsChildComponent';
import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import { contentAnchorName } from '../../constants';

export interface MainContentProps
  extends HTMLAttributes<HTMLElement>,
    AsChildComponent {}

export const MainContent = forwardRef<HTMLElement, MainContentProps>(
  (
    {
      asChild = false,
      children,
      className = '',
      id = contentAnchorName,
      role = 'main',
      tabIndex = -1,
      ...props
    },
    forwardedRef
  ) => {
    const Component = asChild ? Slot : 'main';
    return (
      <Component
        className={classNames('bg-white', className)}
        id={id}
        role={role}
        tabIndex={tabIndex}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </Component>
    );
  }
);
MainContent.displayName = 'MainContent';
