import React from 'react';
import { render } from '@testing-library/react';

import LocaleSelect from './LocaleSelect';

describe('<LocaleSelect />', () => {
  it('Expect to not log errors in console', () => {
    const locales = ['en-US', 'he-IL'];
    const value = 'en-US';
    const onChange = () => {};
    const spy = jest.spyOn(global.console, 'error');

    render(
      <LocaleSelect locales={locales} value={value} onChange={onChange} />
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('should render locale elements', () => {
    const locales = ['en-US', 'he-IL'];
    const value = 'he-IL';
    const onChange = () => {};

    const { getByText } = render(
      <LocaleSelect locales={locales} value={value} onChange={onChange} />
    );

    const englishElement = getByText(/english/i);
    const hebrewElement = getByText('עברית');

    expect(englishElement).toBeInTheDocument();
    expect(hebrewElement).toBeInTheDocument();
  });

  it('should have correct value for each locale', () => {
    const locales = ['en-US', 'he-IL'];
    const value = 'he-IL';
    const onChange = () => {};

    const { getByText } = render(
      <LocaleSelect locales={locales} value={value} onChange={onChange} />
    );

    const englishElement = getByText(/english/i);
    const hebrewElement = getByText('עברית');

    expect(englishElement.value).toBe('en-US');
    expect(hebrewElement.value).toBe('he-IL');
  });

  it('should have correct value select element', () => {
    const locales = ['en-US', 'he-IL'];
    const value = 'he-IL';
    const onChange = () => {};

    const { getByTestId } = render(
      <LocaleSelect
        locales={locales}
        value={value}
        onChange={onChange}
        data-testid="select"
      />
    );

    const selectElement = getByTestId('select')

    expect(selectElement.value).toBe(value);
  });
});
