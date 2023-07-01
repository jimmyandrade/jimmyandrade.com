import type { ReactNode } from 'react';
import { GlobalNavMenu } from '../../src/components/GlobalNavMenu';
import { MainContent } from '../../src/components/MainContent';
import { appName, companyName, twitterHandle } from '../../src/constants';
import { Container } from '../../src/lib/components/Container';
import Link from 'next/link';
import globalNavContent from '../../src/content/globalnav.json';
import {
  HeartFilledIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
  VercelLogoIcon,
} from '@radix-ui/react-icons';
import { FooterLegalText } from '../../src/components/FooterLegalText/FooterLegalText';

interface WebsiteLayoutProps {
  children: ReactNode;
}

const WebsiteLayout = ({ children }: WebsiteLayoutProps) => (
  <div id={'website-layout'}>
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
    <MainContent>{children}</MainContent>
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
            <li>
              Redes sociais
              <ul
                className={'mt-6 space-y-6 sm:mt-4 sm:space-y-4'}
                role={'list'}
              >
                <li>
                  <Link
                    className={'touchable'}
                    href={`https://instagram.com/jimmyandrade`}
                    rel={'noopener noreferrer'}
                    target={'_blank'}
                  >
                    <span className={'emoji'}>
                      <InstagramLogoIcon />
                    </span>{' '}
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    className={'touchable'}
                    href={`https://twitter.com/${twitterHandle}`}
                    rel={'noopener noreferrer'}
                    target={'_blank'}
                  >
                    <span className={'emoji'}>
                      <TwitterLogoIcon />
                    </span>{' '}
                    Twitter
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <FooterLegalText />
        <p className={'credits text-xs text-opacity-80 text-white'}>
          Este <em lang={'en'}>website</em> foi criado com{' '}
          <span className={'sr-only'}>amor</span>
          <i aria-hidden={true} className={'emoji'}>
            <HeartFilledIcon />
          </i>{' '}
          por {companyName} e hospedado na{' '}
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
  </div>
);

export default WebsiteLayout;
