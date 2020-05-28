import React from 'react';
import { render } from '@testing-library/react';

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { IntlProvider } from 'react-intl';
import messages from './translations/en-US.json';

const locale = 'en';

export function renderWithReactIntl(component) {
  return render(
    <IntlProvider locale={locale} messages={messages}>
      {component}
    </IntlProvider>
  );
}
