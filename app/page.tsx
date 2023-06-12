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

export const metadata = {
  alternates: {
    canonical: '/',
  },
};

const Homepage = () => {
  return (
    <article className={'mx-auto w-full'}>
      <h1 className={'sr-only'}>Página inicial</h1>
      <ul className={'lg:grid lg:grid-cols-2'}>
        <li
          className={'homepage-section col-span-2 lg:h-screen lg:max-h-screen'}
        >
          <div className={'card absolute-center bottom-0'}>Dúvida</div>
          <Link
            href={'https://onerpm.link/8936683700'}
            rel={'noopener noreferrer'}
            target={'_blank'}
            title={'? (Dúvida)'}
          >
            <Image
              alt={''}
              className={'select-none w-full'}
              draggable={false}
              src={duvidaImage}
            />
          </Link>
        </li>
        <li
          className={'homepage-section col-span-2 lg:h-screen lg:max-h-screen'}
        >
          <div>
            <div
              className={classNames(
                'card absolute-center',
                'bottom-0 sm:bottom-8 md:bottom-10 lg:bottom-12 xl:bottom-16',
                'before:bg-olive-50 before:bg-gradient-to-r before:from-sky-60 before:to-olive-50 before:rounded-2xl before:opacity-50 before:w-full before:h-full before:absolute before:pointer-events-none before:z-10'
              )}
            >
              <Countdown
                className={'px-8 pt-8 pb-4 text-white z-20'}
                data-datetime={'2023-06-27T00:00:00-03:00'}
              />
              <Link
                className={classNames(
                  'bg-opacity-100 bg-white',
                  'font-semibold text-black text-center',
                  'text-sm sm:text-base md:text-lg',
                  'shadow py-2.5 px-3.5 rounded-xl z-30 m-2 sm:m-3 lg:m-4 xl:m-6',
                  'hover:bg-opacity-80'
                )}
                href={'https://onerpm.link/5461550308'}
                rel={'noopener noreferrer'}
                target={'_blank'}
                title={'Sincera/Mente'}
              >
                Faça o pré-save agora
              </Link>
            </div>
            <GalleryImage
              asChild={true}
              className={
                'aspect-square lg:object-cover lg:object-center lg:h-screen'
              }
            >
              <Image
                alt={
                  'Jimmy Andrade se apoiando em alguns catálogos telefônicos antigos e olhando para a câmera'
                }
                src={sinceraMenteImage}
              />
            </GalleryImage>
            {/*</Link>*/}
          </div>
        </li>
        <li className={'homepage-section'}>
          <Link
            className={'after:content-none'}
            href={'https://onerpm.link/2307666704'}
            rel={'noopener noreferrer'}
            target={'_blank'}
            title={'O Que Me Faz Maior'}
          >
            <GalleryImage asChild={true} className={'aspect-square'}>
              <Image alt={''} src={oQueMeFazMaiorImage} />
            </GalleryImage>
          </Link>
        </li>
        <li className={'homepage-section'}>
          <Link
            href={'https://onerpm.link/4494805323'}
            rel={'noopener noreferrer'}
            target={'_blank'}
            title={'Um Plano'}
          >
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
