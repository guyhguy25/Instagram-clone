// {userlogin ? (
//     <div className="app__header">
//         <Button>
//             <a href="/"><img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""/></a>
//         </Button>
//         <div className="search-outline">
//             <FontAwesomeIcon icon={faSearch} color="grey" style={{fontSize: "12px"}}/>
//             <input id="two" className="search" type="text" autoCapitalize="none" placeholder="Search" size="25"/>
//         </div>
//         <nav className="navBarheader">
//             {/* <Button><FontAwesomeIcon color="grey" icon={faHome}/></Button>
//             <Button><FontAwesomeIcon icon={faPaperPlane}/></Button>
//             <Button><FontAwesomeIcon icon={faCompass}/></Button>
//             <Button><FontAwesomeIcon icon={faHeart}/></Button>
//             <div id="user">
//                 <Avatar src={userlogin?.photoURL}/>
//             </div> */}
//             <i className="fas fa-home"><FontAwesomeIcon icon={faHome}/></i>
//             <i className="far fa-paper-plane"><FontAwesomeIcon icon={faPaperPlane}/></i>
//             <i className="far fa-compass"><FontAwesomeIcon icon={faCompass}/></i>
//             <i className="far fa-heart"><FontAwesomeIcon icon={faHeart}/></i>
//             <div id="user">
//                 <img src={userlogin?.photoURL} />
//             </div>
//         </nav>
//         {/* <div className="app__loginContainer">
//             <Button onClick={() => auth.signOut()}>Logout</Button>
//         </div> */}
//     </div>
//         ) : (
//     <div className="app__header">
//         <Button>
//             <a href="/"><img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""/></a>
//         </Button>
//         <div className="search-outline">
//             <FontAwesomeIcon icon={faSearch} color="grey" style={{fontSize: "12px"}}/>
//             <input id="two" className="search" type="text" autoCapitalize="none" placeholder="Search" size="25"/>
//         </div>
//         <div className="app__loginContainer">
//             {/* Login go to path="/" Register go to path="/Register" */}
//             <button className="login__btn">Log In</button> 
//             <button className="register__btn">Sign Up</button>
//         </div>
//     </div>
// )}