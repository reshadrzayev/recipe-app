import React, {useEffect, useState} from 'react';
import Data from '../Data/data.json'
import {setUser} from "../Redux/authSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import ProtectedRoute from "../Components/ProtectedRoute";


function Login(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [username, setUserName] = useState()

    const onClickHandler = () => {
        // eslint-disable-next-line array-callback-return
        Data.users.filter((data) => {
            if (data.username === username) {
                navigate("/", {replace: true})
                return  dispatch(setUser(data))
            }
        })
    }

    return (

        <ProtectedRoute>
            <div className="auth login">
                <div className="auth-main login-main">
                    <h3>Log in</h3>
                    <input type="text" placeholder="username" onChange={(e) => setUserName(e.target.value)}/>
                    <button type="button" onClick={onClickHandler}>Log in
                    </button>
                </div>
            </div>
        </ProtectedRoute>

    );
}

export default Login;
