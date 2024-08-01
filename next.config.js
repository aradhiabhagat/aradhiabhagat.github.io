const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  trailingSlash: true,
};
