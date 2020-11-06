import React from 'react'
import './Messenger.css'

function Messenger() {
    return (
        <div className="Messenger">
            <div className="contacts">
                <div className="contacts__menu">
                    <div className="contacts__button contacts__button--settings">
                    </div>
                    <div className="contacts__header">
                        <p>Direct</p>
                    </div>
                    <div className="contacts__button contacts__button--newMessage">  
                        <svg aria-label="New Message" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 44 44" width="24"><path d="M33.7 44.12H8.5a8.41 8.41 0 01-8.5-8.5v-25.2a8.41 8.41 0 018.5-8.5H23a1.5 1.5 0 010 3H8.5a5.45 5.45 0 00-5.5 5.5v25.2a5.45 5.45 0 005.5 5.5h25.2a5.45 5.45 0 005.5-5.5v-14.5a1.5 1.5 0 013 0v14.5a8.41 8.41 0 01-8.5 8.5z"></path><path d="M17.5 34.82h-6.7a1.5 1.5 0 01-1.5-1.5v-6.7a1.5 1.5 0 01.44-1.06L34.1 1.26a4.45 4.45 0 016.22 0l2.5 2.5a4.45 4.45 0 010 6.22l-24.3 24.4a1.5 1.5 0 01-1.02.44zm-5.2-3h4.58l23.86-24a1.45 1.45 0 000-2l-2.5-2.5a1.45 1.45 0 00-2 0l-24 23.86z"></path><path d="M38.2 14.02a1.51 1.51 0 01-1.1-.44l-6.56-6.56a1.5 1.5 0 012.12-2.12l6.6 6.6a1.49 1.49 0 010 2.12 1.51 1.51 0 01-1.06.4z"></path></svg>
                    </div>
                </div>
                <div className="contacts__info">
                    <p>Messages</p>
                    <button className="contacts__info--requests">2 Requests</button>
                    {/* <label className="contacts__label">
                        <input className="contacts__input" type="text" placeholder="Search in messenger" />
                    </label> */}
                </div>
                <div className="contacts__slot">
                    <div className="contacts__avatar">
                        <img alt="" className="contacts__avatar" src="https://i.imgur.com/cw3Glwf.jpg"></img>
                    </div>
                    <div className="contacts__name">
                        <p className="contacts__pname">guyhguy</p>
                        <p className="contacts__message">Active 1h ago</p>
                    </div>
                    {/* <div className="contacts__time">
                        <p className="contacts__ptime">12:34</p>
                        <div className="contacts__avatar contacts__avatar--mini" style={{backgroundImage: "url(" + "https://i.imgur.com/cw3Glwf.jpg" + ")"}}>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="message__container">

            </div>
        </div>
    )
}

export default Messenger
