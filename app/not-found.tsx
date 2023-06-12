import { Container } from '../src/lib/components/Container';
import { PageHeading } from '../src/components/PageHeading/PageHeading';
import { PageHeader } from '../src/components/PageHeader/PageHeader';
import { SiteSearchForm } from '../src/components/SiteSearchForm/SiteSearchForm';

const NotFoundPage = () => {
  return (
    <Container asChild={true}>
      <article id={'not-found'}>
        <PageHeader>
          <PageHeading>Página não encontrada</PageHeading>
        </PageHeader>
        <blockquote>
          <p>
            Só eu sei o quanto eu sofri pra chegar até aqui{' '}
            <ins>e não encontrar nada interessante</ins>.
          </p>
        </blockquote>
        <p>
          A página que você está procurando não existe. Aliás, como você chegou
          aqui?
        </p>
        <blockquote>
          <p>
            Não sei seu nome
            <br />
            De onde é que vem
            <br />
            O que faz aqui
            <br />
            Se tá tudo bem&hellip;
            <br />
            Mas eu só sei que quando eu te vi, tive certeza que era{' '}
            <ins>o erro 404</ins>
          </p>
        </blockquote>
        <h3>Eu me perdi, vamos tentar&hellip;</h3>
        <ul>
          <li>
            {/* The Link component from `next/link` should not be used here, otherwise page will not redirect. */}
            <a href={'/'} rel={'home'}>
              Voltar para o início
            </a>{' '}
            provavelmente vai te ajudar;
          </li>
          <li>
            Ou&hellip; pesquisar aqui no site:
            <SiteSearchForm />
          </li>
        </ul>
      </article>
    </Container>
  );
};

export default NotFoundPage;
