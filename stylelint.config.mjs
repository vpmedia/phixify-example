/** @type {import('stylelint').Config} */
const config = {
  extends: ['stylelint-config-standard'],
  rules: {
    'font-family-name-quotes': 'always-unless-keyword',
    'color-hex-length': 'long',
  },
};

export default config;
