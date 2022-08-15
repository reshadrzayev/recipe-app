import React, {useEffect, useState} from 'react';
import Data from '../Data/data.json'
import ProtectedRoute from "../Components/ProtectedRoute";

function Register(props) {
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [username, setUserName] = useState()
    const [mail, setMail] = useState()
    const [user, setUser] = useState({
        name: '',
        surname: 'a',
        username: 'a',
        mail: 'a'
    })

    const onClickHandler = () => {
        Data.users.push(user)
    }
    return (
        <ProtectedRoute>
            <div className="auth register">
                <div className="auth-main register-main">
                    <h3>Sign up</h3>
                    <input type="text" placeholder="name" onChange={(e) => {
                        setUser({
                                ...user,
                                name: e.target.value
                            }
                        )
                    }}/>
                    <input type="text" placeholder="surname" onChange={(e) => {
                        setUser({
                                ...user,
                                surname: e.target.value
                            }
                        )
                    }}/>
                    <input type="text" placeholder="username" onChange={(e) => {
                        setUser({
                                ...user,
                                username: e.target.value
                            }
                        )
                    }}/>
                    <input type="text" placeholder="mail" onChange={(e) => {
                        setUser({
                                ...user,
                                mail: e.target.value
                            }
                        )
                    }}/>
                    <button type="button" onClick={onClickHandler}>Sign up</button>
                </div>
            </div>
        </ProtectedRoute>
    );
}

export default Register;
