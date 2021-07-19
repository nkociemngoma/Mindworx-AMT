
import './App.css';
import './pages/styles.css';
import React from "react";

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
  import EditProfile from './pages/editProfile';
  import Profile from './pages/profile';
  import LearnerPortal from './pages/learnerPortal';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  // componentDidMount() {
  //   //Add .right by default
  //   this.rightSide.classList.add("right");
  // }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }


  render () {
   


    return ( <Router>
      <Switch>
        <Route exact path ="/" component = {MainPage} />
        <Route exact path = "/NotFoundPage" component = {NotFoundPage}/>
        <Route exact path = "/Users" component = {UsersPage}/>
        <Route exact path = "/login" component = {Login}/>
        <Route exact path = "/register" component = {Register}/>
        <Route exact path = "/Home" component = {Homepage}/>
        <Route exact path = "/profile" component = {Profile}/>
        <Route exact path ="/editProfile" component = {EditProfile} />
        <Route exact path = "/learnerPortal" component = {LearnerPortal}/>
        <Redirect to="/NotFoundPage"/>
      </Switch>
    </Router>

      
    );
  }
}

const App2 = props => {
  const { isLogginActive } = this.state;
  const current = isLogginActive ? "Register" : "Login";
  const currentActive = isLogginActive ? "login" : "register";

  return (
    <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
             <Register containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
  );
};

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;
