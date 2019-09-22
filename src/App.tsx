import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Categories from './components/Categories';
import Category from './components/Category';

const App: React.FC = () => {
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
