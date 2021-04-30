import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Route } from 'react-router-dom'
import SignInPage from './pages/signin-page/signin-page.component'

function App() {
  return (
    <div className="mainApp">
    <Route exact path="/" component={HomePage}/> 
    <Route exact path="/signin" component={SignInPage}/>
    </div>
  );
}
export default App;

