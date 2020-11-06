import React, { useState } from 'react'
import './Register.css'
import { auth} from './firebase';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const usersRef = realdb.ref('/users');
    const handleLogin = (event) => {
        event.preventDefault();
        auth
        .signInWithEmailAndPassword(username, password)
        .catch((error) => alert(error.message))
        // checkIfUserExists(username);
    }

    // check if users exist in real time db
    // function userExistsCallback(userId, exists) {
    //     if (exists) {
    //       console.log('user ' + userId + ' exists!');
    //     } else {
    //         console.log('user ' + userId + ' does not exist!');
    //     }
    //   }
      
    //   // Tests to see if /users/<userId> has any data. 
    //   function checkIfUserExists(userId) {
    //     const usersRef = realdb.ref('/users');
    //     usersRef.child(userId).once('value', function(snapshot) {
    //       var exists = (snapshot.val() !== null);
    //       userExistsCallback(userId, exists);
    //     });
    //   }

    return (
        <div className="register__app">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" />
            <div id="wrapper">
                <div className="container">
                    <div className="phone-app-demo"></div>
                    <div className="form-data">
                        <form action="" onSubmit={handleLogin}>
                            <div className="logo">
                                <h1>Instagram.</h1>
                            </div>
                            <input placeholder="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            <input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button className="form-btn" type="submit">Log in</button>
                            <span className="has-separator">Or</span>
                            <a href="/" className="facebook-login">
                                <i className="fab fa-facebook"></i> Log in with Facebook
                            </a>
                            <a className="password-reset" href="/">Forgot password?</a>
                        </form>
                        <div className="sign-up">
                            Don't an account? <a href="/Register">Sign up</a>
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

export default Login
