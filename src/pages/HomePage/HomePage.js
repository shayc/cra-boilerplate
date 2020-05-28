import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './HomePage.messages';
import styles from './HomePage.module.css';

function HomePage(props) {
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

HomePage.propTypes = {
  /**
   * React children
   *
   * @ignore
   */
  children: PropTypes.node,
};

export default HomePage;
