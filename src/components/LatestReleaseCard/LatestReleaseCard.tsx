import classNames from 'classnames';
import Link from 'next/link';
import { forwardRef, HTMLAttributes } from 'react';
import { AsChildComponent } from '../../lib/types/AsChildComponent';
import { Countdown } from '../Countdown/Countdown';

export interface LatestReleaseCardProps
  extends AsChildComponent,
    HTMLAttributes<HTMLDivElement> {
  /**
   * @example
   * <LatestReleaseCard className={'absolute-center'} />
   */
  className?: string;
}

export const LatestReleaseCard = forwardRef<
  HTMLDivElement,
  LatestReleaseCardProps
>(({ className = '', children, ...props }, forwardedRef) => (
  <div
    className={classNames(
      'bg-sinceramente bg-opacity-60 card text-white',
      'bottom-4 sm:bottom-8 md:bottom-10 lg:bottom-12 xl:bottom-16',
      className,
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className={'card-content space-y-4'}>
      <p className={'text-center text-md'}>
        Dia <time dateTime="2023-11-03T00:00:00-03:00">3 de novembro</time>
        ,&nbsp;
        <br className="sm:hidden" />
        minha nova música:
        <br />
        <cite className="text-xl">Sincera/Mente</cite>
      </p>
      {children}
      <Countdown data-datetime="2023-11-03T00:00:00-03:00" />
      <p>
        <Link
          className={'button bg-white text-black w-full'}
          href={'/sinceramente'}
          title={'Faça pré-save de Sincera/Mente'}
        >
          Faça o pré-save agora
        </Link>
      </p>
    </div>
  </div>
));
LatestReleaseCard.displayName = 'LatestReleaseCard';
