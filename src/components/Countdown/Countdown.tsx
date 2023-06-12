'use client';

import { useCountdown } from '../../hooks/useCountdown/useCountdown';
import { BigNumber } from './BigNumber';
import { CountdownLabel } from './CountdownLabel';
import { forwardRef, HTMLAttributes } from 'react';
import { AsChildComponent } from '../../lib/types/AsChildComponent';
import classNames from 'classnames';

export interface CountdownProps
  extends HTMLAttributes<HTMLDivElement>,
    AsChildComponent {}

const formatNumber = (value: number) => {
  return value < 10 ? `0${value}` : value;
};

export const Countdown = forwardRef<HTMLDivElement, CountdownProps>(
  ({ className = '', ...props }, forwardedRef) => {
    const timeLeft = useCountdown('2023-06-27T00:00:00-03:00');

    return (
      <div
        className={classNames(
          'grid gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 xl:gap-x-12 text-center select-none',
          className
        )}
        ref={forwardedRef}
        {...props}
      >
        <BigNumber className={'col-start-1 row-start-1'} value={timeLeft.days}>
          {formatNumber(timeLeft.days)}
        </BigNumber>
        <CountdownLabel className={'col-start-1 row-start-2'}>
          dias
        </CountdownLabel>
        <span className={'sr-only'}>,</span>
        <BigNumber className={'col-start-2 row-start-1'} value={timeLeft.hours}>
          {formatNumber(timeLeft.hours)}
        </BigNumber>
        <CountdownLabel className={'col-start-2 row-start-2 uppercase'}>
          horas
        </CountdownLabel>
        <span className={'sr-only'}>,</span>
        <BigNumber
          className={'col-start-3 row-start-1'}
          value={timeLeft.minutes}
        >
          {formatNumber(timeLeft.minutes)}
        </BigNumber>
        <CountdownLabel className={'col-start-3 row-start-2 uppercase'}>
          minutos
        </CountdownLabel>
        <span className={'sr-only'}>e</span>
        <BigNumber
          className={'col-start-4 row-start-1'}
          value={timeLeft.seconds}
        >
          {formatNumber(timeLeft.seconds)}
        </BigNumber>
        <CountdownLabel className={'col-start-4 row-start-2 uppercase'}>
          segundos
        </CountdownLabel>
      </div>
    );
  }
);
Countdown.displayName = 'Countdown';
