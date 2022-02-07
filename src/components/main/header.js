import React, { useState } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Header = ({ type, setType, isLogin, setIsLogin }) => {
    const [open, setOpen] = useState(false);
    const onIconClick = () => {
        (open) ? setOpen(false) : setOpen(true);
    }

    const handleClickAway = () => {
        setOpen(false);
    }

    const onLogout = () => {
        setOpen(false);
        setIsLogin(false);
        setType("login");
    }

    return (
        <div>
            <AppBar position="static" style={{ backgroundColor: "black" }}>
                <Toolbar>
                    {/* <Typography variant="h6">Smart Park</Typography> */}
                    <div className="title-logo-cls" />
                    {(isLogin === true) ? (<div><Typography varinat="h6" style={{ position: 'absolute', right: "6%", top: "20%" }}>{(type === "agentSession") ? "Parkways Private Ltd." : "Mohit Yeware"}</Typography>
                        <ClickAwayListener onClickAway={handleClickAway}>
                            <div>
                                <AccountCircleIcon style={{ position: 'absolute', right: "4%", top: "20%" }} onClick={onIconClick} />
                                {(open) ? <Paper style={{ position: 'absolute', right: "2%", top: "50%", width: "8%", height: "50%" }}>
                                    <Button color="primary" style={{ margin: "0.1em", color: "black" }} onClick={onLogout}>Log out</Button>
                                </Paper> : ""}
                            </div>
                        </ClickAwayListener></div>) : <div>
                            <Button color="inherit" style={{ position: "absolute", right: 100, top: "20%" }} onClick={() => setType("login")}>Login</Button>
                            <Button color="inherit" style={{ position: "absolute", right: 25, top: "20%" }} onClick={() => setType("register")}>SignUp</Button>
                        </div>}
                </Toolbar>
            </AppBar>
        </div>
        // <header className="header-container-cls">
        //     <span className="header-title-cls">Smart Park Portal</span>
        //     {(isLogin === true) ? (<div><Typography varinat="h6" style={{ position: 'absolute', right: "6%", top: "2%" }}>Mohit Yeware</Typography>
        //         <ClickAwayListener onClickAway={handleClickAway}>
        //             <div>
        //                 <AccountCircleIcon style={{ position: 'absolute', right: "4%", top: "2%" }} onClick={onIconClick} />
        //                 {(open) ? <Paper style={{ position: 'absolute', right: "2%", top: "5%", width: "8%", height: "7%" }}>
        //                     <Button color="primary" style={{ margin: "0.5em" }} onClick={onLogout}>Log out</Button>
        //                 </Paper> : ""}
        //             </div>
        //         </ClickAwayListener></div>) : ""}
        // </header>
    )
};

export default Header;