import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Header from './Components/Header';
import Home from "./Pages/Home"

function App() {
  return <main>
    <Header />
    <Switch>
      <Route path='/' exact component={Home} />
      {/* <Route path='/login' component={Login} /> */}
    </Switch>

  </main>
}
console.log('App');


export default App;
