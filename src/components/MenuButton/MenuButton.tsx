import { ButtonHTMLAttributes, forwardRef } from 'react';
import { AsChildComponent } from '../../lib/types/AsChildComponent';
import { Slot } from '@radix-ui/react-slot';
import {
  Cross2Icon as CloseIcon,
  HamburgerMenuIcon,
} from '@radix-ui/react-icons';
import classNames from 'classnames';

export interface MenuButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    AsChildComponent {}

export const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>(
  (
    {
      'aria-expanded': ariaExpanded = false,
      'aria-label': ariaLabel = 'Menu',
      asChild = false,
      className = '',
      role = 'button',
      tabIndex = 0,
      type = 'button',
      ...props
    },
    forwardedRef
  ) => {
    const Component = asChild ? Slot : 'button';

    const accessibleName = ariaExpanded ? 'Fechar menu' : 'Abrir menu';

    return (
      <Component
        aria-expanded={ariaExpanded}
        aria-label={accessibleName}
        className={classNames(
          'icon-button text-white bg-grape-40 bg-opacity-0 hover:bg-opacity-50 rounded-full',
          className
        )}
        role={role}
        tabIndex={tabIndex}
        type={type}
        {...props}
        ref={forwardedRef}
      >
        <span aria-hidden={true}>
          {ariaExpanded ? <CloseIcon /> : <HamburgerMenuIcon />}
        </span>
        <span className={'sr-only'}>{accessibleName}</span>
      </Component>
    );
  }
);
MenuButton.displayName = 'MenuButton';
