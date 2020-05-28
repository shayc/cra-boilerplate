const DEFAULT_LOCALE = 'en-US';

const appLocales = ['en-US', 'he-IL'];

function importTranslation(locale) {
  return import(`./translations/${locale}.json`);
}

// `module.exports` is intentional, used by a Node.js script `extract-intl.js`.
module.exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
module.exports.appLocales = appLocales;
module.exports.importTranslation = importTranslation;
