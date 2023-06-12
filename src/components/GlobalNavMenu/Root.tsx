import {
  NavigationMenuProps,
  Root as PrimitiveRoot,
} from '@radix-ui/react-navigation-menu';
import { forwardRef } from 'react';
import classNames from 'classnames';

export interface GlobalNavMenuRoot extends NavigationMenuProps {
  /**
   * @default false
   */
  'data-scrolled'?: boolean;
}

export const Root = forwardRef<HTMLElement, GlobalNavMenuRoot>(
  (
    {
      'aria-expanded': ariaExpanded,
      className = '',
      'data-scrolled': isPageScrolled = false,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <PrimitiveRoot
        className={classNames(
          'container relative xl:mx-auto motion-safe:transition-all text-white',
          {
            'h-12': !ariaExpanded,
            'h-auto': ariaExpanded,
            'top-0': !isPageScrolled,
            'shadow-none bg-grape-40 bg-opacity-100 max-w-full top-0 w-full':
              !isPageScrolled,
            'shadow max-w-xs mx-auto rounded top-4 before:bg-duvida before:bg-gradient-to-l before:opacity-80 before:rounded blurred-backdrop bg-gradient-before':
              isPageScrolled,
          },
          className
        )}
        data-scrolled={isPageScrolled}
        {...props}
        ref={forwardedRef}
      />
    );
  }
);
Root.displayName = 'GlobalNavMenu.Root';
