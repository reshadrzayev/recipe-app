import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {removeUser} from "../Redux/authSlice";
import {useNavigate} from 'react-router-dom'

function Navbar(props) {
    const {user} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar-main">
                    <div className="left">
                        <NavLink to='/'>Home</NavLink>
                    </div>
                    <div className="right">
                        {
                            user.length === 0 ?
                                <>
                                    <NavLink to='/login'>Log in</NavLink>
                                    <NavLink to='/signup'>Sign up</NavLink></>
                                : <>
                                    <p>Hello, {user.name}!</p>
                                    <NavLink to='/account'>Account</NavLink>
                                    <a onClick={() => {
                                        dispatch(removeUser())
                                    }}>Log out</a>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
