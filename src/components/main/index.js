import React, { Component, useState } from 'react';
// import './style2.scss';
import './style.css';
import Header from './header';
import UserRegistration from '../userView/userRegistration';
import Login from '../login';
import UserView from '../userView/index';

const Main = () => {
    const [type, setType] = useState("login");
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div>
            <Header type={type} setType={setType} isLogin={isLogin} setIsLogin={setIsLogin} />
            <Login type={type} setType={setType} isLogin={isLogin} setIsLogin={setIsLogin} />
            {/* <UserView /> */}
        </div>
    )
}

export default Main;