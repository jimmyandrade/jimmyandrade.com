import './global.css';
import type { ReactNode } from 'react';
import Link from 'next/link';
import globalNavContent from '../src/content/globalnav.json';
import { appName, contentAnchorName, icons } from '../src/constants';
import { Montserrat, Zilla_Slab } from 'next/font/google';
import { Container } from '../src/lib/components/Container';
import classNames from 'classnames';
import { GlobalNavMenu } from '../src/components/GlobalNavMenu';
import type { Metadata } from 'next';
import { Wordmark } from '../src/components/Wordmark';

const defaultTitle = `${appName} – website oficial – músicas, vídeos e mais`;
const url = 'https://jimmyandrade.com';
const mainAuthor = 'Jimmy Andrade Música e Publicidade Digital';

export const metadata: Metadata = {
  appLinks: {
    web: {
      should_fallback: true,
      url,
    },
  },
  appleWebApp: {
    statusBarStyle: 'black-translucent',
    title: appName,
  },
  authors: [
    {
      name: mainAuthor,
      url,
    },
  ],
  applicationName: appName,
  creator: mainAuthor,
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  keywords: [appName, 'Jimmy', 'Andrade'],
  icons,
  manifest: '/manifest.webmanifest',
  metadataBase: new URL(url),
  openGraph: {
    locale: 'pt_BR',
    siteName: appName,
    title: defaultTitle,
    type: 'website',
    url,
  },
  publisher: mainAuthor,
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
      noimageindex: false,
    },
    index: true,
    nocache: false,
  },
  themeColor: '#5F4B8B',
  title: {
    default: defaultTitle,
    template: `%s | ${appName}`,
  },
  twitter: {
    creator: '@jimmyandrade',
    title: defaultTitle,
  },
  viewport: {
    initialScale: 1,
    minimumScale: 1,
    width: 'device-width',
  },
};

const sansSerifFont = Montserrat({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-sans',
});

const serifFont = Zilla_Slab({
  display: 'swap',
  subsets: ['latin'],
  weight: '400',
  variable: '--font-serif',
});

export interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      className={classNames(
        'font-sans leading-6 scroll-smooth',
        sansSerifFont.variable,
        serifFont.variable
      )}
      dir={'ltr'}
      lang={'pt-br'}
    >
      <body className={'bg-grape-40 font-sans leading-6 m-0'} key={'body'}>
        <h1 className={'sr-only'}>
          <Wordmark />
        </h1>
        <a
          className={'sr-only focus:not-sr-only'}
          href={`#${contentAnchorName}`}
        >
          Pular para o conteúdo
        </a>
        <header
          className={'fixed-top-container select-none z-30'}
          itemScope={true}
          itemType={'https://schema.org/WPHeader'}
          role={'banner'}
        >
          <GlobalNavMenu aria-label={'Navegação global'} id={'globalnav'} />
        </header>
        <main
          className={'bg-white'}
          id={contentAnchorName}
          role={'main'}
          tabIndex={-1}
        >
          {children}
        </main>
        <footer
          aria-labelledby={'global-footer-heading'}
          className={'bg-grape-40 text-white'}
          itemScope={true}
          itemType={'https://schema.org/WPFooter'}
          role={'contentinfo'}
        >
          <h2 className={'sr-only'} id={'global-footer-heading'}>
            Rodapé de {appName}
          </h2>
          <Container>
            <nav
              className={'py-8'}
              itemScope={true}
              itemType={'https://schema.org/SiteNavigationElement'}
            >
              <ul className={'md:grid md:grid-cols-4 gap-x-8 gap-y-10 text-sm'}>
                <li>
                  <Link
                    className={'font-medium'}
                    id={'footer-globalnav-heading'}
                    href={'/'}
                    title={'Página inicial'}
                  >
                    <span itemProp={'name'}>{appName}</span>
                  </Link>
                  <ul
                    aria-labelledby={'footer-globalnav-heading'}
                    className={'mt-6 space-y-6 sm:mt-4 sm:space-y-4'}
                    role={'list'}
                  >
                    {globalNavContent.items.map((item) => (
                      <li className={'flow-root'} key={item.href}>
                        <Link
                          className={'-m-2 p-2'}
                          href={item.href}
                          title={item.title}
                        >
                          <span itemProp={'name'}>{item.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </Container>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
