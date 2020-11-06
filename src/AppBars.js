import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Divider from '@material-ui/core/Divider';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faPaperPlane, faCompass } from '@fortawesome/free-solid-svg-icons';
// import { faHeart as HeartRegular, faPaperPlane as PaperPlaneRegular, faCompass as CompassRegular} from '@fortawesome/fontawesome-free-regular';
import { Avatar } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircleOutlined';
import Bookmark from '@material-ui/icons/BookmarkBorder';
import Settings from '@material-ui/icons/SettingsOutlined';
import { useLocation, Link } from 'react-router-dom';
import { realdb, auth } from './firebase';


const useStyles = makeStyles((theme) => ({
    // '@global': {
    //     // '.MuiSvgIcon-root': {
    //     //     fontSize: '1.3rem',
    //     //   },
    // },
    appHeader: {
        height: '54px',
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        borderBottom: '1px solid lightgray',
    },
    customizeToolbar: {
        padding: "0 20px",
        minWidth: "975px",
        display: "flex",
    },
    grow: {
        height: '55px',
        
    }, // 30 height from top to stories 24 height from stories to posts
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        minWidth: "40px",
        display: "flex",
        flex: "1 9999 0%",
    },
    search: {
        height: "28px",
        width: "215px",
        display: "flex",
        flex: "0 1 auto",
        position: "relative",
        margin: 0,
        padding: 0,
        flexDirection: "column",
        alignItems: "stretch",
    },
    searchInput: {
        "&:placeholder-shown": {
            fontSize: "16px"
        },
        background: "rgb(250,250,250, 1)",
        border: "solid 1px rgba(var(--b6a,219,219,219),1)",
        borderRadius: "3px",
        color: "rgba(38,38,38),1)",
        outline: 0,
        padding: "3px 10px 3px 26px",
        zIndex: 2,
        boxSizing: "border-box",
        height: "100%",
        width: "100%",
    },
    insideInput: {
        boxSizing: "border-box",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        border: "solid 1px rgba(var(--b6a,219,219,219),1)",
        borderRadius: "3px",
        color: "rgba(var(--f52,142,142,142),1)",
        cursor: "text",
        fontSize: "14px",
        fontWeight: "300",
        left: 0,
        padding: "7px",
        position: "absolute",
        textAlign: "center",
        top: 0,
        zIndex: 2,
    },
    insideInputIcon: {
        // display: "inline",
        left: "-5px"
    },
    searchIcon: {
        marginRight: "6px",
        verticalAlign: "baseline",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "-399px -321px",
        height: "10px",
        width: "10px",
    },
    searchText: {
        display: "inline-block",
        maxWidth: "140px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        verticalAlign: "bottom",
        whiteSpace: "nowrap",
    },
    sectionDesktop: {
        display: 'flex',
        alignItems: "center",
        alignContent: "center",
        flex: "1 0 0%",
        flexWrap: "wrap",
        justifyContent: "flex-end",
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        },
  }));

export default function AppBars({ usersrc }) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const [profileuid, setProfileuid] = React.useState("");
    const [profileData, setProfileData] = React.useState();
  
    const handleProfileMenuOpen = (event) => { setAnchorEl(event.currentTarget);};
  
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
  
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleLogout = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
        auth.signOut()
    };
    const { pathname } = useLocation();
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
    <Menu anchorEl={anchorEl} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} 
    id={menuId} keepMounted transformOrigin={{ vertical: 'bottom', horizontal: 'center' }} 
    open={isMenuOpen} onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose}>
            {/* useHistory push to profile */}
            <IconButton className="navButtons"><AccountCircle/></IconButton>
            Profile
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
            <IconButton className="navButtons"><Bookmark/></IconButton>
            Saved
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
            <IconButton className="navButtons"><Settings/></IconButton>
            Settings
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>Log Out</MenuItem>
    </Menu>
    );
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isMobileMenuOpen} onClose={handleMobileMenuClose} >
        <MenuItem>
            <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                <MailIcon />
                </Badge>
            </IconButton>
            <p>Messages</p>
        </MenuItem>
        <MenuItem>
            <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
            </Badge>
            </IconButton>
            <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit">
                <AccountCircle />
            </IconButton>
            <p>Profile</p>
        </MenuItem>
    </Menu>
    );
    // console.log(usersrc);

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
        if(usersrc != null) {
            var ref = realdb.ref('users');
            var entriesRef = ref.orderByChild("username").equalTo(usersrc);
            entriesRef.on('value', specificUser, errData);
        }
    },[usersrc]);

    return (
    <div className={classes.grow}>
        <AppBar elevation={0} className={classes.appHeader} color="inherit">
            <Toolbar variant="dense" className={classes.customizeToolbar}>
                <Typography className={classes.title} noWrap>
                    <a href="/"><img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""/></a>
                </Typography>
                <div className={classes.search}>
                    <input className={classes.searchInput} type="text" autoCapitalize="none"/>
                    <div className={classes.insideInput} role="button" tabIndex="0">
                        <div className={classes.insideInputIcon}>
                            <SearchIcon className={classes.searchIcon}/>
                            <span className={classes.searchText}>Search</span>
                        </div>
                    </div>
                </div>
                {usersrc ? (
                <div className={classes.sectionDesktop}>
                    <IconButton className="navButtons" aria-label="show 4 new mails" color="inherit">
                        <Badge color="secondary">
                            <Link to="/">
                            {pathname === "/" ? (
                                <svg aria-label="Home" fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path></svg>
                                ): (
                                <svg aria-label="Home" fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path></svg>
                             )} 
                            </Link>
                        </Badge>
                    </IconButton>
                    <IconButton className="navButtons" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={0} color="secondary">
                            <Link to="/direct/inbox">
                             {pathname === "/direct/inbox" ? (
                                <svg aria-label="Direct" fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l13.2 13c.5.4 1.1.6 1.7.3l16.6-8c.7-.3 1.6-.1 2 .5.4.7.2 1.6-.5 2l-15.6 9.9c-.5.3-.8 1-.7 1.6l4.6 19c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.5-.5.5-1.1.2-1.6z"></path></svg>
                             ): (
                                <svg aria-label="Direct" fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                             ) }</Link>
                        </Badge>
                    </IconButton>
                    <IconButton className="navButtons" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={0} color="secondary">
                        <Link to="/explore/">
                             {pathname === "/explore/" ? (
                                 <svg aria-label="Find People" fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path clipRule="evenodd" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm12.2 13.8l-7 14.8c-.1.3-.4.6-.7.7l-14.8 7c-.2.1-.4.1-.6.1-.4 0-.8-.2-1.1-.4-.4-.4-.6-1.1-.3-1.7l7-14.8c.1-.3.4-.6.7-.7l14.8-7c.6-.3 1.3-.2 1.7.3.5.4.6 1.1.3 1.7zm-15 7.4l-5 10.5 10.5-5-5.5-5.5z" fillRule="evenodd"></path></svg>
                             ): (
                                <svg aria-label="Find People" fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path clipRule="evenodd" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z" fillRule="evenodd"></path></svg>
                             ) }</Link>
                        </Badge>
                    </IconButton>
                    <IconButton className="navButtons__notifications" aria-label="show 17 new notifications" color="inherit">
                        <Badge badgeContent={0} color="secondary">
                        {/* <svg aria-label="Activity Feed" fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg> */}
                        <svg aria-label="Activity Feed" fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                        </Badge>
                    </IconButton>
                    <IconButton className="navButtons" edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" onClick={handleProfileMenuOpen} color="inherit">
                        <Avatar src={profileData?.userpic} className={classes.small}/>
                    </IconButton>
                </div>
                ) : (
                <div className="app__loginContainer">
                    <button className="login__btn">
                        <Link to="/">Log In</Link>
                    </button> 
                    <button className="register__btn">
                        <Link to="/Register">Sign Up</Link>
                    </button>
                </div>
                )}
                {/* suitable for phones -- Login and Logout --  */}
                <div className={classes.sectionMobile}>
                    <IconButton aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
                        <MoreIcon />
                    </IconButton>
                </div>
                {renderMenu}
                {renderMobileMenu}
            </Toolbar>
        </AppBar>
    </div>
    );
}

