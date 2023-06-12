import { Container } from '../../src/lib/components/Container';
import { PageHeading } from '../../src/components/PageHeading/PageHeading';
import { PageHeader } from '../../src/components/PageHeader/PageHeader';

export const metadata = {
  title: 'Imprensa',
  alternates: {
    canonical: '/imprensa',
  },
};

const NewsroomPage = () => (
  <Container>
    <PageHeader>
      <PageHeading>{metadata.title}</PageHeading>
    </PageHeader>
    <h2>Últimas notícias</h2>
    <article>
      <p>
        <em lang={'en'}>Press release</em>
      </p>
    </article>
  </Container>
);

export default NewsroomPage;
