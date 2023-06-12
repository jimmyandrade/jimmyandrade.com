import {
  appName,
  description,
  icons,
  productColor,
  pwaStartUrl,
} from '../../src/constants';
import { NextResponse } from 'next/server';

export const GET = () => {
  const data = {
    background_color: productColor,
    description,
    display: 'standalone',
    icons: icons.map(({ sizes, url, type }) => ({
      src: url,
      sizes,
      type,
    })),
    id: pwaStartUrl,
    name: appName,
    scope: '/',
    shortcuts: [
      {
        name: 'Loja',
        short_name: 'Loja',
        description: 'Compre vinis, camisetas e mais',
        url: '/loja?source=pwa',
      },
      {
        name: 'Imprensa',
        short_name: 'Imprensa',
        description: 'Encontre releases e menções na mídia sobre Jimmy Andrade',
        url: '/imprensa?source=pwa',
      },
    ],
    short_name: appName,
    start_url: pwaStartUrl,
    theme_color: productColor,
  };
  return NextResponse.json(data);
};
