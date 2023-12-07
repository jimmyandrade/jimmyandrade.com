import { ChevronRightIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { Countdown } from 'src/components/Countdown/Countdown';
import { GalleryImage } from '../../src/components/GalleryImage/GalleryImage';
import { songToggle } from '../../src/constants';

export const metadata = {
  alternates: {
    canonical: '/',
  },
};

const Homepage = () => {
  return (
    <article id={'home-page'} className={'home mx-auto w-full'}>
      <h1 className={'sr-only'}>Página inicial</h1>
      <ul
        className={
          'lg:grid lg:grid-cols-2 pt-12  bg-sinceramente bg-gradient-to-r'
        }
      >
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
              <cite
                className={
                  'text-center pt-8 text-white md:text-md lg:text-lg xl:text-xl z-20'
                }
              >
                Ultimato.
              </cite>
              <Countdown
                data-datetime="2023-12-08T00:00:00-03:00"
                className="text-white px-6"
              />
              <Link
                className={classNames(
                  'button bg-white text-black',
                  'text-sm sm:text-base md:text-lg',
                  'py-2.5 px-3.5 z-30 m-2 sm:m-3 lg:m-4 xl:m-6',
                )}
                href={'https://ffm.to/ultimato-presave'}
                rel="noopener noreferrer"
                target={'_blank'}
                title={'Ultimato.'}
              >
                Faça pré-save do novo single
                <ChevronRightIcon />
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
                  "Na capa do single de 'Ultimato.', Jimmy Andrade está usando um casaco preto, olha para a direita. Em volta dele, uma moldura em forma de U."
                }
                height={3000}
                priority={true}
                src={'/media/songs/ultimato/capa-do-single-ultimato.png'}
                width={3000}
              />
            </GalleryImage>
          </div>
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
                <cite
                  className={
                    'text-center pt-8 text-white md:text-md lg:text-lg xl:text-xl z-20'
                  }
                >
                  Sincera/Mente
                </cite>
                <Link
                  className={classNames(
                    'button bg-white text-black',
                    'text-sm sm:text-base md:text-lg',
                    'py-2.5 px-3.5 z-30 m-2 sm:m-3 lg:m-4 xl:m-6',
                  )}
                  href={'/sinceramente'}
                  title={'Sincera/Mente'}
                >
                  Escute meu novo single
                  <ChevronRightIcon />
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
                    'Foto de um CD em que aparece, no reflexo, Jimmy Andrade, olhando para a direita'
                  }
                  height={3000}
                  priority={true}
                  src={
                    '/media/songs/sincera-mente/capa-do-single-sincera-mente.png'
                  }
                  width={3000}
                />
              </GalleryImage>
            </div>
          </li>
        )}
        {/* <li
          className={classNames(
            'homepage-section xl:col-span-1 lg:max-h-screen',
            'col-span-2 lg:h-screen',
          )}
        >
          <Link
            href={'https://www.youtube.com/watch?v=zm09rzi4Xy0'}
            rel={'noopener noreferrer'}
            target={'_blank'}
            title={"Blank Space (Jimmy's Version)"}
          >
            <Image
              alt={
                'Jimmy Andrade está de costas e tem uma tatuagem com o número 1989 em seu pescoço'
              }
              className={'lg:object-cover lg:object-top lg:h-screen w-full'}
              draggable={false}
              height={3000}
              src={'/media/songs/1989-jv/1989-jv-capa.png'}
              width={3000}
            />
          </Link>
        </li> */}
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

        <li
          className={classNames(
            'homepage-section xl:col-span-1 lg:max-h-screen',
            'col-span-2 lg:h-screen',
          )}
        >
          <Link href={'/duvida'} title={'? (Dúvida)'}>
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
