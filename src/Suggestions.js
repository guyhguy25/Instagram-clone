import React, { useEffect } from 'react'
import { realdb } from './firebase';

function Suggestions({usersrc}) {
    const [profileData, setProfileData] = React.useState();
    useEffect(() => {
        const errData = (err) => {
            console.error(err);
        }
        const specificUser = (snapshot) => {
            snapshot.forEach((userSnapshot) => {
                let user1 = userSnapshot.val();
                setProfileData(user1);
            })
        }
        if(usersrc != null) {
            var ref = realdb.ref('users');
            var entriesRef = ref.orderByChild("username").equalTo(usersrc);
            entriesRef.on('value', specificUser, errData);
        }
    },[usersrc]);

    return (
        <div>
            <div className="myProfile">
                <img alt="" className="profileImg" src={profileData?.userpic}></img>
                <div className="names">
                    <div className="profileName">guyhguy</div>
                    <div className="profileSubname">Guy Haguy</div>
                </div>
            </div>
            <div className="recommend">
                <div className="rightTitle">
                    <div className="rightTitle-title">Suggestions For You</div>
                    <div className="rightTitle-more">See All</div>
                </div>
                <div className="userInfo">
                    <div className="userInfo-profile">
                        <img alt="" className="suggestImg" src={profileData?.userpic}></img>
                    </div>
                    <div className="userInfo-profile-side">
                        <div className="userInfo-profile-name">bonghyunyang</div>
                        <div className="user-profile-time">Follows you</div>
                    </div>
                    <div className="fol">Follow</div>
                </div>
            </div>
            <div className="copyRight">
                <div className="copyrightNav">
                    <ul>
                        <li>About</li>
                        <li>Help</li>
                        <li>Press</li>
                        <li>API</li>
                        <li>Jobs</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                        <li>Locations</li>
                        <li>Top Accounts</li>
                        <li>Hashtags</li>
                        <li>Language</li>
                    </ul>
                </div>
                <div className="copyrightInside">© 2020 INSTAGRAM FROM Guy H</div>
            </div>
        </div>
    )
}

export default Suggestions
