import { Wordmark } from '../../../src/components/Wordmark';
import { PageHeader } from '../../../src/components/PageHeader';
import { PageHeading } from '../../../src/components/PageHeading';
import { Container } from '../../../src/lib/components/Container';

const BookingPage = () => (
  <Container asChild={true}>
    <article id={'booking-page'}>
      <PageHeader>
        <PageHeading>
          Contrate <Wordmark />
        </PageHeading>
      </PageHeader>
      <h3>Dúvidas frequentes</h3>
      <ul className={'flex flex-col gap-y-4'}>
        <li>
          <details open={true}>
            <summary>Você emite nota?</summary>
            <p>
              Sim, emito nota fiscal de serviço através do{' '}
              <abbr
                className={'initialism'}
                title={'Microempreendedor Individual'}
              >
                MEI
              </abbr>
              . Possuo{' '}
              <abbr
                className={'initialism'}
                title={'Cadastro Nacional de Pessoa Jurídica'}
              >
                CNPJ
              </abbr>{' '}
              com{' '}
              <abbr
                className={'initialism'}
                title={'Classificações Nacionais das Atividades Econômicas'}
              >
                CNAEs
              </abbr>{' '}
              dedicadas às atividades de música.
            </p>
          </details>
        </li>
        <li>
          <details open={true}>
            <summary>Qual tipo de música você toca?</summary>
            <p>
              Faço música autoral (que eu mesmo escrevo) numa estética que
              mistura a música pop, o rock e a MPB.
            </p>
          </details>
        </li>
        <li>
          <details open={true}>
            <summary>Quais formatos de show você possui?</summary>
            <p>
              Atualmente, há o formato de um show completo com banda e o formato
              voz-e-violão. Porém, dependendo da proximidade da data, o show
              completo com banda pode não estar disponível.
            </p>
            <p>
              Por isso, se você está procurando um show completo com banda, é
              importante definirmos uma data confortável para ambas as partes.
            </p>
            <p>
              Shows no formato voz-e-violão têm uma operação mais complexa e,
              por isso, podem ser agendados com uma antecedência um pouco menor.
            </p>
          </details>
        </li>
      </ul>
    </article>
  </Container>
);

export default BookingPage;
