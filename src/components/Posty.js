import React, { useState, useEffect } from 'react';
import '../Post.css';
import Avatar from '@material-ui/core/Avatar'
// import { db, realdb } from './firebase';
// import firebase from "firebase";
import { Button, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText, Divider, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import CloseIcon from '@material-ui/icons/Close';
// NEW
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//NEW THINGS
import dayjs from 'dayjs';
import Typography from '@material-ui/core/Typography';
import relativeTime from 'dayjs/plugin/relativeTime';

  
const useStyles = makeStyles((theme) => ({
    dialog: {
        borderRadius: 12
    },
    box: {
        width: "400px",
        backgroundColor: theme.palette.background.paper,
    },
    close: {
        position: "absolute",
        right: 0,
        color: "#262626"
    },
    height: {
        minHeight: "200px",
        maxHeight: "356px"
    },
    right: {
        marginLeft: 'auto'
    },
    center : {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
}));

function Posty({post}) {
    // const [comments, setComments] = useState([]);
    // const [comment, setComment] = useState('');
    // const [like, setLike] = useState(false);
    // const [openlikes, setOpenlikes] = useState(false);
    const classes = useStyles();
    // const [modalStyle] = useState(getModalStyle);
    // const [profileuid, setProfileuid] = useState("");
    // const [profileData, setProfileData] = useState();

    // useEffect(() => {
    //     let unsubscribe;
    //     if(postId) {
    //         unsubscribe = db
    //             .collection("posts")
    //             .doc(postId)
    //             .collection("comments")
    //             .orderBy('timestamp','desc')
    //             .onSnapshot((snapshot) => {
    //                 setComments(snapshot.docs.map((doc) => doc.data()));
    //             })
    //     }
    //     return () => {
    //         unsubscribe();
    //     }
    // }, [postId]);

    // const postComment = (e) => {
    //     e.preventDefault();
    //     db.collection("posts").doc(postId).collection("comments").add({
    //         text: comment,
    //         username: user.displayName,
    //         timestamp: firebase.firestore.FieldValue.serverTimestamp()
    //     });
    //     setComment('');
    // }

    // useEffect(() => {
    //     var docRef = db.collection("posts").doc(postId);
    //     docRef.get().then(function(doc) {
    //         if(user) { 
    //             var Users = doc.data().userslike;
    //             var usern = user.displayName;
    //             if(Users.includes(usern)) setLike(true);
    //             else setLike(false);
    //         }
    //     })
    // }, [postId, user])

    // const postLike = () => {
    //     const increment = firebase.firestore.FieldValue.increment(1);
    //     const decrement = firebase.firestore.FieldValue.increment(-1);
    //     if(user) {
    //         setLike(!like);
    //         if(like === false) db.collection("posts").doc(postId).update({likes: increment, userslike: firebase.firestore.FieldValue.arrayUnion(user.displayName)});
    //         else db.collection("posts").doc(postId).update({likes: decrement, userslike: firebase.firestore.FieldValue.arrayRemove(user.displayName)});
    //     }
    //     else {
    //         alert("you cant like if you are not login");
    //     }
    // }

    // const handleOpen = () => {
    //     setOpenlikes(true);
    // };

    // useEffect(() => {
    //     const errData = (err) => {
    //         console.error(err);
    //     }
    //     const specificUser = (snapshot) => {
    //         snapshot.forEach((userSnapshot) => {
    //             let user1 = userSnapshot.val();
    //             let userid = userSnapshot.key;
    //             setProfileData(user1);
    //             setProfileuid(userid);
    //         })
    //     }
    //     var ref = realdb.ref('users');
    //     var entriesRef = ref.orderByChild("username").equalTo(username);
    //     entriesRef.on('value', specificUser, errData);
    // },[username]);

    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    dayjs.extend(relativeTime);
    return (
        <div className="post">
            <div className="post__header">
                <a className="usernamea" href={`/${post.userHandle}`}>
                    <Avatar className="post__avatar" alt={post.userImage} src={post.userImage}/>
                </a>
                <h3><a className="usernamea" href={`/${post.userHandle}`} style={{fontSize: "16px"}}><strong>{post.userHandle}</strong></a></h3>
                <Button className={classes.right}>
                    <svg aria-label="More options" className="_8-yf5 " fill="#262626" height="16" viewBox="0 0 48 48" width="16"><circle clipRule="evenodd" cx="8" cy="24" fillRule="evenodd" r="4.5"></circle><circle clipRule="evenodd" cx="24" cy="24" fillRule="evenodd" r="4.5"></circle><circle clipRule="evenodd" cx="40" cy="24" fillRule="evenodd" r="4.5"></circle></svg>
                </Button>
            </div>
                <Slider {...settings}>
                    <img alt="" className="post__image" src={post.imageUrl}></img>
                    <img alt="" className="post__image" src={post.imageUrl}></img>
                </Slider>
            <div className="post__UI">
                {/* <Button onClick={postLike}> */}
                <Button>
                    <svg aria-label="Unlike" className="_8-yf5 " fill="#ed4956" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                    {/* { like
                    ? <svg aria-label="Unlike" className="_8-yf5 " fill="#ed4956" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                    : <svg aria-label="Like" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                    } */}
                </Button>
                <Button onClick={() => {document.getElementById(post.postId).focus()} }>
                    <svg aria-label="Comment" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd"></path></svg>
                </Button>
                <Button>
                    <svg aria-label="Share Post" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                </Button>
            </div> 
            {post.likes < 1 ? (<span className="post__text">be the first like</span>) : 
            // (<button className="likes__button" onClick={handleOpen}>
            (<button className="likes__button">
                <span className="post__text"><strong>{post.likes} likes</strong></span></button>)}
            {/* <Dialog onClose={() => setOpenlikes(false)} open={openlikes} classes={{paper: classes.dialog}}>
                <DialogTitle className={classes.center}>Likes</DialogTitle>
                <IconButton className={classes.close}><CloseIcon fontSize="large" onClick={() => setOpenlikes(false)}/></IconButton>
                <Divider />
                <List className={classes.height}>
                    {post.userslike.map(element => (
                        <ListItem key={element} className={classes.box}>
                            <ListItemAvatar>
                                <a href={`/${element}`}><Avatar className="post__avatar" alt={element.photoURL} src={element.photoURL}/></a>
                            </ListItemAvatar>
                            <ListItemText primary={<a className="usernamea" href={`/${element}`}>{element}</a>} secondary="caption"/>
                            <button id="follow" className={classes.right}>Follow</button>
                        </ListItem>
                    ))}
                </List>
            </Dialog> */}
            <div className="post__comments">
                <span className="caption_title">
                    <strong><a title={post.userHandle} href={`/${post.userHandle}`}>{post.userHandle}</a></strong> {post.body}
                </span>
                <p>
                    <strong><a className="usernamea" href={`/${post.userHandle}`}> {post.userHandle}</a></strong> hey
                </p>
                {/* {comments.map((comment) => (
                    <p key={comment.timestamp}>
                        <strong><a className="usernamea" href={`/${comment.username}`}> {comment.username}</a></strong> {comment.text}
                    </p>
                ))} */}
            <Typography variant="body2" color="textSecondary">
                {dayjs(post.createdAt).fromNow()}
            </Typography>
            </div>
            <form className="post__commentBox">
                <input id={post.postId} className="post__input" type="text" placeholder="Add a comment..."/>
                <button className="post__button" type="submit">Post</button>
            </form>
            {/* {user && (
                <form className="post__commentBox">
                    <input id={post.postId} className="post__input" type="text" placeholder="Add a comment..." value={comment} onChange={(e) => setComment(e.target.value)}/>
                    <button className="post__button" disabled={!comment} type="submit" onClick={postComment}>Post</button>
                </form>
            )} */}
        </div>
    )
}

export default Posty