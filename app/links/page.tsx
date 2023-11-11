import Image from 'next/image';
import Link from 'next/link';
import { FooterLegalText } from '../../src/components/FooterLegalText/FooterLegalText';
import { JimmyversoLinks } from '../../src/components/JimmyversoLinks/JimmyversoLinks';
import { LatestReleaseCard } from '../../src/components/LatestReleaseCard';
import { Wordmark } from '../../src/components/Wordmark';

const LinksPage = () => (
  <article
    className={
      'flex flex-col items-center text-white mx-auto gap-y-8 px-2 py-2'
    }
    id={'links-page'}
  >
    {/* <header>
      <Link
        className={'flex flex-col items-center gap-y-4'}
        href={'/'}
        rel={'home'}
        target={'_self'}
      >
        <Image
          alt="A"
          className={'rounded-full select-none w-24 h-24'}
          draggable={false}
          height={176}
          src={'/media/avatars/jimmy-andrade-avatar.jpg'}
          width={176}
        />
        <Wordmark />
      </Link>
    </header> */}
    <LatestReleaseCard className={'min-w-[300px]'}>
      <Image
        alt={'Capa do single "Sincera/Mente"'}
        className="aspect-square"
        height={500}
        priority={true}
        src={'/media/songs/sincera-mente/capa-do-single-sincera-mente.png'}
        width={500}
      />
    </LatestReleaseCard>
    <section>
      <h2 className={'mb-2 font-bold'}>Escute também</h2>
      <ul className={'flex flex-col gap-y-2'}>
        <li>
          <Link
            className={'links-section-button'}
            href={'https://soundcloud.com/jimmyandrade/sets/sinceremixes'}
            rel={'noopener noreferrer'}
            target={'_blank'}
            title="Remixes de Sincera/Mente"
          >
            <span aria-hidden={true} role={'presentation'}>
              🎛️&nbsp;
            </span>
            Remixes de&nbsp;<cite>Sincera/Mente</cite>
          </Link>
        </li>
        <li>
          <Link
            className={'links-section-button'}
            href={
              'https://open.spotify.com/playlist/4gEHuLcJegImyunC9prd1D?si=f24a8cd2fb314300'
            }
            rel={'noopener noreferrer'}
            target={'_blank'}
            title={'Playlist This is Jimmy Andrade'}
          >
            <span>
              🎵&nbsp;
              <em className={'not-italic'} lang={'en'}>
                This is
              </em>
              &nbsp;
              <Wordmark />
            </span>
          </Link>
        </li>
        <li>
          <Link
            className={'links-section-button'}
            href={
              'https://open.spotify.com/playlist/1UHHHm5p7Fczj1VGipRSni?si=b0007b7b6557475e'
            }
            rel={'noopener noreferrer'}
            target={'_blank'}
            title={'Playlist de Pop Nacional Anos 2000'}
          >
            <span aria-hidden={true} role={'presentation'}>
              💿&nbsp;
            </span>
            Pop Nacional Anos 2000
          </Link>
        </li>
        <li>
          <Link
            className={'links-section-button'}
            href="https://open.spotify.com/playlist/6HDxAtTCqwFvq29lim1Dlz?si=5ca25466f5774563"
            rel={'noopener noreferrer'}
            target={'_blank'}
            title={'Playlist de Pop/Rock Internacional 2000'}
          >
            <span aria-hidden={true} role={'presentation'}>
              💿&nbsp;
            </span>
            Pop/Rock Internacional 2000
          </Link>
        </li>
      </ul>
    </section>
    <section>
      <h2 className={'mb-2 font-bold'}>Assista também</h2>
      <ul className={'flex flex-col gap-y-2'}>
        <li>
          <Link
            className={'links-section-button'}
            href={'https://www.youtube.com/watch?v=ZvFQVMGsfgI'}
            rel={'noopener noreferrer'}
            title={'Assistir "? (Dúvida)"'}
            target={'_blank'}
          >
            📺&nbsp;<cite>? (Dúvida)</cite>
          </Link>
        </li>
        <li>
          <Link
            className={'links-section-button'}
            href={'https://www.youtube.com/watch?v=u4nS5Gkm-RM'}
            rel={'noopener noreferrer'}
            target={'_blank'}
            title={'Assistir "O Que Me Faz Maior"'}
          >
            <span aria-hidden={true} role="presentation">
              📺&nbsp;
            </span>
            <cite>O Que Me Faz Maior</cite>
          </Link>
        </li>
        <li>
          <Link
            className={'links-section-button'}
            href={'https://www.youtube.com/watch?v=-huz-hZxmvM'}
            rel={'noopener noreferrer'}
            target={'_blank'}
            title={'Assistir "Mais Uma Voz (feat. Pabllo Vittar)"'}
          >
            <span aria-hidden={true} role="presentation">
              📺&nbsp;
            </span>
            <cite>
              Mais Uma Voz <small>(feat. Pabllo Vittar)</small>
            </cite>
          </Link>
        </li>
        <li>
          <Link
            className={'links-section-button'}
            href={'https://youtube.com/jimmyandrade'}
            rel={'noopener noreferrer'}
            target={'_blank'}
            title={'YouTube'}
          >
            <span aria-hidden={true} role="presentation">
              📺&nbsp;
            </span>{' '}
            Canal no YouTube
          </Link>
        </li>
      </ul>
    </section>
    <section>
      <h2 className={'mb-2 font-bold'}>Plataformas de música</h2>
      <ul className={'flex flex-col gap-y-2'}>
        <li>
          <Link
            className={'links-section-button'}
            href={
              'https://open.spotify.com/intl-pt/artist/5cXCuau8jCVmsRoFYj5oGB?si=-kUn9lPiQIaVoBiFEVHOsA'
            }
            rel={'noopener noreferrer'}
            target={'_blank'}
            title={'Spotify'}
          >
            🎵 Spotify
          </Link>
        </li>
        <li>
          <Link
            className={'links-section-button'}
            href={'https://www.deezer.com/br/artist/4899713'}
            rel={'noopener noreferrer'}
            target={'_blank'}
            title={'Deezer'}
          >
            🎵 Deezer
          </Link>
        </li>
        <li>
          <Link
            className={'links-section-button'}
            href={'https://music.apple.com/br/artist/jimmy-andrade/678083982'}
            rel={'noopener noreferrer'}
            target={'_blank'}
            title={'Apple Music'}
          >
            🎵 Apple Music
          </Link>
        </li>
        <li>
          <Link
            className={'links-section-button'}
            href={
              'https://music.amazon.com.br/artists/B00HT9E0C4/jimmy-andrade'
            }
            rel={'noopener noreferrer'}
            target={'_blank'}
            title={'Amazon Music'}
          >
            🎵 Amazon Music
          </Link>
        </li>
      </ul>
    </section>
    <section>
      <h2 className={'mb-2 font-bold'}>Redes sociais</h2>
      <ul className={'flex flex-col gap-y-2'}>
        <li>
          <Link
            className={'links-section-button'}
            href={'https://instagram.com/jimmyandrade'}
            rel={'noopener noreferrer'}
            target={'_blank'}
            title={'Instagram'}
          >
            📷 Instagram
          </Link>
        </li>
        <li>
          <Link
            className={'links-section-button'}
            href={'https://www.threads.net/@jimmyandrade'}
            rel={'noopener noreferrer'}
            target={'_blank'}
            title={'Threads'}
          >
            🧵 Threads
          </Link>
        </li>
        <li>
          <Link
            className={'links-section-button'}
            href={'https://www.tiktok.com/@jimmyandrademusic'}
            rel={'noopener noreferrer'}
            target={'_blank'}
            title={'TikTok'}
          >
            📹 TikTok
          </Link>
        </li>
        <li>
          <Link
            className={'links-section-button'}
            href={'https://x.com/jimmyandrade'}
            rel={'noopener noreferrer'}
            target={'_blank'}
            title={'Twitter'}
          >
            🐦 X (Twitter)
          </Link>
        </li>
      </ul>
    </section>
    <JimmyversoLinks />
    <footer className={'container mx-auto text-center'}>
      <FooterLegalText />
    </footer>
  </article>
);

export default LinksPage;
