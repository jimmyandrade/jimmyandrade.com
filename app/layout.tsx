import './global.css';
import type { ReactNode } from 'react';
import Link from 'next/link';
import globalNavContent from '../src/content/globalnav.json';
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
} from '../src/constants';
import { Montserrat, Zilla_Slab } from 'next/font/google';
import { Container } from '../src/lib/components/Container';
import classNames from 'classnames';
import { GlobalNavMenu } from '../src/components/GlobalNavMenu';
import type { Metadata } from 'next';
import { Wordmark } from '../src/components/Wordmark';
import {
  ChevronDownIcon,
  HeartFilledIcon,
  VercelLogoIcon,
} from '@radix-ui/react-icons';

const defaultTitle = `${appName} – website oficial – músicas, vídeos e mais`;
const mainAuthor = 'Jimmy Andrade Música e Publicidade Digital';
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
      name: mainAuthor,
      url: baseURL,
    },
  ],
  applicationName: appName,
  creator: mainAuthor,
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
    'dc.publisher': mainAuthor,
    'dc.title': defaultTitle,
    'dcterms.language': defaultLanguage,
    'dcterms.publisher': mainAuthor,
    designer: mainAuthor,
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
    web_author: mainAuthor,
    zoomdescription: description,
    zoomtitle: defaultTitle,
    zoomwords: keywordsString,
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
        <header
          className={'header fixed-top-container select-none z-30'}
          itemScope={true}
          itemType={'https://schema.org/WPHeader'}
          role={'banner'}
        >
          <GlobalNavMenu
            aria-label={'Navegação global'}
            className={'navbar'}
            id={'globalnav'}
          />
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
          className={'footer bg-grape-40 text-white'}
          itemScope={true}
          itemType={'https://schema.org/WPFooter'}
          role={'contentinfo'}
        >
          <h2 className={'sr-only'} id={'global-footer-heading'}>
            Rodapé de {appName}
          </h2>
          <Container className={'flex flex-col gap-y-2 pb-4'}>
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
                {/*<li>*/}
                {/*  Redes sociais*/}
                {/*  <ul*/}
                {/*    className={'mt-6 space-y-6 sm:mt-4 sm:space-y-4'}*/}
                {/*    role={'list'}*/}
                {/*  >*/}
                {/*    <li>*/}
                {/*      <Link*/}
                {/*        className={'touchable'}*/}
                {/*        href={`https://instagram.com/jimmyandrade`}*/}
                {/*        rel={'noopener noreferrer'}*/}
                {/*        target={'_blank'}*/}
                {/*      >*/}
                {/*        <span className={'emoji'}>*/}
                {/*          <InstagramLogoIcon />*/}
                {/*        </span>{' '}*/}
                {/*        Instagram*/}
                {/*      </Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*      <Link*/}
                {/*        className={'touchable'}*/}
                {/*        href={`https://twitter.com/${twitterHandle}`}*/}
                {/*        rel={'noopener noreferrer'}*/}
                {/*        target={'_blank'}*/}
                {/*      >*/}
                {/*        <span className={'emoji'}>*/}
                {/*          <TwitterLogoIcon />*/}
                {/*        </span>{' '}*/}
                {/*        Twitter*/}
                {/*      </Link>*/}
                {/*    </li>*/}
                {/*  </ul>*/}
                {/*</li>*/}
              </ul>
            </nav>
            <p className={'text-xs text-opacity-80 text-white'}>
              <span className="sr-only">de</span>
              <time dateTime="2007">2007</time>
              <span aria-label="a">-</span>
              <time dateTime={new Date().getFullYear().toString()}>
                {new Date().getFullYear()}
              </time>
              &nbsp;
              <Wordmark />
              .&nbsp;
              <wbr />
              Todas as imagens, músicas e material audiovisual&nbsp;
              <wbr />
              relacionados a <Wordmark />
              &nbsp;
              <wbr />
              são protegidos pela Lei de Direitos Autorais.
            </p>
            <p className={'credits text-xs text-opacity-80 text-white'}>
              Este <em lang={'en'}>website</em> foi criado com{' '}
              <span className={'sr-only'}>amor</span>
              <i aria-hidden={true} className={'emoji'}>
                <HeartFilledIcon />
              </i>{' '}
              por {mainAuthor} e hospedado na{' '}
              <Link
                href={'https://vercel.com'}
                rel={'noopener noreferrer'}
                target={'_blank'}
              >
                <span className={'emoji'}>
                  <VercelLogoIcon />
                </span>{' '}
                Vercel
              </Link>
              .
            </p>
          </Container>
        </footer>
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
