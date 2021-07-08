
import './App.css';
import './pages/styles.css';

import { BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect } from "react-router-dom";

  //Pages
  import MainPage from "./pages";
  import NotFoundPage from './pages/NotFoundPage';
  import UsersPage from './pages/Users';
  import Login from './pages/login';
  import Register from './pages/register';
  import Homepage from './pages/home';
import { Component } from 'react';

class App extends Component {
  render () {
    return ( <Router>
      <Switch>
        <Route exact path ="/" component = {MainPage} />
        <Route exact path = "/NotFoundPage" component = {NotFoundPage}/>
        <Route exact path = "/Users" component = {UsersPage}/>
        <Route exact path = "/login" component = {Login}/>
        <Route exact path = "/register" component = {Register}/>
        <Route exact path = "/Home" component = {Homepage}/>
        <Redirect to="/NotFoundPage"/>
      </Switch>
    </Router>
    );
  }
}

export default App;
