import React from 'react';
import { renderWithReactIntl } from '../../setupTests';
import AboutPage from './AboutPage';

describe('<AboutPage />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');

    renderWithReactIntl(<AboutPage />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have additional unit tests specified', () => {
    expect(true).toEqual(false);
  });
});
