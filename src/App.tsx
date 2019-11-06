import React, {useEffect, useReducer} from 'react';
import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import MainContainer from './components/MainContainer';
import HomeScreen from './views/HomeScreen';
import WelcomeScreen from './views/WelcomeScreen';
import MenuScreen from './views/MenuScreen';
import StoreReducer from './reducer';
import { initialState } from './reducer/initialState';
import { setLanguage } from './reducer/actions';
import StoreContext from './context';
import ApiClient from './lib/apiClient';

import { Languages } from './i18n';

const PUBLIC_URL = process.env.PUBLIC_URL;

const App: React.FC = () => {
  const [state, dispatch] = useReducer(StoreReducer, initialState);

  useEffect(() => {
    const language = localStorage.getItem('sessionLanguage') as Languages;
    if (language && language !== state.language) {
      dispatch(setLanguage(language));
    }
  }, [state.language]);

  // useEffect(() => {
  //   ApiClient.subscribe();
  // }, []);

  return (
    <Router basename={PUBLIC_URL}>
      <StoreContext.Provider value={{state, dispatch}}>
        <Switch>
          <Route path="/welcome" exact>
            <WelcomeRouting />
          </Route>
          <Route path="/">
            <AppRouting />  
          </Route>
        </Switch>
      </StoreContext.Provider>
    </Router>
  );
}

function WelcomeRouting() {
  const history = useHistory();

  useEffect(() => {
    const setUpDone = localStorage.getItem('setUp');

    if (setUpDone) {
      history.push('/');
    }
  });

  return (
    <Switch>
      <Route path="/welcome" exact>
        <WelcomeScreen/>
      </Route>
    </Switch>
  );
}

function AppRouting() {
  const history = useHistory();

  useEffect(() => {
    const setUpDone = localStorage.getItem('setUp');

    if (!setUpDone) {
      history.push('/welcome');
    }
  }, []);

  return (
    <MainContainer>
      <Switch>
        <Route path="/" exact>
          <HomeScreen />
        </Route>
        <Route path="/categories/1" exact>
          <MenuScreen />
        </Route>
      </Switch>
    </MainContainer>
  );
}

export default App;
