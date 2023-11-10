import Link from 'next/link';
import { HTMLAttributes, forwardRef } from 'react';

export interface JimmyversoLinksProps extends HTMLAttributes<HTMLElement> {
  /**
   * @default false
   */
  asChild?: boolean;
}

export const JimmyversoLinks = forwardRef<HTMLDivElement, JimmyversoLinksProps>(
  ({ className = '', ...props }, forwardedRef) => (
    <section className={className} {...props} ref={forwardedRef}>
      <h2 className={'mb-2 font-bold'}>Jimmyverso</h2>
      <ul className={'flex flex-col gap-y-2'}>
        {/* <li>
          <Link
            className={'links-section-button'}
            href={'https://www.cameo.com/jimmyandrade'}
            rel={'noopener noreferrer'}
            target={'_blank'}
            title={'Cameo: encomende vídeos'}
          >
            📹 Cameo: encomende vídeos
          </Link>
        </li> */}
        <li>
          <Link
            className={'links-section-button'}
            href={'https://whatsapp.com/channel/0029VaCfLrV3GJP7GDZA5l1Q'}
            rel={'noopener noreferrer'}
            target={'_blank'}
            title={'Canal no WhatsApp'}
          >
            💬 Canal no WhatsApp
          </Link>
        </li>
        <li>
          <Link
            className={'links-section-button'}
            href={'https://t.me/+xcKd-SaXUT0zY2Q5'}
            rel={'noopener noreferrer'}
            target={'_blank'}
            title={'Canal no Telegram'}
          >
            💬 Canal no Telegram
          </Link>
        </li>
        <li>
          <Link
            className={'links-section-button'}
            href={'/'}
            rel={'home'}
            target={'_self'}
            title={'JimmyAndrade.com'}
          >
            🏠 Acesse JimmyAndrade.com
          </Link>
        </li>
      </ul>
    </section>
  ),
);
JimmyversoLinks.displayName = 'JimmyversoLinks';
