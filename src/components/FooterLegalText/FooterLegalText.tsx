import { Wordmark } from '../Wordmark';

export const FooterLegalText = () => (
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
);
