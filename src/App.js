import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db, auth } from './firebase';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import { Button } from '@material-ui/core';
// import { Avatar  } from '@material-ui/core';
// import ImageUpload from './ImageUpload';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserProfile from './UserProfile';
import Register from './Register';
// bottom nav
// import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
// import HomeIcon from '@material-ui/icons/Home';
// import SearchIcon from '@material-ui/icons/Search';
// import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
// import PersonIcon from '@material-ui/icons/Person';
import Login from './Login';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faPaperPlane, faCompass, faHome, faHeart } from '@fortawesome/free-solid-svg-icons';
import AppBars from './AppBars';
import Messenger from './Messenger';
import UserPost from './UserPost';
import Suggestions from './Suggestions';
import Story from './Stories';
import Test from './pages/Test';
import Loginnew from './pages/Loginnew';
import Registernew from './pages/Registernew';
import jwtDecode from 'jwt-decode';
import AuthRoute from './util/AuthRoute';
// const useStyles = makeStyles((theme) => ({

// }));
let authenticated;
const token = localStorage.FBIdToken;
if(token) {
    const decodedToken = jwtDecode(token);
    if(decodedToken.exp * 1000 < Date.now()) {
        window.location.href = '/Loginnew'
        authenticated = false;
    } else authenticated = true;
}


function App({hideLoader}) {
//   const classes = useStyles();
    const [posts, setPosts] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [openSignin, setOpenSignin] = useState(false);
//   const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const userlogin = auth.currentUser;

  useEffect(hideLoader, []);
//   useEffect(setTimeout(() => hideLoader, 200), []);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if(authUser) setUser(authUser); //user has logged in
            else setUser(null); // user has logged out
        })
        return () => {
            // preform some cleanup action
            unsubscribe();
            // hideLoader()
        }
    }, [user]);


    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        // every time a new post is added, this code fire up
        setPosts(snapshot.docs.map(doc => ({
            id: doc.id,
            post: doc.data(),
            posttime: doc.data().timestamp,
            userlike: doc.data().userslike
        })));
        })
    }, []);

  return (
    <div className="App">
        <Router>
            <AppBars usersrc={userlogin?.displayName}/>
            <Switch>
                <AuthRoute path="/Registernew" component={Registernew} authenticated={authenticated}/>
                <AuthRoute path="/Loginnew" component={Loginnew} authenticated={authenticated}/>
                <Route path="/Register" component={Register} />
                <Route path="/direct/inbox" component={Messenger} />
                <Route path="/explore/" component={Test} />
                <Route path="/p/:userPost" component={UserPost} />
                <Route path="/:userId" component={UserProfile} />
                <Route exact path="/">
                    {userlogin ? (
                        <section className="app__posts">
                            <div className="app__post">
                                <Story />
                                {posts.map(({id, post, userlike}) => (<Post key={id} postId={id} user={user} username={post.username} caption={post.caption} imageUrl={post.imageUrl} likes={post.likes} userslike={userlike}/>))}
                            </div>
                            <div className="main-right" id="mainRight">
                                <Suggestions usersrc={userlogin?.displayName}/>
                            </div>
                        </section>
                    ): (<Login />) }
                </Route>
            </Switch>

            {/* {userlogin ? 
            (
                <div className="app__footer">
                    <ImageUpload username={user.displayName}/>

                    <a href={`/${user?.displayName}`}>
                        <BottomNavigationAction label="Profile" icon={<Avatar src={userlogin.photoURL}></Avatar>}/>
                    </a>
                    <BottomNavigationAction label="Likes" icon={<FavoriteBorderOutlinedIcon fontSize="large"/>} />
                    <BottomNavigationAction label="Add" icon={<AddBoxOutlinedIcon fontSize="large"/>} />
                    <BottomNavigationAction onClick={() => {document.getElementById("two").focus()}} label="Search" icon={<SearchIcon fontSize="large"/>} />
                    <a href="/">
                        <BottomNavigationAction label="Home" icon={<HomeIcon fontSize="large"/>} />
                    </a>
                </div>) : 
                (<></>)
            } */}
        </Router>
    </div>
  );
}
export default App;
