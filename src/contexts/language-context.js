import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

const LanguageContext = React.createContext();

function useLanguage() {
  const context = React.useContext(LanguageContext);

  if (!context) {
    throw new Error(`useLanguage must be used within a LanguageProvider`);
  }

  return context;
}

const getLangDirection = (lang) =>
  lang === 'he' || lang === 'ar' ? 'rtl' : 'ltr';

function LanguageProvider(props) {
  const { importTranslation, initialLocale } = props;

  const [locale, setLocale] = useState(initialLocale);
  const [messages, setMessages] = useState(null);

  const value = React.useMemo(() => {
    const lang = locale.slice(0, 2);
    const direction = getLangDirection(lang);

    return {
      direction,
      locale,
      setLocale,
    };
  }, [locale]);

  useEffect(() => {
    async function loadMessages(locale) {
      const translation = await importTranslation(locale);
      setMessages(translation.default);
    }

    loadMessages(locale);
  }, [locale, importTranslation]);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <LanguageContext.Provider value={value} {...props} />
    </IntlProvider>
  );
}

LanguageProvider.propTypes = {
  importTranslation: PropTypes.func.isRequired,
  initialLocale: PropTypes.string.isRequired,
};

export { LanguageProvider, useLanguage };
