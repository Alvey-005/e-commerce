import React from 'react';
import './App.scss';
import HomePage from './pages/homepage/homepage.component';
import { Switch ,Route ,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Header from './component/header/header.component';


import ShopPage from './pages/shop/shoppage.component';

import Checkout from './pages/checkout/checkout.component';


import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth,createUserProfileDocument } from './firebase/firebase.utils.js';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';


class App extends React.Component {

  unSubscribeFromAuth = null;
  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
         setCurrentUser({
             id:snapShot.id,...snapShot.data()
           
         });

        });
        
      }
      setCurrentUser( userAuth);
   
   
          });
    }
    componentWillUnmount(){
      this.unSubscribeFromAuth();
    }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
        <Route exact  path ='/' component = {HomePage}></Route>
        <Route path ='/Shop' component = {ShopPage}></Route>
        <Route exact path ='/signin' render = {()=> this.props.currentUser? (<Redirect to ='/' />) : (<SignInAndSignUpPage/>) }></Route>
        <Route exact path ='/checkout' component = {Checkout}></Route>
        </Switch>
        
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps ,mapDispatchToProps)(App);
