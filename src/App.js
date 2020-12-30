import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Yaa from './pages/Yaa';

// styles
import './App.css';

const App = () => {


  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/yaa' component={Yaa}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
