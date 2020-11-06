import React, { useState } from 'react'
import '../Register.css'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    labelRoot: {
        marginLeft: 10
      },
    labelFocused: {},
    customError: {
        color: 'red',
        fontSize: '0.8rem',
        marginTop: 10
    }
}));


function Loginnew() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const classes = useStyles();

    const handleLogin = (event) => {
        event.preventDefault();
        const userData = {
            email: email,
            password: password
        }
        axios.post('/login', userData)
            .then((res) => {
                console.log(res.data);
                localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
            })
            .catch((err) => {
                setErrors(err.response.data)
            })
    }
    return (
        <div className="register__app">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" />
            <div id="wrapper">
                <div className="container">
                    <div className="phone-app-demo"></div>
                    <div className="form-data">
                        <form noValidate action="" onSubmit={handleLogin}>
                            <div className="logo">
                                <h1 className="instaName">Instagram</h1>
                            </div>
                            <TextField 
                                InputLabelProps={{classes: {root: classes.labelRoot,focused: classes.labelFocused}}} 
                                InputProps={{ disableUnderline: true }} 
                                id="email" name="email" label="email" type="email" helperText={errors.email} error={errors.email ? true : false} 
                                value={email} onChange={(e) => setEmail(e.target.value)} fullWidth/>
                            <TextField InputLabelProps={{classes: {root: classes.labelRoot,focused: classes.labelFocused}}} 
                                InputProps={{ disableUnderline: true }} 
                                id="password" name="password" label="password" type="password" helperText={errors.password} error={errors.password ? true : false} 
                                value={password} onChange={(e) => setPassword(e.target.value)} fullWidth/>
                            {errors.general}
                            <button className="form-btn" type="submit">Log in</button>
                            <span className="has-separator">Or</span>
                            <a href="/" className="facebook-login">
                                <i className="fab fa-facebook"></i> Log in with Facebook
                            </a>
                            <a className="password-reset" href="/">Forgot password?</a>
                        </form>
                        <div className="sign-up">
                            Don't an account? <Link to="/Registernew">Log in</Link>
                        </div>
                        <div className="get-the-app">
                            <span>Get the app</span>
                            <div className="badge">
                                <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="android App" />
                                <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="ios app" />
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="container">
                        <nav className="footer-nav">
                            <ul>
                                <li>ABOUT</li>
                                <li>HELP</li>
                                <li>PRESS</li>
                                <li>API</li>
                                <li>JOBS</li>
                                <li>PRIVACY</li>
                                <li>TERMS</li>
                                <li>LOCATIONS</li>
                                <li>TOP ACCOUNTS</li>
                                <li>HASHTAGS</li>
                                <li>LANGUAGE</li>
                            </ul>
                        </nav>
                        <div className="copyright-notice">
                            &copy; 2020 INSTAGRAM FROM GUY . H
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Loginnew
