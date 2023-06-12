'use client';

import {
  Item,
  Link,
  List,
  NavigationMenuProps,
  Root,
} from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { forwardRef, useEffect, useState } from 'react';
import { Wordmark } from '../Wordmark';
import { MenuButton } from '../MenuButton';
import NextLink from 'next/link';
import globalNavContent from '../../content/globalnav.json';
import { Container } from '../../lib/components/Container';

export interface GlobalNavMenuProps extends NavigationMenuProps {
  'aria-label': NavigationMenuProps['aria-label'];
}

export const GlobalNavMenu = forwardRef<HTMLElement, GlobalNavMenuProps>(
  (
    {
      'aria-label': ariaLabel,
      className = '',
      id,
      itemScope = true,
      itemType = 'https://schema.org/SiteNavigationElement',
      role = 'navigation',
      ...props
    },
    forwardedRef
  ) => {
    const [isPageScrolled, setIsPageScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
      const listener = () => {
        setIsPageScrolled(window.scrollY > 12 * 4);
      };
      window.addEventListener('scroll', listener);
      return () => {
        window.removeEventListener('scroll', listener);
      };
    });

    const handleToggleMenu = () => {
      setIsMenuOpen((prev) => !prev);
    };

    const handleHideMenu = () => {
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 100);
    };

    return (
      <Root
        aria-label={ariaLabel}
        className={classNames(
          'container relative xl:mx-auto motion-safe:transition-all shadow text-white',
          'before:from-grape-40 before:to-lavender-70 before:bg-gradient-to-r before:absolute before:w-full before:h-full before:opacity-80 before:rounded',
          {
            'h-12': !isMenuOpen,
            'h-auto': isMenuOpen,
            'top-0': !isPageScrolled,
            'bg-grape-40 bg-opacity-80 max-w-full w-full': !isPageScrolled,
            'max-w-6xl mx-4 rounded top-4 backdrop-blur backdrop-filter backdrop-saturate-150':
              isPageScrolled,
          },
          className
        )}
        id={id}
        itemScope={itemScope}
        itemType={itemType}
        role={role}
        {...props}
        ref={forwardedRef}
      >
        <Container className={'relative'}>
          <MenuButton
            aria-controls={'globalnav-list'}
            aria-expanded={isMenuOpen}
            className={'flex-shrink-0 absolute top-0'}
            id={'globalnav-menu-trigger-button'}
            onClick={handleToggleMenu}
          />
          <input
            id={'menu-state'}
            className={'sr-only'}
            type={'checkbox'}
            checked={isMenuOpen}
          />
          <div
            className={
              'flex flex-shrink-0 ml-6 items-center justify-center focus-visible:outline-none'
            }
            onClick={handleHideMenu}
            tabIndex={-1}
          >
            <Link
              className={'touchable py-3.5'}
              href={'/'}
              onClick={handleHideMenu}
              rel={'home'}
              title={'Página inicial de Jimmy Andrade'}
            >
              <Wordmark />
            </Link>
          </div>
          <List
            id={'globalnav-list'}
            aria-hidden={!isMenuOpen}
            className={classNames(
              'flex motion-safe:transition motion-safe:ease-out motion-safe:duration-100',
              'text-xs flex-col gap-y-3.5 ml-3.5 py-3.5',
              'sm:text-sm sm:flex-row sm:gap-x-4 py-4',
              {
                'h-0 opacity-0 pointer-events-none': !isMenuOpen,
                'h-auto opacity-100 pointer-events-auto': isMenuOpen,
              }
            )}
            role={'none'}
          >
            {globalNavContent.items.map((item) => (
              <Item key={item.title}>
                <Link
                  asChild={true}
                  className={classNames(
                    'inline-flex p-1 motion-safe:transition-all overflow-clip select-none uppercase',
                    {
                      'opacity-0': !isMenuOpen,
                      'opacity-100': isMenuOpen,
                    }
                  )}
                  role={'menuitem'}
                  tabIndex={isMenuOpen ? 0 : -1}
                  title={item.title}
                >
                  <NextLink
                    href={item.href}
                    onClick={handleHideMenu}
                    title={item.title}
                  >
                    <span itemProp={'name'}>{item.title}</span>
                  </NextLink>
                </Link>
              </Item>
            ))}
          </List>
        </Container>
      </Root>
    );
  }
);
GlobalNavMenu.displayName = 'GlobalNavMenu';
