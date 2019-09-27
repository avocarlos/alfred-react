import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Categories from './components/Categories';
import Category from './components/Category';
import ApiClient from './libs/apiClient';
import axios from "axios";


const App: React.FC = () => {
  useEffect( () =>{
      const prepareRequest =  ApiClient.getHeaders('');
      prepareRequest.then(()=>{
          const logClientIn = axios.get('http://127.0.0.1:8000/api/auth/20190921032517/');
          logClientIn.then((response)=>{
              console.log("New client logged in", response);
          });
      });
  });

  return (
    <Router>
      <MainContainer>
        <Route path="/" exact component={Categories}/>
        <Route path="/categories/:categoryId" component={Category}/>
      </MainContainer>
    </Router>
  );
}

export default App;
