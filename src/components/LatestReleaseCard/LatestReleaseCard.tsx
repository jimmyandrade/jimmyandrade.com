import classNames from 'classnames';
import Link from 'next/link';
import { ChevronRightIcon } from '@radix-ui/react-icons';
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
      'bg-grape-40 bg-opacity-60 card text-white',
      'bottom-4 sm:bottom-8 md:bottom-10 lg:bottom-12 xl:bottom-16',
      className,
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className={'card-content space-y-4'}>
      {children}
      <p className={'text-center text-sm'}>
        <cite>? (Dúvida)</cite> versão <time dateTime={'2023'}>2023</time>
      </p>
      <p>
        <Link
          className={'button bg-white text-black w-full'}
          href={'/duvida'}
          title={'? (Dúvida)'}
        >
          Ouvir agora <ChevronRightIcon />
        </Link>
      </p>
    </div>
  </div>
));
LatestReleaseCard.displayName = 'LatestReleaseCard';
