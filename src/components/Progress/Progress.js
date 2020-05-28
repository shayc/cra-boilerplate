import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import messages from './Progress.messages';
import styles from './Progress.module.css';

function Progress(props) {
  const { children, className } = props;

  const rootClassName = clsx(className, styles.root);

  return (
    <div className={rootClassName}>
      <FormattedMessage {...messages.loading} />

      {children}
    </div>
  );
}

Progress.propTypes = {
  /**
   * React children
   *
   * @ignore
   */
  children: PropTypes.node,
};

export default Progress;
