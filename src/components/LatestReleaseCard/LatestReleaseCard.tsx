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
        Dia <time dateTime="2023-12-08T00:00:00-03:00">8 de dezembro</time>
        ,&nbsp;
        <br className="sm:hidden" />
        minha próxima música:
        <br />
        <cite className="text-xl">Ultimato</cite>
      </p>
      {children}
      <div className="flex flex-col sm:flex-row gap-y-2 gap-x-2">
        {/* <Link
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
        </Link> */}
        <Link
          className={'button bg-white text-black w-full'}
          href={'/ultimato'}
          title={'Fazer o pré-save de "Ultimato." agora'}
        >
          Fazer o pré-save de&nbsp;<cite>Ultimato.</cite>&nbsp;agora
        </Link>
      </div>
    </div>
  </div>
));
LatestReleaseCard.displayName = 'LatestReleaseCard';
