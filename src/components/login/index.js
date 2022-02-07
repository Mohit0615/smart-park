import React, { useState } from 'react';
import './style.css';
import SignIn from './signIn';
import SignUp from './signUp';
import UserView from '../userView/index';

const Login = ({ type, setType, isLogin, setIsLogin }) => {
    const [loaderFlagDetails, setLoaderFlagDetails] = useState(false);

    return (
        ((isLogin === true) ? <UserView type={type} setType={setType} isLogin={isLogin}
            setIsLogin={setIsLogin} loaderFlagDetails={loaderFlagDetails} setLoaderFlagDetails={setLoaderFlagDetails} />
            : (<div className="login-back-cls">
                <div className="login-box-cls">
                    <form>
                        {(type === "login") ? <SignIn type={type} setType={setType} isLogin={isLogin}
                            setIsLogin={setIsLogin} loaderFlagDetails={loaderFlagDetails}
                            setLoaderFlagDetails={setLoaderFlagDetails} />
                            : <SignUp type={type} setType={setType} />}
                    </form>
                </div>
            </div>))
    )
}

export default Login;