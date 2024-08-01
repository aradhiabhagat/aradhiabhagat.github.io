const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: false,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  assetPrefix: isProd ? '/aradhiabhagat.github.io/' : '',
  basePath: isProd ? '/aradhiabhagat.github.io' : '',
  trailingSlash: true,
};
