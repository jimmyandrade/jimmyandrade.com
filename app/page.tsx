import Image from 'next/image';
import duvidaImage from '../public/media/songs/duvida/jimmy-andrade-duvida-versao-2023.png';
import umPlanoImage from '../public/media/songs/um-plano/um-plano-2023-com-texto.png';
import oQueMeFazMaiorImage from '../public/media/songs/o-que-me-faz-maior/encarte-promocional.png';
import sinceraMenteImage from '../public/media/songs/sincera-mente/capa-do-single-sincera-mente.jpg';
import insensivelImage from '../public/media/songs/insensivel/insensivel-onerpm.jpg';
import maisUmaVozImage from '../public/media/songs/mais-uma-voz/mais-uma-voz.png';
import Link from 'next/link';
import { Countdown } from '../src/components/Countdown/Countdown';
import { GalleryImage } from '../src/components/GalleryImage/GalleryImage';
import classNames from 'classnames';
import { ChevronRightIcon } from '@radix-ui/react-icons';

export const metadata = {
  alternates: {
    canonical: '/',
  },
};

const Homepage = () => {
  return (
    <article className={'home mx-auto w-full'}>
      <h1 className={'sr-only'}>Página inicial</h1>
      <ul className={'lg:grid lg:grid-cols-2 pt-12 bg-grape-40'}>
        <li
          className={
            'homepage-section col-span-2 xl:col-span-1 lg:h-screen lg:max-h-screen'
          }
        >
          <div
            className={classNames(
              'bg-grape-40 bg-opacity-60 card absolute-center text-white',
              'bottom-4 sm:bottom-8 md:bottom-10 lg:bottom-12 xl:bottom-16'
            )}
          >
            <div className={'card-content space-y-4'}>
              <p className={'text-center text-sm'}>
                <cite>? (Dúvida)</cite> versão{' '}
                <time dateTime={'2023'}>2023</time>
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
          <Image
            alt={
              'Jimmy Andrade usa cabelo rosa e está sorrindo para o lado. Atrás dele, um fundo rosa com balões em tons de rosa.'
            }
            className={'lg:object-cover lg:object-top lg:h-screen w-full'}
            draggable={false}
            src={duvidaImage}
          />
        </li>
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
                'before:bg-olive-50 before:bg-gradient-to-r before:from-sky-60 before:to-olive-50 before:rounded-2xl before:opacity-50 before:w-full before:h-full before:absolute before:pointer-events-none before:z-10'
              )}
            >
              {/*<p*/}
              {/*  className={*/}
              {/*    'text-center pt-8 text-white md:text-md lg:text-lg xl:text-xl z-20'*/}
              {/*  }*/}
              {/*>*/}
              {/*  Música nova <time dateTime={'2023-06-27'}>27 de junho</time>:*/}
              {/*</p>*/}
              <Countdown
                className={'px-8 pt-8 pb-4 text-white z-20'}
                data-datetime={'2023-06-27T00:00:00-03:00'}
              />
              <Link
                className={classNames(
                  'button bg-white text-black',
                  'text-sm sm:text-base md:text-lg',
                  'py-2.5 px-3.5 z-30 m-2 sm:m-3 lg:m-4 xl:m-6'
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
                src={sinceraMenteImage}
              />
            </GalleryImage>
          </div>
        </li>
        <li className={'homepage-section'}>
          <Link
            className={'after:content-none'}
            href={'/o-que-me-faz-maior'}
            title={'O Que Me Faz Maior'}
          >
            <GalleryImage asChild={true} className={'aspect-square'}>
              <Image alt={''} src={oQueMeFazMaiorImage} />
            </GalleryImage>
          </Link>
        </li>
        <li className={'homepage-section'}>
          <Link href={'/um-plano'} title={'Um Plano'}>
            <Image
              alt={''}
              className={'select-none w-full'}
              draggable={false}
              src={umPlanoImage}
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
              alt={''}
              className={'select-none w-full'}
              src={maisUmaVozImage}
            />
          </Link>
        </li>
        <li className={'homepage-section'}>
          <Link
            href={'https://onerpm.link/9875483203'}
            rel={'noopener noreferrer'}
            target={'_blank'}
            title={'Insensível'}
          >
            <Image
              alt={''}
              src={insensivelImage}
              className={'select-none w-full'}
            />
          </Link>
        </li>
      </ul>
    </article>
  );
};

export default Homepage;
