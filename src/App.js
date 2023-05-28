import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path = '/' exact={true} component={Home}/>
        <Route path = '/categories' exact={true} component={Category}/>
        <Route path = '/expenses' exact={true} component={Expenses}/>
        <Route path = '/login' exact={true} component={Login}/>
        <Route path = '/register' exact={true} component={Register}/>
      </Switch>
    </Router>
  );
}

export default App;
