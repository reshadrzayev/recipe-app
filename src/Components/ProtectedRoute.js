import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom'

function ProtectedRoute({children}) {
    const {user} = useSelector(state => state.auth)
    const navigate = useNavigate()
    useEffect(() => {

        if (user.length > 0) {
            if (window.location.pathname === "/login" || window.location.pathname === "/signup") {
                return navigate("/", {replace: true})
            }
        }
    }, [window.location.pathname])
    return (
        <>
            {children}
        </>
    )
}

export default ProtectedRoute;
