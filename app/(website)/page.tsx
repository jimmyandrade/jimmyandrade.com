import Image from 'next/image';
import Link from 'next/link';
import { Countdown } from '../../src/components/Countdown/Countdown';
import { GalleryImage } from '../../src/components/GalleryImage/GalleryImage';
import classNames from 'classnames';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { songToggle } from '../../src/constants';
import { LatestReleaseCard } from '../../src/components/LatestReleaseCard/LatestReleaseCard';

export const metadata = {
  alternates: {
    canonical: '/',
  },
};

const Homepage = () => {
  return (
    <article id={'home-page'} className={'home mx-auto w-full'}>
      <h1 className={'sr-only'}>Página inicial</h1>
      <ul className={'lg:grid lg:grid-cols-2 pt-12 bg-grape-40'}>
        <li
          className={classNames(
            'homepage-section xl:col-span-1 lg:max-h-screen',
            'col-span-2 lg:h-screen',
          )}
        >
          <LatestReleaseCard className={'absolute-center'} />
          <Image
            alt={
              'Jimmy Andrade usa cabelo rosa, barba e está segurando um microfone. Atrás dele, um fundo rosa.'
            }
            className={'lg:object-cover lg:object-top lg:h-screen w-full'}
            draggable={false}
            height={3000}
            priority={true}
            src={'/media/songs/duvida/capa-duvida-2023.jpg'}
            width={3000}
          />
        </li>
        {songToggle.sinceramente && (
          <li
            className={
              'homepage-section col-span-2 lg:h-screen lg:max-h-screen xl:col-span-1'
            }
          >
            <div>
              <div
                className={classNames(
                  'card absolute-center',
                  'bottom-4 sm:bottom-8 md:bottom-10 lg:bottom-12 xl:bottom-16',
                  'before:bg-olive-50 before:bg-gradient-to-r before:from-sky-60 before:to-olive-50 before:rounded-2xl before:opacity-50 before:w-full before:h-full before:absolute before:pointer-events-none before:z-10',
                )}
              >
                <p
                  className={
                    'text-center pt-8 text-white md:text-md lg:text-lg xl:text-xl z-20'
                  }
                >
                  Música nova <time dateTime={'2023-06-27'}>27 de junho</time>:
                </p>
                <Countdown
                  className={'px-8 pt-8 pb-4 text-white z-20'}
                  data-datetime={'2023-06-27T00:00:00-03:00'}
                />
                <Link
                  className={classNames(
                    'button bg-white text-black',
                    'text-sm sm:text-base md:text-lg',
                    'py-2.5 px-3.5 z-30 m-2 sm:m-3 lg:m-4 xl:m-6',
                  )}
                  href={'/sinceramente'}
                  title={'Sincera/Mente'}
                >
                  Sincera/Mente: faça o pré-save <ChevronRightIcon />
                </Link>
              </div>
              <GalleryImage
                asChild={true}
                className={
                  'aspect-square lg:object-cover lg:object-bottom lg:h-screen'
                }
              >
                <Image
                  alt={
                    'Jimmy Andrade se apoiando em alguns catálogos telefônicos antigos e olhando para a câmera'
                  }
                  src={
                    '/media/songs/sincera-mente/capa-do-single-sincera-mente.jpg'
                  }
                />
              </GalleryImage>
            </div>
          </li>
        )}
        <li
          className={classNames(
            'homepage-section xl:col-span-1 lg:max-h-screen',
            'col-span-2 lg:h-screen',
          )}
        >
          <Link
            className={'after:content-none'}
            href={'/o-que-me-faz-maior'}
            title={'O Que Me Faz Maior'}
          >
            <GalleryImage
              asChild={true}
              className={
                'aspect-square lg:object-cover lg:object-left lg:h-screen w-full'
              }
            >
              <Image
                alt={
                  'Jimmy Andrade está de cabelo roxo e barba em um estúdio fotográfico. No lado direito, o texto "O Que Me Faz Maior"'
                }
                height={1080}
                src={'/media/songs/o-que-me-faz-maior/encarte-promocional.png'}
                width={1080}
              />
            </GalleryImage>
          </Link>
        </li>
        <li className={'homepage-section'}>
          <Link href={'/um-plano'} title={'Um Plano'}>
            <Image
              alt={
                'Jimmy Andrade usa cabelos escuros e barba e está em uma biblioteca escura. Seu rosto é iluminado por luzes nas cores rosa e azul. Uma letra U está em frente ao seu rosto. Do lado direito, os textos "Um Plano" e "Jimmy Andrade"'
              }
              className={'select-none w-full'}
              draggable={false}
              height={3008}
              src={'/media/songs/um-plano/um-plano-2023-com-texto.png'}
              width={3008}
            />
          </Link>
        </li>
        <li className={'homepage-section'}>
          <Link
            href={'https://www.youtube.com/watch?v=-huz-hZxmvM'}
            rel={'noopener noreferrer'}
            target={'_blank'}
            title={'Mais Uma Voz (feat. Pabllo Vittar)'}
          >
            <Image
              alt={
                'Pabllo Vittar e Jimmy Andrade em um estúdio fotográfico com o fundo amarelo'
              }
              className={'select-none w-full'}
              height={1920}
              src={'/media/songs/mais-uma-voz/mais-uma-voz.png'}
              width={1920}
            />
          </Link>
        </li>
        {songToggle.insensivel && (
          <li className={'homepage-section'}>
            <Link
              href={'https://onerpm.link/9875483203'}
              rel={'noopener noreferrer'}
              target={'_blank'}
              title={'Insensível'}
            >
              <Image
                alt={''}
                src={'../public/media/songs/insensivel/insensivel-onerpm.jpg'}
                className={'select-none w-full'}
              />
            </Link>
          </li>
        )}
      </ul>
    </article>
  );
};

export default Homepage;
