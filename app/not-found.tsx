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
        <h3>Eu me perdi, vamos tentar&hellip;</h3>
          <li>
            Ou&hellip; pesquisar aqui no site:
            <SiteSearchForm />
          </li>
      </article>
    </Container>
  );
};
