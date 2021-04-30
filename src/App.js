import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Route } from 'react-router-dom'
import SignInPage from './pages/signin-page/signin-page.component'
import ProfilePage from './pages/profile-page/profile-page.component'

function App() {
  return (
    <div className="mainApp">
    <Route exact path="/" component={HomePage}/> 
    <Route path="/signin" component={SignInPage}/>
    <Route path="/profile-page" component={ProfilePage}/>
    
    </div>
  );
}
export default App;

