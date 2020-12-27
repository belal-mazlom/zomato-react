/**
 * @see https://www.gatsbyjs.org/docs/babel/
 * @see https://babeljs.io/docs/en/configuration
 * @see https://babeljs.io/docs/en/config-files
 */
const config = api => {
  api.cache.using(() => process.env.NODE_ENV === `development`);

  return {
    /**
     * @see https://babeljs.io/docs/en/babel-plugin-proposal-nullish-coalescing-operator
     * @see https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining
     */
    plugins: [
      `@babel/plugin-proposal-nullish-coalescing-operator`,
      `@babel/plugin-proposal-optional-chaining`,
      ['module-resolver', {
        'alias': {
          '@assets': './src/assets',
          '@components': './src/components',
          '@layouts': './src/layouts',
          '@pages': './src/pages',
          '@utils': './src/utils',
          '@images': './src/assets/images',
          '@styledComponents': './src/components/styledComponents',
          '@styles': './src/assets/styles',
          '@config': './src/config',
        },
      }]
    ],
    /**
     * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/babel-preset-gatsby
     * @see https://www.gatsbyjs.org/docs/browser-support/
     */
    presets: [`babel-preset-gatsby`],
    
  }
}

module.exports = config
