import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (

        <div className="navbar">
            <Link to="/">home</Link>
            <Link to="/profile">profile</Link>
            <Link to="/community">community</Link>
            <Link to="/actnow">act now</Link>
            <Link to="/media">media</Link>
            <Link to="/about">about</Link>
            {/* <button className="logoutBtn" onClick={props.logout}><span role="img" aria-label="user-controls">{props.currentUser ? props.currentUser.name : "👤"} ⬇</span></button> */}

        </div>
    )
}
export default NavBar;
