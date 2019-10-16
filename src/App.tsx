import React, {useEffect, useReducer} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainContainer from './components/MainContainer';
import HomeScreen from './components/HomeScreen';
import WelcomeScreen from './components/WelcomeScreen';
import MenuScreen from './components/MenuScreen';
import StoreReducer, { initialState } from './reducer';
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

  useEffect(() => {
    ApiClient.subscribe();
  }, []);

  return (
    <Router basename={PUBLIC_URL}>
      <StoreContext.Provider value={{state, dispatch}}>
        <MainContainer>
          <Route path="/" exact component={HomeScreen}/>
          <Route path="/welcome" exact component={WelcomeScreen}/>
          <Route path="/categories/:categoryId" component={MenuScreen}/>
        </MainContainer>
      </StoreContext.Provider>
    </Router>
  );
}

export default App;
