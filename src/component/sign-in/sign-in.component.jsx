import React,{ Component} from 'react';
import FormInput from '../formInput/formInput.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils.js';
import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    }
    handleChange = event => {
     const {value, name} = event.target;
     this.setState({ [name] : value});

    }
    render() {
        return(
            <div className='sign-in'>
         <h2>I already have an account</h2>
         <span className='title'>Sign In with Email and password</span>

         <form onSubmit={this.handleSubmit}>
             <FormInput name='email'  type = 'email' value={this.state.email} required handleChange={this.handleChange}  label = "Email"/>
             
             <FormInput name='password'  type = 'password' value={this.state.password} required  handleChange={this.handleChange} label = "Password"/>
             
             <div className="buttons">
             <CustomButton type='submit'> Sign in</CustomButton> 
             <CustomButton onClick = {signInWithGoogle} isGoogleSignIn> {" "}Sign in With google { " "} </CustomButton>
                 </div> 
         </form>
        </div>
        )

    }
}
export default SignIn;
