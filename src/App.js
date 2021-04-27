import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './pages/HomePage'
function App() {
  return (
    <div className="App">
      <Router>
         <Switch>
           <Route component={HomePage} exact path="/"></Route>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
