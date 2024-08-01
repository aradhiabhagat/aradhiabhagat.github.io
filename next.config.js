const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  output: 'standalone',
  assetPrefix: isProd ? '/aradhiabhagat.github.io/' : '',
  basePath: isProd ? '/aradhiabhagat.github.io' : '',
  trailingSlash: true,
};

