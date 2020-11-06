import React, { useState } from 'react'
import './Register.css'
import { auth, realdb, db } from './firebase';
import firebase from "firebase";
// import Login from './Login';

function Register() {
    // const [user, setUsers] = useState([]);
    // useEffect(() => {
    //     db.collection('users').onSnapshot(snapshot => {
    //       // every time a new user is added, this code fire up
    //         setUsers(snapshot.docs.map(doc => ({
    //             uid: doc.id,
    //             password: doc.data().password,
    //             email: doc.data().email
    //         })))
    //     })
    //   }, []);
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    // const usersRef = realdb.ref('/users');
    // const autoId = RootRef.push().key       auto generate key
    const handleRegister = (event) => {
        event.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            const { currentUser } = firebase.auth();
            var docRef = db.collection("usersfollowers").doc(username);
            docRef.set({
                followers: 0,
                following: 0,
                usersfollow: [],
                usersfollowing: [],
            });
            realdb.ref(`/users/${currentUser.uid}/`)
            .set({
                name_profile: username,
                email,
                username,
                password,
                userpic: 'https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png',
                posts_number: 0,
                verified: false,
                caption: "",
                bio: "",
                sex: "null"
            })
            return authUser.user.updateProfile({
                displayName: username
            })
        })
        .catch((error) => alert(error.message))
        auth
        .signInWithEmailAndPassword(username, password)
        .catch((error) => alert(error.message))
    }

    return (
        <div className="register__app">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" />
            <div id="wrapper">
                <div className="container">
                    <div className="phone-app-demo"></div>
                    <div className="form-data">
                        <form action="" onSubmit={handleRegister}>
                            <div className="logo">
                                <h1 className="instaName">Instagram</h1>
                                <h2 className="policyLogo">Sign up to see photos and videos from your friends.</h2>
                            </div>
                            <div className="form-btn">
                                <a href="/" className="facebook-register">
                                        <i className="fab fa-facebook"></i> Log in with Facebook
                                </a>
                            </div>
                            <span className="has-separator">Or</span>
                            <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <input placeholder="Full Name" type="text" value={fullname} onChange={(e) => setFullname(e.target.value)}/>
                            <input placeholder="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button className="form-btn" type="submit">Sign up</button>
                            <h2 className="policyLogo">By signing up, you agree to our Terms , Data Policy and Cookies Policy .</h2>
                        </form>
                        <div className="sign-up">
                            Have an account? <a href="/">Log in</a>
                        </div>
                        <div className="get-the-app">
                            <span>Get the app</span>
                            <div className="badge">
                                <img className="badgeimg" src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="android App" />
                                <img className="badgeimg" src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="ios app" />
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="site-footer">
                    <nav className="navButtom">
                        <ul>
                            <li>
                            <a href="https://about.instagram.com/about-us" rel="nofollow noopener noreferrer" target="_blank">About</a>
                            </li>
                            <li>
                            <a href="https://help.instagram.com/">Help</a>
                            </li>
                            <li>
                            <a href="https://instagram-press.com/">Press</a>
                            </li>
                            <li><a href="/developer/">API</a></li>
                            <li><a href="/about/jobs/">Jobs</a></li>
                            <li>
                            <a href="/legal/privacy/">Privacy</a>
                            </li>
                            <li>
                            <a href="/legal/terms/">Terms</a>
                            </li>
                            <li>
                            <a href="/explore/locations/">Locations</a>
                            </li>
                            <li>
                            <a href="/directory/profiles/">Top Accounts</a>
                            </li>
                            <li>
                            <a href="/directory/suggested/kimkardashian">Suggested Accounts</a>
                            </li>
                            <li>
                            <a href="/directory/hashtags/">Hashtags</a>
                            </li>
                            <li>
                                <span className="site-footer__language">Language
                                    <select aria-label="Switch Display Language">
                                        <option value="af">Afrikaans</option>
                                        <option value="cs">Čeština</option>
                                        <option value="da">Dansk</option>
                                        <option value="de">Deutsch</option>
                                        <option value="el">Ελληνικά</option>
                                        <option value="en">English</option>
                                        <option value="es">Español (España)</option>
                                        <option value="es-la">Español</option>
                                        <option value="fi">Suomi</option>
                                        <option value="fr">Français</option>
                                        <option value="id">Bahasa Indonesia</option>
                                        <option value="it">Italiano</option>
                                        <option value="ja">日本語</option>
                                        <option value="ko">한국어</option>
                                        <option value="ms">Bahasa Melayu</option>
                                        <option value="nb">Norsk</option>
                                        <option value="nl">Nederlands</option>
                                        <option value="pl">Polski</option>
                                        <option value="pt-br">Português (Brasil)</option>
                                        <option value="pt">Português (Portugal)</option>
                                        <option value="ru">Русский</option>
                                        <option value="sv">Svenska</option>
                                        <option value="th">ภาษาไทย</option>
                                        <option value="tl">Filipino</option>
                                        <option value="tr">Türkçe</option>
                                        <option value="zh-cn">中文(简体)</option>
                                        <option value="zh-tw">中文(台灣)</option>
                                        <option value="bn">বাংলা</option>
                                        <option value="gu">ગુજરાતી</option>
                                        <option value="hi">हिन्दी</option>
                                        <option value="hr">Hrvatski</option>
                                        <option value="hu">Magyar</option>
                                        <option value="kn">ಕನ್ನಡ</option>
                                        <option value="ml">മലയാളം</option>
                                        <option value="mr">मराठी</option>
                                        <option value="ne">नेपाली</option>
                                        <option value="pa">ਪੰਜਾਬੀ</option>
                                        <option value="si">සිංහල</option>
                                        <option value="sk">Slovenčina</option>
                                        <option value="ta">தமிழ்</option>
                                        <option value="te">తెలుగు</option>
                                        <option value="vi">Tiếng Việt</option>
                                        <option value="zh-hk">中文(香港)</option>
                                        <option value="bg">Български</option>
                                        <option value="fr-ca">Français (Canada)</option>
                                        <option value="ro">Română</option>
                                        <option value="sr">Српски</option>
                                        <option value="uk">Українська</option>
                                    </select>
                                </span>
                            </li>
                        </ul>
                    </nav>
                    <span className="copyright">© 2020 Instagram Clone from Guyh</span>
                </footer>
            </div>
        </div>
    )
}

export default Register
