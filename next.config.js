//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  images: {
    domains: [
      '1.bp.blogspot.com',
      'culturalizabh.com.br',
      'jimmyandrade.com',
      'palcopop.com',
      'scontent-gru2-2.xx.fbcdn.net',
      'ufmg.br',
    ],
  },
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  redirects: async () => {
    return [
      {
        source: '/manifest.json',
        destination: '/manifest.webmanifest',
        permanent: true,
      },
      {
        source: '/ultimato',
        destination: 'https://onerpm.link/528000625018',
        permanent: false,
      },
      {
        source: '/ultimato/video',
        destination: 'https://www.youtube.com/watch?v=E_sZHM53ekE',
        permanent: false,
      },
      {
        source: '/ultimato/videos',
        destination: 'https://www.youtube.com/watch?v=E_sZHM53ekE',
        permanent: false,
      }
    ];
  },
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
