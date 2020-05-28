import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './AboutPage.messages';
import styles from './AboutPage.module.css';

function AboutPage(props) {
  const { children } = props;

  return (
    <div className={styles.root}>
      <h2>
        <FormattedMessage {...messages.title} />
      </h2>
      {children}
    </div>
  );
}

AboutPage.propTypes = {
  /**
   * React children
   *
   * @ignore
   */
  children: PropTypes.node,
};

export default AboutPage;
