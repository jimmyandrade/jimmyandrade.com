'use client';

import classNames from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';
import { useCountdown } from '../../hooks/useCountdown/useCountdown';
import { AsChildComponent } from '../../lib/types/AsChildComponent';
import { BigNumber } from './BigNumber';
import { CountdownLabel } from './CountdownLabel';

export interface CountdownProps
  extends HTMLAttributes<HTMLDivElement>,
    AsChildComponent {
  'data-datetime': string;
}

const formatNumber = (value: number) => {
  return value < 10 ? `0${value}` : value;
};

export const Countdown = forwardRef<HTMLDivElement, CountdownProps>(
  ({ className = '', 'data-datetime': dateTime, ...props }, forwardedRef) => {
    const { isLoading, timeLeft } = useCountdown(dateTime);

    return (
      <div
        aria-busy={isLoading}
        className={classNames(
          'grid gap-x-2 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 xl:gap-x-10 text-center select-none',
          className,
        )}
        data-datetime={dateTime}
        ref={forwardedRef}
        {...props}
      >
        <BigNumber className={'col-start-1 row-start-1'} value={timeLeft.days}>
          {isLoading ? '99' : formatNumber(timeLeft.days)}
        </BigNumber>
        <CountdownLabel className={'col-start-1 row-start-2'}>
          dias
        </CountdownLabel>
        <span className={'sr-only'}>,</span>
        <BigNumber className={'col-start-2 row-start-1'} value={timeLeft.hours}>
          {isLoading ? '23' : formatNumber(timeLeft.hours)}
        </BigNumber>
        <CountdownLabel className={'col-start-2 row-start-2 uppercase'}>
          horas
        </CountdownLabel>
        <span className={'sr-only'}>,</span>
        <BigNumber
          className={'col-start-3 row-start-1'}
          value={timeLeft.minutes}
        >
          {isLoading ? '59' : formatNumber(timeLeft.minutes)}
        </BigNumber>
        <CountdownLabel className={'col-start-3 row-start-2 uppercase'}>
          minutos
        </CountdownLabel>
        <span className={'sr-only'}>e</span>
        <BigNumber
          className={'col-start-4 row-start-1'}
          value={timeLeft.seconds}
        >
          {isLoading ? '59' : formatNumber(timeLeft.seconds)}
        </BigNumber>
        <CountdownLabel className={'col-start-4 row-start-2 uppercase'}>
          segundos
        </CountdownLabel>
      </div>
    );
  },
);
Countdown.displayName = 'Countdown';
