import { Wordmark } from 'src/components/Wordmark';
import { PageHeader } from '../../../src/components/PageHeader';
import { PageHeading } from '../../../src/components/PageHeading';
import { Container } from '../../../src/lib/components/Container';

export const CrowdfundingPage = () => {
  const formatToCurrency = (cents: number) => {
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return formatter.format(cents / 100);
  };

  const raisedAmountFor = {
    album: 55,
    musicVideos: 0,
    concerts: 0,
  };

  const totalRaisedAmount = Object.values(raisedAmountFor).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  );

  const formattedTotalRaisedAmount = formatToCurrency(totalRaisedAmount);

  const formattedRaisedAmountFor = {
    album: formatToCurrency(raisedAmountFor.album),
    musicVideos: formatToCurrency(raisedAmountFor.musicVideos),
    concerts: formatToCurrency(raisedAmountFor.concerts),
  };

  const targetAmountByProject = 98800;

  const formattedTargetAmountByProject = formatToCurrency(
    targetAmountByProject,
  );

  const percentages = {
    album: (raisedAmountFor.album / targetAmountByProject) * 100,
    musicVideos: (raisedAmountFor.musicVideos / targetAmountByProject) * 100,
    concerts: (raisedAmountFor.concerts / targetAmountByProject) * 100,
  };

  const generalProgress =
    (percentages.album + percentages.musicVideos + percentages.concerts) / 3;

  return (
    <Container asChild={true}>
      <article
        id={'crowdfunding-page'}
        className="md:grid md:grid-cols-2 gap-4"
      >
        <PageHeader className="col-span-2">
          <PageHeading>
            Financiamento coletivo
            <br />
            para apoiar meus projetos
          </PageHeading>
        </PageHeader>
        <div className="max-w-prose">
          <h3>
            Por favor, me ajude a continuar minha jornada na música, apoiando
            meus projetos de gravação de disco, <br />
            produção de videoclipes e shows
          </h3>
          <p>
            Se você ainda não me conhece, meu nome é <Wordmark />. Sou um
            artista independente de Belo Horizonte (MG) e estou buscando apoio
            para continuar minha jornada na música.
          </p>
          <p>
            Pretendo me inscrever em três editais da Lei Paulo Gustavo que podem
            impulsionar minha carreira na música. Para isso, preciso realizar a
            contratação de uma empresa especializada em elaboração de editais,
            pois a escrita dos projetos é complexa e requer conhecimento
            técnico.
          </p>
          <p>
            Como, no momento, não tenho condições financeiras para arcar com os
            custos, estou buscando apoio através de financiamento coletivo.
          </p>
          <p>
            Com o seu apoio, conseguirei elaborar estes projetos da forma mais
            adequada, através da contratação de empresa especializada em
            elaboração de editais.
          </p>
          <p>
            <a
              className="button p-4 bg-grape-40 text-white"
              href="#como-ajudar"
            >
              Saiba como ajudar
            </a>
          </p>
          <h3>Os projetos em detalhes</h3>
          <p>
            Os projetos que pretendo submeter aos editais da Lei Paulo Gustavo
            são:
          </p>
          <ol>
            <li>
              <h4>Gravação de um disco</h4>
              <p>
                Um dos projetos visa a gravação de um disco, uma etapa essencial
                para realizar minha visão musical. Este projeto permitirá que eu
                leve minha música ao próximo nível e compartilhe minha arte com
                todos vocês.
              </p>
            </li>
            <li>
              <h4>Produção de videoclipes</h4>
              <p>
                A produção de videoclipes é outra parte importante da minha
                jornada. Com sua ajuda, poderei criar vídeos para acompanhar
                minhas músicas, adicionando imagem, cor e movimento à minha
                arte.
              </p>
            </li>
            <li>
              <h4>
                <em lang="en">Shows</em>
              </h4>
              <p>
                A terceira parte do meu projeto envolve realizar shows. Quero
                levar minha música para o palco e compartilhá-la com um público
                ao vivo em diversas cidades. Este é um sonho que estou
                trabalhando duro para realizar.
              </p>
            </li>
          </ol>
          <h3>Como a sua contribuição será utilizada</h3>
          <p>
            As contribuições que receberei serão usadas apenas para{' '}
            <strong>elaboração de projetos</strong>. Todo o valor será destinado
            à contratação da empresa 2M para a elaboração dos projetos
            necessários para os editais da Lei Paulo Gustavo. Isso inclui a
            produção de documentos detalhados para cada projeto.
          </p>
        </div>
        <div className="md:sticky md:top-0 md:z-10 p-4 pt-16">
          <h3>Status da campanha</h3>
          <ul>
            <li>
              <h4>Progresso geral</h4>
              <meter value={generalProgress} max={100}>
                {generalProgress}%
              </meter>{' '}
              {formattedTotalRaisedAmount} de {formattedTargetAmountByProject}
            </li>
            <li>
              <h4>Elaboração do projeto de gravação de disco</h4>
              <meter value={percentages.album} max={100}>
                {percentages.album}%
              </meter>{' '}
              {formattedRaisedAmountFor.album} de{' '}
              {formattedTargetAmountByProject}
            </li>
            <li>
              <h4>Elaboração do projeto de produção de videoclipes</h4>
              <meter value={percentages.musicVideos} max={100}>
                {percentages.musicVideos}%
              </meter>{' '}
              {formattedRaisedAmountFor.musicVideos} de{' '}
              {formattedTargetAmountByProject}
            </li>
            <li>
              <h4>Elaboração do projeto de shows</h4>
              <meter value={percentages.concerts} max={100}>
                {percentages.concerts}%
              </meter>{' '}
              {formattedRaisedAmountFor.concerts} de{' '}
              {formattedTargetAmountByProject}
            </li>
          </ul>
        </div>
        <div id="como-ajudar">
          <h3 className="pt-20 md:pt-0">Como você pode ajudar</h3>
          <ol>
            <li>
              <h4>Contribuição direta (PIX)</h4>
              <p>
                Você pode fazer uma contribuição direta via{' '}
                <abbr title="Pagamento Instantâneo">PIX</abbr> para a chave{' '}
                <code>contato@jimmyandrade.com</code> e depois enviar um e-mail
                com o comprovante.
              </p>
              <details className="card" tabIndex={-1}>
                <summary
                  tabIndex={0}
                  className="card-header p-8 cursor-pointer"
                >
                  Instruções detalhadas
                </summary>
                <div className="card-content">
                  <ol>
                    <li>
                      <h5>
                        Abra seu aplicativo de banco ou instituição financeira.
                      </h5>
                      <p>
                        Abra o aplicativo do seu banco ou instituição financeira
                        no seu smartphone.
                      </p>
                    </li>
                    <li>
                      <h5>Selecione a opção de pagamento via PIX.</h5>
                      <p>
                        Procure pela opção de pagamento via{' '}
                        <abbr title="Pagamento Instantâneo">PIX</abbr> no seu
                        aplicativo.
                      </p>
                    </li>
                    <li>
                      <h5>Insira a chave PIX</h5>
                      <p>
                        Insira a chave <code>contato@jimmyandrade.com</code> no
                        seu aplicativo.
                      </p>
                    </li>
                    <li>
                      <h5>Insira o valor da contribuição</h5>
                      <p>
                        Insira o valor da contribuição que você deseja fazer.
                      </p>
                    </li>
                    <li>
                      <h5>Confirme o nome do destinatário</h5>
                      <p>
                        Antes de confirmar a transferência via PIX,
                        certifique-se de que o nome do destinatário esteja
                        registrado como Paulo Henrique Andrade Mota
                        Cristianismo, que é o meu nome civil de registro.
                      </p>
                    </li>
                    <li>
                      <h5>Confirme a transferência</h5>
                      <p>Confirme a transferência via PIX.</p>
                    </li>
                    <li>
                      <h5>Envie um e-mail com o comprovante</h5>
                      <p>
                        Envie um e-mail para{' '}
                        <a href="mailto:contato@jimmyandrade.com">
                          contato@jimmyandrade.com
                        </a>{' '}
                        com o comprovante de pagamento.
                      </p>
                    </li>
                  </ol>
                </div>
              </details>
            </li>
          </ol>
          <h4>Não consegue ajudar com dinheiro neste momento?</h4>
          <ol>
            <li>
              <h5>Acompanhe o progresso</h5>
              <p>
                Se atualize com o progresso da campanha aqui. Vou manter tudo
                transparente, mostrando o quanto já foi arrecadado.
              </p>
            </li>
            <li>
              <h5>Compartilhe e apoie</h5>
              <p>
                Compartilhe esta página com amizades, familiares e colegas que
                possam ter interesse em apoiar a minha jornada na música. Cada
                compartilhamento faz a diferença.
              </p>
            </li>
          </ol>
          <aside>
            <h3>Perguntas frequentes</h3>
            <dl>
              <dt>
                Por que você não está usando uma plataforma de{' '}
                <em lang="en">crowdfunding</em>?
              </dt>
              <dd>
                <p>
                  As taxas em plataformas de <em lang="en">crowdfunding</em> são
                  altas e eu não quero que o valor arrecadado seja reduzido por
                  taxas. Como eu sei que a transparência é essencial, vou
                  prestar contas de cada centavo arrecadado nesta mesma página.
                </p>
                <p>
                  Além disso, como os prazos para elaboração e submissão desses
                  editais são rigorosos, qualquer burocracia que possa surgir ao
                  usar outras plataformas pode atrasar o processo. Por isso,
                  desde já, agradeço a sua compreensão e a confiança.
                </p>
              </dd>
              <dt>
                O que acontece se você não conseguir arrecadar o valor total?
              </dt>
              <dd>
                <p>
                  Se eu não conseguir arrecadar o valor total, vou usar o que
                  for arrecadado para elaborar os projetos que eu puder. Se
                  conseguir arrecadar o valor total, vou elaborar todos os
                  projetos.
                </p>
              </dd>
              <dt>Quando você vai submeter os projetos?</dt>
              <dd>
                <p>
                  Pretendo submeter os projetos até as{' '}
                  <time dateTime="2023-10-28 18:00">
                    18h do dia 28 de outubro de 2023
                  </time>
                  . Porém, quanto antes eu conseguir arrecadar o valor total,
                  mais tempo terei para elaborar os projetos.
                </p>
                <p>
                  O prazo para elaboração dos projetos é crítico e a aprovação
                  nesses editais é a chave para continuar minha jornada na
                  música. Cada contribuição, independentemente do valor, é uma
                  parte crucial para tornar esses projetos realidade.
                </p>
              </dd>
              <dt>Quando você vai saber se os projetos foram aprovados?</dt>
              <dd>
                <p>
                  Em breve vou atualizar esta página com as datas de divulgação
                  dos resultados dos editais.
                </p>
              </dd>
            </dl>
          </aside>
        </div>
      </article>
    </Container>
  );
};

export default CrowdfundingPage;
