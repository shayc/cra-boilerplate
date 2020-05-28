import React from 'react';
import { renderWithReactIntl } from '../../setupTests';
import Progress from './Progress';

describe('<Progress />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');

    renderWithReactIntl(<Progress />);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should render loading text', () => {
    const { getByText } = renderWithReactIntl(<Progress />);
    const loadingElement = getByText(/loading/i);

    expect(loadingElement).toBeInTheDocument();
  });
});
