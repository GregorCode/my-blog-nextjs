/* const withPWA = require('next-pwa');
const isProduction = process.env.NODE_ENV === 'production';

export default withPWA({
  pwa: {
    dest: 'public',
    register: true,
    mode: 'production',
    disable: isProduction ? false : true,
  },
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com'],
  },
});
 */
export default {
  env: {
    COMMENT_BLOG: 'GregorCode/comentarios-del-blog',
  },
};
