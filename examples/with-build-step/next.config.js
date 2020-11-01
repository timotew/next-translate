const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  i18n: {
    locales: ['en', 'ca', 'es'],
    defaultLocale: 'en',
    pages: {
      '*': ['common'],
      '/404': ['error'],
      '/': ['home'],
      '/dashboard': ['home'],
      'rgx:^/more-examples': ['more-examples'],
    },
  },
})
