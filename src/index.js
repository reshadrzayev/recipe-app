import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Pages/Login'
import Register from './Pages/Register'
import Navbar from "./Components/Navbar";
import './Assets/Styles/main.css'
import {Provider} from "react-redux";
import store from '../src/Redux/index'
import {persistor} from '../src/Redux/index'
import {PersistGate} from 'redux-persist/integration/react'
import ProtectedRoute from "./Components/ProtectedRoute";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <React.StrictMode>
                   <BrowserRouter>
                       <Navbar/>
                       <Routes>
                           <Route path='/' element={<App/>}/>
                           <Route path='/login' element={<Login/>}/>
                           <Route path='/signup' element={<Register/>}/>
                       </Routes>
                   </BrowserRouter>
            </React.StrictMode>
        </PersistGate>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
