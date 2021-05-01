import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Route } from 'react-router-dom'
import SignInPage from './pages/signin-page/signin-page.component'
import ProfilePage from './pages/profile-page/profile-page.component'

//redux connectors and actions
import {connect} from "react-redux";
import {startAction} from "actions/startAction";
import {stopAction} from "actions/stopAction";

function App() {
  return (

    <img
    src={logo}
    className={
      "App-logo"+(this.props.rotate ? "":"App-logo-paused")
    }
    onClick={this.props.rotate ? this.props.stopAction : this.props.startAction}

    />
    
  );
}


export default connect()(App);

