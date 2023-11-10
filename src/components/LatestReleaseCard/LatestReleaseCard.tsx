import classNames from 'classnames';
import Link from 'next/link';
import { forwardRef, HTMLAttributes } from 'react';
import { AsChildComponent } from '../../lib/types/AsChildComponent';

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
        {/* Dia <time dateTime="2023-11-03T00:00:00-03:00">3 de novembro</time>
        ,&nbsp;
         */}
        Assista ao clipe&nbsp;
        <br className="sm:hidden" />
        da minha nova música:
        <br />
        <cite className="text-xl">Sincera/Mente</cite>
      </p>
      {children}
      <div className="flex flex-col sm:flex-row gap-y-2 gap-x-2">
        <Link
          className="button bg-white text-black w-full"
          href={'https://www.youtube.com/watch?v=H5ZgsNUmfOM'}
          rel={'noopener noreferrer'}
          target={'_blank'}
          title={'Assistir ao clipe de Sincera/Mente'}
        >
          Assistir clipe no&nbsp;
          <em lang="en" className="not-italic">
            YouTube
          </em>
        </Link>
        <Link
          className={'button bg-white text-black w-full'}
          href={'/sinceramente'}
          title={'Escutar Sincera/Mente agora'}
        >
          Ouvir nas plataformas
        </Link>
      </div>
    </div>
  </div>
));
LatestReleaseCard.displayName = 'LatestReleaseCard';
