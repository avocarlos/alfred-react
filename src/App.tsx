import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Categories from './components/Categories';

const App: React.FC = () => {
  return (
    <Router>
      <MainContainer>
        <Route path="/" exact component={Categories}/>
        <Route path="/categories/:id" component={Categories}/>
      </MainContainer>
    </Router>
  );
}

export default App;
