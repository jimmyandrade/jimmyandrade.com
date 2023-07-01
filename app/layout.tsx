import './global.css';
import type { ReactNode } from 'react';
import {
  appName,
  contentAnchorName,
  defaultLanguage,
  description,
  keywordsArray,
  keywordsString,
  icons,
  productColor,
  twitterHandle,
  pwaStartUrl,
  baseURL,
  companyName,
} from '../src/constants';
import { Montserrat, Zilla_Slab } from 'next/font/google';
import classNames from 'classnames';
import type { Metadata } from 'next';
import { Wordmark } from '../src/components/Wordmark';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const defaultTitle = `${appName} – website oficial – músicas, vídeos e mais`;

const url = '/';

export const metadata: Metadata = {
  appLinks: {
    web: {
      should_fallback: true,
      url: baseURL,
    },
  },
  appleWebApp: {
    statusBarStyle: 'black-translucent',
    title: appName,
  },
  authors: [
    {
      name: companyName,
      url: baseURL,
    },
  ],
  applicationName: appName,
  creator: companyName,
  description,
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  keywords: keywordsArray,
  icons,
  manifest: '/manifest.webmanifest',
  metadataBase: new URL(baseURL),
  openGraph: {
    determiner: 'the',
    title: defaultTitle,
    description,
    emails: 'contato@jimmyandrade',
    siteName: appName,
    locale: defaultLanguage.replace('-', '_'),
    url: `${baseURL}${url}`,
    countryName: 'Brasil',
    type: 'website',
  },
  other: {
    audience: 'all',
    'blazerr-secure': 'yes',
    'blazerr-ssl': 'yes',
    'dc.description': description,
    'dc.language': defaultLanguage,
    'dc.publisher': companyName,
    'dc.title': defaultTitle,
    'dcterms.language': defaultLanguage,
    'dcterms.publisher': companyName,
    designer: companyName,
    essaydirectory: description,
    'fb:admins': '100009370087276',
    'fb:app_id': '1254652431311045',
    'fdse-description': description,
    'fdse-keywords': keywordsString,
    fspagedescription: description,
    'geo.a1': 'MG',
    'geo.a3': 'Belo Horizonte',
    'geo.country': 'BR',
    'geo.placename': 'Belo Horizonte, Minas Gerais',
    'geo.property': `locale=${defaultLanguage}`,
    'geo.region': defaultLanguage,
    handheldfriendly: 'true',
    ie_rm_off: 'true',
    'mobile-agent': `format=html5; url=${baseURL}`,
    mobileoptimized: 320,
    'mobile-web-app-capable': 'yes',
    'msapplication-navbutton-color': productColor,
    'msapplication-starturl': `${url}${pwaStartUrl}`,
    'msapplication-tilecolor': productColor,
    'msapplication-tooltip': description,
    skype_toolbar: 'skype_toolbar_parser_compatible',
    'twitter:domain': 'jimmyandrade.com',
    'twitter:site:id': '63541022',
    'twitter:url': url,
    web_author: companyName,
    zoomdescription: description,
    zoomtitle: defaultTitle,
    zoomwords: keywordsString,
  },
  publisher: companyName,
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
  themeColor: productColor,
  title: {
    default: defaultTitle,
    template: `%s | ${appName}`,
  },
  twitter: {
    card: 'summary_large_image',
    site: twitterHandle,
    creator: twitterHandle,
    creatorId: '63541022',
    description,
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
      lang={defaultLanguage}
      id={'root'}
    >
      <body className={'bg-grape-40 font-sans leading-6 m-0'} key={'body'}>
        <h1 className={'sr-only'}>
          <Wordmark />
        </h1>
        <noscript
          dangerouslySetInnerHTML={{ __html: '<!--googleoff: all-->' }}
        />
        <a
          className={
            'skip-to-content inline-flex  touchable sr-only focus:not-sr-only focus:absolute top-0 z-40 bg-grape-40 w-fit text-white'
          }
          href={`#${contentAnchorName}`}
        >
          <span className={'inline-flex gap-x-2 items-center px-4'}>
            Ir para o conteúdo <ChevronDownIcon />
          </span>
        </a>
        <noscript
          dangerouslySetInnerHTML={{ __html: '<!--googleon: all-->' }}
        />
        {children}
        <div
          id="wp-a11y-speak-polite"
          aria-live="polite"
          aria-relevant="additions text"
          aria-atomic="true"
          className="screen-reader-text wp-a11y-speak-region"
        />
        <div
          id="wp-a11y-speak-assertive"
          aria-live="assertive"
          aria-relevant="additions text"
          aria-atomic="true"
          className="screen-reader-text wp-a11y-speak-region"
        />
      </body>
    </html>
  );
};

export default RootLayout;
