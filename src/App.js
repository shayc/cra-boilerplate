import React, { Suspense, lazy } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { appLocales } from './i18n';

import { useLanguage } from './contexts/language-context';
import LocaleSelect from './components/LocaleSelect';
import Progress from './components/Progress';
import styles from './App.module.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

function App() {
  const { locale, direction, setLocale } = useLanguage();

  return (
    <>
      <Helmet>
        <html lang={locale} dir={direction} />
        <title>CRA Boilerplate</title>
      </Helmet>

      <LocaleSelect
        locales={appLocales}
        value={locale}
        onChange={(event) => {
          setLocale(event.target.value);
        }}
      />

      <div className={styles.app}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Suspense fallback={<Progress />}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </>
  );
}

export default App;
