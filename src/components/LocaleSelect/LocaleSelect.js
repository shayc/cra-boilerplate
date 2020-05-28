import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import LocaleCode from 'locale-code';

import styles from './LocaleSelect.module.css';

function LocaleSelect(props) {
  const { className, locales, ...other } = props;

  const rootClassName = clsx(className, styles.root);

  return (
    <select className={rootClassName} {...other}>
      {locales.map((locale) => {
        return (
          <option value={locale} key={locale}>
            {LocaleCode.getLanguageNativeName(locale)}
          </option>
        );
      })}
    </select>
  );
}

LocaleSelect.propTypes = {
  /**
   * Locale list
   */
  locales: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Callback, fired when selected locale change
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Selected locale
   */
  value: PropTypes.string.isRequired,
};

export default LocaleSelect;
