import { Container } from '../../src/lib/components/Container';
import { contentAnchorName } from '../../src/constants';
import { PageHeading } from '../../src/components/PageHeading/PageHeading';
import { PageHeader } from '../../src/components/PageHeader/PageHeader';

export const metadata = {
  title: 'Loja',
  alternates: {
    canonical: '/loja',
  },
};

const StorePage = () => (
  <Container id={contentAnchorName}>
    <PageHeader>
      <PageHeading>Loja</PageHeading>
    </PageHeader>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </Container>
);

export default StorePage;
