import Link from 'next/link';
import Image from 'next/image';
import { Wordmark } from '../../src/components/Wordmark';
import { FooterLegalText } from '../../src/components/FooterLegalText/FooterLegalText';

const LinksPage = () => (
  <article
    className={
      'flex flex-col items-center text-white mx-auto gap-y-8 px-2 py-8'
    }
    id={'links-page'}
  >
    <header>
      <Link className={'flex flex-col items-center gap-y-4'} href={'/'}>
        <Image
          alt={
            'Jimmy Andrade, uma pessoa com cabelo rosa e barba, canta em um microfone clássico'
          }
          className={'rounded-full select-none w-24 h-24'}
          draggable={false}
          height={176}
          src={'/media/avatars/jimmy-andrade-duvida.jpeg'}
          width={176}
        />
        <Wordmark />
      </Link>
    </header>
    <h2 className={'sr-only'}>Links</h2>
    <ul className={'flex flex-col gap-y-2'}>
      <li>
        <Link
          className={'button w-full px-4 bg-white text-grape-40'}
          href={'https://www.youtube.com/watch?v=ZvFQVMGsfgI'}
          title={'Assista "? (Dúvida)"'}
        >
          📺 Assista:&nbsp;<cite>? (Dúvida)</cite>
        </Link>
      </li>
      <li>
        <Link
          className={'button w-full px-4 bg-white text-grape-40'}
          href={'/duvida'}
          title={'Ouça "? (Dúvida)"'}
        >
          🎙️ Ouça:&nbsp;<cite>? (Dúvida)</cite>
        </Link>
      </li>
      <li>
        <Link
          className={'button w-full px-4 bg-white text-grape-40'}
          href={
            'https://open.spotify.com/intl-pt/artist/5cXCuau8jCVmsRoFYj5oGB?si=-kUn9lPiQIaVoBiFEVHOsA'
          }
          title={'Spotify'}
        >
          🎵 Spotify
        </Link>
      </li>
      <li>
        <Link
          className={'button w-full px-4 bg-white text-grape-40'}
          href={'https://www.deezer.com/br/artist/4899713'}
          title={'Deezer'}
        >
          🎵 Deezer
        </Link>
      </li>
      <li>
        <Link
          className={'button w-full px-4 bg-white text-grape-40'}
          href={'https://music.apple.com/br/artist/jimmy-andrade/678083982'}
          title={'Apple Music'}
        >
          🎵 Apple Music
        </Link>
      </li>
      <li>
        <Link
          className={'button w-full px-4 bg-white text-grape-40'}
          href={'https://youtube.com/jimmyandrade'}
          title={'YouTube'}
        >
          ▶️ YouTube
        </Link>
      </li>
      <li>
        <Link
          className={'button w-full px-4 bg-white text-grape-40'}
          href={'https://tiktok.com/@jimmyandrademusic'}
          title={'TikTok'}
        >
          📹 TikTok
        </Link>
      </li>
      <li>
        <Link
          className={'button w-full px-4 bg-white text-grape-40'}
          href={'https://chat.whatsapp.com/Lf2lq4rBbMX2yWjbAyaa2Q'}
          title={'WhatsApp apenas para fãs'}
        >
          <span>💬 WhatsApp</span>
          <small>&nbsp;(apenas para fãs)</small>
        </Link>
      </li>
      <li>
        <Link
          className={'button w-full px-4 bg-white text-grape-40'}
          href={'/'}
          title={'JimmyAndrade.com'}
        >
          🏠 JimmyAndrade.com
        </Link>
      </li>
      <li>
        <Link
          className={'button w-full px-4 bg-white text-grape-40'}
          href={'https://instagram.com/jimmyandrade'}
          title={'Instagram'}
        >
          📷 Instagram
        </Link>
      </li>
      <li>
        <Link
          className={'button w-full px-4 bg-white text-grape-40'}
          href={'https://twitter.com/jimmyandrade'}
          title={'Twitter'}
        >
          🐦 Twitter
        </Link>
      </li>
      <li>
        <Link
          className={'button w-full px-4 bg-white text-grape-40'}
          href={'https://onlyfans.com/jimmyandrade'}
          title={'OnlyFans (18+)'}
        >
          🔞 OnlyFans
        </Link>
      </li>
    </ul>
    <footer className={'container mx-auto text-center'}>
      <FooterLegalText />
    </footer>
  </article>
);

export default LinksPage;
