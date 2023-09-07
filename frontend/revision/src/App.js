import React, { useRef, useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';
import ScrollReveal from './utils/ScrollReveal';
import  ReactGA from 'react-ga';
import AppRoute from './utils/AppRoute';
import Loginform from './Loginform';


// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import {  Switch } from 'react-router-dom';


// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    console.log("This only run once!");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <Route>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute path="/Loginform" component={Loginform} />
          </Route>
        </Switch>
      )} />
  );
}

export default App;