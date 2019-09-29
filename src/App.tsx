import React, {useEffect, useReducer} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Categories from './components/Categories';
import Category from './components/Category';
import StoreReducer, { ActionEnum as ReducerActions, initialState } from './reducers';
import StoreContext from './context';
import ApiClient from './libs/apiClient';
import axios from "axios";

import { Languages } from './i18n';

const { SET_LANGUAGE } = ReducerActions;

const App: React.FC = () => {
  const [state, dispatch] = useReducer(StoreReducer, initialState);

  useEffect(() => {
    const language = localStorage.getItem('sessionLanguage') as Languages;
    if (language && language !== state.language) {
      dispatch({type: SET_LANGUAGE, payload: {language}});
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
          <Route path="/categories/:categoryId" component={Category}/>
        </MainContainer>
      </StoreContext.Provider>
    </Router>
  );
}

export default App;
