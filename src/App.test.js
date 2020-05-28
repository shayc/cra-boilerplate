import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { LanguageProvider } from './contexts/language-context';
import App from './App';

test('renders learn react link', () => {
  const locale = 'en';
  const importTranslation = async () => ({});

  const { getByText } = render(
    <MemoryRouter>
      <LanguageProvider
        initialLocale={locale}
        importTranslation={importTranslation}
      >
        <App />
      </LanguageProvider>
    </MemoryRouter>
  );

  const loadingElement = getByText(/Loading.../i);
  expect(loadingElement).toBeInTheDocument();
});
