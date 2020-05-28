/*
 * Progress Messages
 *
 * This contains all the text for the Progress component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Progress';

export default defineMessages({
  loading: {
    id: `${scope}.loading`,
    defaultMessage: 'Loading...',
  },
});
