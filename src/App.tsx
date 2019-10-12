import React, {useEffect, useReducer} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Categories from './components/Categories';
import WelcomeScreen from './components/WelcomeScreen';
import Category from './components/Category';
import StoreReducer, { initialState } from './reducer';
import { setLanguage } from './reducer/actions';
import StoreContext from './context';
import ApiClient from './libs/apiClient';
import axios from "axios";

import { Languages } from './i18n';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(StoreReducer, initialState);

  useEffect(() => {
    const language = localStorage.getItem('sessionLanguage') as Languages;
    if (language && language !== state.language) {
      dispatch(setLanguage(language));
    }
  }, [state.language]);

  // useEffect( () =>{
  //     const prepareRequest =  ApiClient.getHeaders('');
  //     prepareRequest.then(()=>{
  //         const logClientIn = axios.get('http://127.0.0.1:8000/api/auth/20190921032517/');
  //         logClientIn.then((response)=>{
  //             console.log("New client logged in", response);
  //         });
  //     });
  // });

  return (
    <Router>
      <StoreContext.Provider value={{state, dispatch}}>
        <MainContainer>
          <Route path="/" exact component={Categories}/>
          <Route path="/welcome" exact component={WelcomeScreen}/>
          <Route path="/categories/:categoryId" component={Category}/>
        </MainContainer>
      </StoreContext.Provider>
    </Router>
  );
}

export default App;
