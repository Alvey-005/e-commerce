import React from 'react';
import './App.scss';
import HomePage from './pages/homepage/homepage.component';
import { Switch ,Route } from 'react-router-dom';
import ShopPage from './pages/shop/shoppage.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser : null
    }
  }
  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({currentUser:user});
    console.log(user);
   
  });
    }
    componentWillUnmount(){
      this.unSubscribeFromAuth();
    }

  render() {
    return (
      <div className="App">
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
        <Route exact  path ='/' component = {HomePage}></Route>
        <Route path ='/Shop' component = {ShopPage}></Route>
        <Route path ='/signin' component = {SignInAndSignUpPage}></Route>
        </Switch>
        
      </div>
    );
  }
}

export default App;
