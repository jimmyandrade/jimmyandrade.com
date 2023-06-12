'use client';

import {
  FormHTMLAttributes,
  forwardRef,
  InputHTMLAttributes,
  useState,
} from 'react';
import { AsChildComponent } from '../../lib/types/AsChildComponent';
import { Slot } from '@radix-ui/react-slot';

export interface SiteSearchFormProps
  extends FormHTMLAttributes<HTMLFormElement>,
    AsChildComponent {}

export const SiteSearchForm = forwardRef<HTMLFormElement, SiteSearchFormProps>(
  (
    {
      action = 'https://www.google.com/search',
      asChild = false,
      method = 'GET',
      onSubmit,
      target = 'search',
      ...props
    },
    forwardedRef
  ) => {
    const Component = asChild ? Slot : 'form';

    type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;
    const [searchInputValue, setSearchInputValue] =
      useState<SearchInputProps['value']>('');

    const handleSearchInputValueChange: SearchInputProps['onChange'] = ({
      target: { value },
    }) => {
      setSearchInputValue(value.toString());
    };

    const handleSearchFormSubmit: SiteSearchFormProps['onSubmit'] = (event) => {
      event.preventDefault();
      const formElement = event.target as HTMLFormElement;
      const action = formElement.getAttribute('action');
      const url = `${action}?q=${searchInputValue} site:jimmyandrade.com`;

      window.open(url, target, 'noopener,noreferrer');
    };

    return (
      <Component
        action={action}
        method={method}
        onSubmit={handleSearchFormSubmit}
        target={target}
        {...props}
        ref={forwardedRef}
      >
        <label className={'sr-only'} htmlFor={'q'}>
          Buscar no site
        </label>
        <input
          id={'q'}
          name={'q'}
          onChange={handleSearchInputValueChange}
          type={'search'}
          value={searchInputValue}
        />
        <button type={'submit'}>Buscar</button>
      </Component>
    );
  }
);
SiteSearchForm.displayName = 'SiteSearchForm';
