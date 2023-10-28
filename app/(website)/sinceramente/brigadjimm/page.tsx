import { JimmyversoLinks } from '../../../../src/components/JimmyversoLinks/JimmyversoLinks';
import { PageHeader } from '../../../../src/components/PageHeader';
import { PageHeading } from '../../../../src/components/PageHeading';
import { Container } from '../../../../src/lib/components/Container';

export const metadata = {
  title: 'Brigadjimm por fazer pré-save de Sincera/Mente',
};

const SinceraMenteThanksPage = () => (
  <Container asChild={true}>
    <article id="sincera-mente-thanks-page">
      <PageHeader>
        <PageHeading>
          Alô? Dia 3 de novembro, <br />
          você vai ouvir <cite>Sincera/Mente</cite> <br />
          antes de todo mundo 💚
        </PageHeading>
      </PageHeader>
      <p className="text-lg">
        Enquanto isso, aproveite para fazer parte do&nbsp;Jimmyverso{' '}
        <br className="hidden md:block" />
        e&nbsp;receber conteúdo&nbsp;exclusivo sobre a&nbsp;música:
      </p>
      <JimmyversoLinks className="pb-10 max-w-prose" />
    </article>
  </Container>
);

export default SinceraMenteThanksPage;
