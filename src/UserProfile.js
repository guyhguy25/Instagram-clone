import React, { useState, useEffect } from 'react'
import './UserProfile.css'
// import Stories from './Stories'
import { useParams } from 'react-router-dom';
import { faCheck, faTable, faTv, faUser, faHeart, faComment, faCaretDown, faEllipsisH, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { db, realdb, auth } from './firebase';
import firebase from "firebase";

function UserProfile() {
    const { userId } = useParams();
    const [profileuid, setProfileuid] = useState("");
    const [profileData, setProfileData] = useState();
    const [posts, setPosts] = useState([]);
    const [postn, setPostn] = useState("");
    const [follower, setFollower] = useState(false);
    const [usersfollows, setUsersfollows] = useState({});
    const user = auth.currentUser;
    
    useEffect(() => {
        const p3 = db.collection('posts').where('username', '==', userId).get();
        p3.then(snapshot => {
            setPostn(snapshot.docs.length);
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                post: doc.data(),
                userlike: doc.data().userslike
            })))
            })
            .catch(err => {
                console.log('Error getting documents', err);
            });
    }, [userId])

    useEffect(() => {
        const errData = (err) => {
            console.error(err);
        }
        const specificUser = (snapshot) => {
            snapshot.forEach((userSnapshot) => {
                let user1 = userSnapshot.val();
                let userid = userSnapshot.key;
                setProfileData(user1);
                setProfileuid(userid);
            })
        }
        var ref = realdb.ref('users');
        var entriesRef = ref.orderByChild("name_profile").equalTo(userId);
        entriesRef.on('value', specificUser, errData);
    },[userId]);

    useEffect(() => {
        if(profileuid !== "" && postn !== "") {
            var ref = realdb.ref(`users/${profileuid}`);
            ref.update({
                posts_number: postn
            })
        }
    },[profileuid, postn]);
    useEffect(() => {
        var docRef = db.collection("usersfollowers").doc(userId);
        docRef.get().then(function(doc) {
            if(user) { 
                var Users = doc.data().usersfollow;
                var usern = user.displayName;
                if(Users.includes(usern)) setFollower(true);
                else setFollower(false);
            }
        })
    }, [userId, user]);
    useEffect(() => {
        db.collection("usersfollowers").doc(userId).onSnapshot(function(doc) {
            setUsersfollows(doc.data());
        });
      }, [userId]);

    const userFollow = () => {
        const increment = firebase.firestore.FieldValue.increment(1);
        const decrement = firebase.firestore.FieldValue.increment(-1);
        if(user) {
            setFollower(!follower);
            if(follower === false) {
                db.collection("usersfollowers").doc(userId).update({followers: increment, usersfollow: firebase.firestore.FieldValue.arrayUnion(user.displayName)});
                db.collection("usersfollowers").doc(user.displayName).update({following: increment, usersfollowing: firebase.firestore.FieldValue.arrayUnion(userId)});
            }
            else {
                db.collection("usersfollowers").doc(userId).update({followers: decrement, usersfollow: firebase.firestore.FieldValue.arrayRemove(user.displayName)});
                db.collection("usersfollowers").doc(user.displayName).update({following: decrement, usersfollowing: firebase.firestore.FieldValue.arrayRemove(userId)});
            }
        }
        else alert("you cant follow if you are not log in");
    }

    return (
        <div>
            <main>
                <section className="bio">
                    <div className="bio__img-block">
                        <a href="/">
                            <img className="bio__img" src={profileData?.userpic} alt="profilepicture"/>
                        </a>
                    </div>
                    <div className="bio__header">
                        <h1 className="bio__account">{profileData?.username}</h1>
                        {profileData?.verified === true ?  (
                            <span title="Verified" className="bio__verified">
                                <FontAwesomeIcon icon={faCheck} className="verified"/>
                            {/* <FontAwesomeIcon icon={faCertificate} /> */}
                            </span>
                        ) : <></> }
                        {follower ? 
                        (<>
                            <button className="bio__following" onClick={userFollow}>Following</button>
                            <button className="bio__suggestfollowed"><FontAwesomeIcon icon={faCaretDown}/></button>
                        </>): 
                        (<>
                            <button className="bio__follow" onClick={userFollow}>Follow</button>
                            <button className="bio__suggest"><FontAwesomeIcon icon={faCaretDown}/></button>
                        </>)
                        }
                        <button className="bio__more"><FontAwesomeIcon icon={faEllipsisH}/></button>
                    </div>
                    <div className="bio__stats">
                        <span className="bio__posts stats"><strong>{profileData?.posts_number}</strong> posts</span>
                        <button className="bio__statsdialog"><span className="bio_followers stats"><strong>{usersfollows.followers}</strong> followers</span></button>
                        <button className="bio__statsdialog"><span className="bio_followers stats"><strong>{usersfollows.following}</strong> following</span></button>
                    </div>
                    <div className="bio_blurb">
                        <h1 className="bio__name">{profileData?.name_profile}</h1>
                        <p className="bio__description">caption caption</p>
                    {/* <p className="bio__description">{profileData?.caption}</p> */}
                    </div>
                </section>
                <nav className="story">
                    <ul>
                        <li>
                            <a href="/">
                                <img src="https://www.fillmurray.com/77/77" alt="story with bill murray" />
                                <h2 className="storiesNames">KKW FRAGRANCE</h2>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src="https://baconmockup.com/77/77" alt="story with slab of bacon" />
                                <h2 className="storiesNames">SKIMS</h2>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                            <img src="https://www.fillmurray.com/150/150" alt="story" />
                            <h2 className="storiesNames">KKW BEAUTY</h2>
                        </a>
                        </li>
                    </ul>
                </nav>
                <nav className="mobile-stats">
                <ul>
                    <li className="mobile-stats__posts stats"><strong>{profileData?.posts_number}</strong><br/>posts</li>
                    <li className="mobile-stats_followers stats"><button><strong>{profileData?.followers}</strong><br/>followers</button></li>
                    <li className="mobile-stats__following stats"><button><strong>{profileData?.following}</strong><br/>following</button></li>
                </ul>
                </nav>
                <section className="tabbed-pane">
                    <nav className="tabbed-pane__header">
                    <ul>
                        <li><a href="/" className="tab-link selected"><FontAwesomeIcon icon={faTable}/><span className="tab-link-text"> Posts</span></a></li>
                        <li><a href="/" className="tab-link"><FontAwesomeIcon icon={faTv}/><span className="tab-link-text"> IGTV</span></a></li>
                        <li><a href="/" className="tab-link"><FontAwesomeIcon icon={faUser}/><span className="tab-link-text"> Tagged</span></a></li>
                    </ul>
                    </nav>
                    {
                        posts.length === 0 ? (<div>No posts Yet</div>) : 
                        (
                            <div className="tabbed-pane__posts">
                                {posts.map(({id, post, userlike}, index) => (
                                    <div className="gallery-item" tabIndex={index} key={index}>
                                        <a href={`/p/${id}/`}>
                                        <img src={post.imageUrl} className="gallery-image" alt="" />
                                        <div className="gallery-item-info">
                                            <ul>
                                                {/* <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i>{post.likes}</li> */}
                                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FontAwesomeIcon icon={faHeart}/> {post.likes}</li>
                                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><FontAwesomeIcon icon={faComment}/> 2</li>
                                            </ul>
                                        </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        )
                    }
                    {/* <a href=""><img src="https://www.fillmurray.com/300/300" alt="bill murray post picture"/></a>
                    <a href=""><img src="https://baconmockup.com/300/300" alt="bacon post picture"/></a>
                    <a href=""><img src="https://www.fillmurray.com/400/400" alt="bill murray post picture"/></a>
                    <a href=""><img src="https://baconmockup.com/400/400" alt="bacon post picture"/></a>
                    <a href=""><img src="https://www.fillmurray.com/500/500" alt="bill murray post picture"/></a>
                    <a href=""><img src="https://baconmockup.com/800/800" alt="bacon post picture"/></a>
                    <a href=""><img src="https://www.fillmurray.com/600/600" alt="post picture"/></a>
                    <a href=""><img src="https://www.fillmurray.com/800/800" alt="bill murray post picture"/></a> */}
                    <div className="tabbed-pane__igtv">
                </div>
                <div className="tabbed-pane__tagged">
        
                </div>
                </section>
            </main>
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
    )
}

export default UserProfile
