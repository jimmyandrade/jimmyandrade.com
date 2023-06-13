'use client';

import {
  Item,
  Link,
  List,
  NavigationMenuProps,
} from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { forwardRef, useEffect, useState } from 'react';
import { Wordmark } from '../Wordmark';
import { MenuButton } from '../MenuButton';
import NextLink from 'next/link';
import globalNavContent from '../../content/globalnav.json';
import { Container } from '../../lib/components/Container';
import { Root } from './Root';

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
        const threshold = 0;
        setIsPageScrolled(window.scrollY > threshold);
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
        aria-expanded={isMenuOpen}
        aria-label={ariaLabel}
        data-scrolled={isPageScrolled}
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
          <div
            className={
              'flex flex-shrink-0 ml-6 items-center justify-center focus-visible:outline-none'
            }
            onClick={handleHideMenu}
            tabIndex={-1}
          >
            <Link
              aria-label={'Ir para a página inicial'}
              className={'touchable py-3.5'}
              href={'/#'}
              onClick={handleHideMenu}
              rel={'home'}
              title={'Ir para a página inicial de Jimmy Andrade'}
            >
              <Wordmark className={'brand'} />
            </Link>
          </div>
          <List
            id={'globalnav-list'}
            className={classNames(
              'flex motion-safe:transition motion-safe:ease-out motion-safe:duration-100',
              'text-xs flex-col gap-y-3.5 ml-3.5 py-3.5',
              'sm:text-sm sm:gap-x-4 py-4',
              {
                'h-0 opacity-0 pointer-events-none': !isMenuOpen,
                'h-auto opacity-100 pointer-events-auto': isMenuOpen,
              }
            )}
            role={'none'}
          >
            {globalNavContent.items.map((item) => (
              <Item aria-hidden={!isMenuOpen} key={item.title}>
                <Link
                  asChild={true}
                  className={classNames(
                    'touchable inline-flex items-center justify-start motion-safe:transition-all overflow-clip select-none uppercase',
                    'p-4 sm:p-1 sm:text-sm w-full sm:w-fit',
                    'hover:bg-white hover:text-grape-40',
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
