import { readFileSync } from 'fs';
import { Metadata } from 'next';
import { existsSync } from 'next/dist/lib/find-pages-dir';
import { notFound, redirect } from 'next/navigation';
import { join } from 'path';
import { cwd } from 'process';

type PageParams = {
  slug: string;
};
type PageProps = {
  params: PageParams;
};
type StaticParams = PageParams[];
type ContentData = {
  featureFmFrameURL: string;
  title: string;
};

export const generateStaticParams = (): StaticParams => [
  {
    slug: 'duvida',
  },
  {
    slug: 'o-que-me-faz-maior',
  },
  {
    slug: 'sinceramente',
  },
  {
    slug: 'um-plano',
  },
];

const getSongDataBySlug = (slug: PageParams['slug']): ContentData => {
  console.log(slug);

  if (['duv', 'dúvida', 'd%C3%BAvida'].includes(slug)) {
    redirect('/duvida');
  }
  if (
    [
      'sincera-mente',
      'sincer-mente',
      'sincera=mente',
      'sincera%3Dmente',
    ].includes(slug)
  ) {
    redirect('/sinceramente');
  }

  const filePath = join(cwd(), 'src/content/songs', `${slug}.json`);

  if (!existsSync(filePath)) {
    return notFound();
  }

  const fileBuffer = readFileSync(filePath);

  if (typeof fileBuffer === 'undefined') {
    return notFound();
  }

  const fileContents = fileBuffer.toString();

  if (typeof fileContents === 'undefined') {
    return notFound();
  }

  return JSON.parse(fileContents);
};

export const generateMetadata = ({ params }: PageProps): Metadata => {
  const { slug } = params;
  const { title } = getSongDataBySlug(slug);
  const url = `/${slug}`;
  const description = `Ouça ${title} no seu serviço de música preferido, incluindo YouTube, Spotify, Apple Music e Deezer`;

  return {
    alternates: {
      canonical: url,
    },
    description,
    openGraph: {
      description,
      title,
      url,
    },
    title,
    twitter: {
      cardType: 'summary_large_image',
      description,
      title,
    },
  } as Metadata;
};

const DuvidaPage = ({ params }: PageProps) => {
  const { slug } = params;

  const { featureFmFrameURL, title } = getSongDataBySlug(slug);

  return (
    <article id={slug}>
      <iframe
        className={'min-w-[320px] w-full'}
        height={1434}
        loading={'eager'}
        src={featureFmFrameURL}
        title={title}
        width={320}
      ></iframe>
    </article>
  );
};

export default DuvidaPage;
