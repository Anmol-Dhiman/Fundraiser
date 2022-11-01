import React,{useState} from "react";
import styles from "./Login.module.css";
import logo from "../Images/Vector.png";
import SignUp from "../SignUp/SignUp";
// import {BrowserRouter, Routes ,Route,Link, useNavigate} from 'react-router-dom'

const Login = (props) => {

    const[enteredEmail,setEnteredEmail] = useState('');
    const[enteredPassword,setEnteredPassword] = useState('');

    // const navigate = useNavigate();

    const emailHandler =(event) =>{
        setEnteredEmail(event.target.value)
    }
    const passwordHandler = (event) => {
        setEnteredPassword(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(enteredEmail,enteredPassword)
    }

  return (
   
    <React.Fragment>
      <form onSubmit ={submitHandler}>
        <img className={styles.img} src={logo} alt="logo"></img>
        <div className={styles["login-form"]}>
          <input 
            required 
            id='email-id'
            className={styles.input} 
            type="email"
            value={enteredEmail}
            onChange={emailHandler}
            placeholder="Email" 
                
            />
          <input 
            required
            className={styles.input}
            id='pass-id'
            type="password"
            value={enteredPassword}
            onChange={passwordHandler}
            placeholder="Password"
          />
          <button type='submit' id='submit-btn-id' className={styles["login-btn"]}>Login</button>
        </div>
      </form>
      <p>
        <a className={styles['forgot-pass']} href="/forgotpassword">
          Forgot Password ?
        </a>
      </p>
      <h5 className={styles["dont-have-acc"]}>
        Don't have an account? 
        <span
            onClick={() => {props.onFormChange("register")}}
            to="/signup" 
            id="register-btn-id"
            element={<SignUp />} 
            className={styles["a-signup"]}>
            SignUp.              
        </span>
      </h5>
  
    </React.Fragment>
 
  );
};

export default Login;
