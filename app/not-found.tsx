import { Container } from '../src/lib/components/Container';
import { PageHeading } from '../src/components/PageHeading/PageHeading';
import { PageHeader } from '../src/components/PageHeader/PageHeader';

const NotFoundPage = () => {
  return (
    <Container asChild={true}>
      <article id={'not-found'}>
        <PageHeader>
          <PageHeading>Página não encontrada</PageHeading>
          {/* The Link component from `next/link` should not be used here, otherwise page will not redirect. */}
          <a href={'/'} rel={'home'}>
            Voltar para o início
          </a>
        </PageHeader>
        <blockquote>
          <p>
            Só eu sei o quanto eu sofri pra chegar até aqui{' '}
            <ins>e não encontrar nada interessante</ins>.
          </p>
        </blockquote>
      </article>
    </Container>
  );
};

export default NotFoundPage;
