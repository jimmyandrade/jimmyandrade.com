import classNames from 'classnames';
import { existsSync, readFileSync } from 'fs';
import { Metadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
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
  openGraphImages: OpenGraph['images'];
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

const getSongDataBySlug = (
  slug: PageParams['slug'],
): ContentData & {
  /**
   * @example 927
   */
  featureFmFrameHeight: number;
  /**
   * @example https://ffm.to/sinceramente
   */
  featureFmFrameURL: string;
} => {
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
  const { openGraphImages, title } = getSongDataBySlug(slug);
  const url = `/${slug}`;
  const description = `Ouça ${title} no seu serviço de música preferido, incluindo YouTube, Spotify, Apple Music e Deezer`;

  return {
    alternates: {
      canonical: url,
    },
    description,
    openGraph: {
      description,
      images: openGraphImages,
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

  const { featureFmFrameHeight, featureFmFrameURL, title } =
    getSongDataBySlug(slug);
  const frameMaxDimensions = {
    height: 960,
    width: 300,
  };

  const height = featureFmFrameHeight ?? frameMaxDimensions.height;
  const width = frameMaxDimensions.width;

  return (
    <article id={slug} className="flex justify-center bg-black">
      <iframe
        className={classNames(
          'min-w-[320px] w-full min-h-[300px]',
          `max-w-[${height}px]`,
        )}
        height={height}
        loading={'eager'}
        src={`${featureFmFrameURL}/?height=${height}&width=${width}`}
        title={title}
        width={width}
      ></iframe>
    </article>
  );
};

export default DuvidaPage;
