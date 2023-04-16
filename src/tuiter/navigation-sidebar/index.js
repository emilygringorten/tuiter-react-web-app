import React from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div>
            <div className="list-group pt-3 d-none d-lg-none d-xl-block d-xxl-block">
                <a className="list-group-item"><i className="fa-brands fa-twitter pe-2"></i></a>
                <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ?'active':''}`}>
                    <i className="fa-solid fa-house pe-2"></i>
                    Home
                </Link>
                <Link to="/tuiter/explorev2" className={`list-group-item
                    ${active === 'explorev2'?'active':''}`}>
                    <i className="fa-solid fa-hashtag pe-2"></i>
                    Explore
                </Link>
                <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                    <i className="fa-solid fa-bell pe-2"></i>
                    Notifications
                </a>
                <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                    <i className="fa-solid fa-envelope pe-2"></i>
                    Messages
                </a>
                <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                    <i className="fa-solid fa-bookmark pe-2"></i>
                    Bookmarks
                </a>
                <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                    <i className="fa-solid fa-list pe-2"></i>
                    Lists
                </a>
                <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                    <i className="fa-solid fa-user pe-2"></i>
                    Profile
                </a>
                <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                    <i className="fa-solid fa-circle pe-2"></i>
                    More
                </a>
            </div>
            <div className="list-group pt-3 d-block d-lg-block d-xl-none">
                <a className="list-group-item"><i className="fa-brands fa-twitter pe-2"></i></a>
                <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                    <i className="fa-solid fa-house pe-2"></i>
                </Link>
                <Link to="/tuiter/explorev2" className={`list-group-item
                    ${active === 'explorev2'?'active':''}`}>
                    <i className="fa-solid fa-hashtag pe-2"></i>
                </Link>
                <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                    <i className="fa-solid fa-bell pe-2"></i>
                </a>
                <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                    <i className="fa-solid fa-envelope pe-2"></i>
                </a>
                <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                    <i className="fa-solid fa-bookmark pe-2"></i>
                </a>
                <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                    <i className="fa-solid fa-list pe-2"></i>
                </a>
                <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                    <i className="fa-solid fa-user pe-2"></i>
                </a>
                <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                    <i className="fa-solid fa-circle pe-2"></i>
                </a>
            </div>
        </div>
    )
};
export default NavigationSidebar;