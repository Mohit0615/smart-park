import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import PersonIcon from "@material-ui/icons/Person";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import "./style.css";
import UserView from "../userView/index";
import { validateCustomer } from "../../services/login";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

const SignIn = ({
  type,
  setType,
  isLogin,
  setIsLogin,
  loaderFlagDetails,
  setLoaderFlagDetails,
}) => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  // const [flagDetails, setFlagDetails] = useState(false);

  const handleChange = (input) => (e) => {
    setLoginDetails({ ...loginDetails, [input]: e.target.value });
  };

  const onCreate = () => {
    setType("register");
  };

  const isSubmitDisabled = () => {
    return loginDetails.username === "" || loginDetails.password === ""
      ? true
      : false;
  };

  const onLoginSumbit = () => {
    // setLoaderFlagDetails(true);
    setIsLogin(true);
    loginDetails.username === "admin@parkways.com" &&
    loginDetails.password === "admin"
      ? openAgent()
      : setType("userSession");
    // fetch('http://10.97.119.48:1010/spotfire/wp/analysis?file=/SmartParking/ParkView&waid=KwtHpM1iqUKA84WMWqvx4-2103270a19_CXN&wavid=0#!#%2F', {
    //     method: 'GET'
    //     //body: formData
    // })
    // let requestObj = {
    //     EmailID: loginDetails.username,
    //     Password: loginDetails.password
    // };

    // (async () => {
    //     debugger;
    //     const list = await validateCustomer(loginDetails.username, loginDetails.password);
    // })();
  };

  const openAgent = () => {
    setType("agentSession");
    // window.open('http://10.97.119.48:1010/spotfire/wp/analysis?file=/SmartParking/ParkView_Dark&waid=JWgloRRGGEGfR-j_rlGkN-0112560a19QIgo&wavid=0&options=7-0,9-0,10-0,11-0,12-0,13-0,14-0,1-0,2-0,3-0,4-0,5-0,6-0,15-0,17-0&configurationBlock=SetPage(pageIndex%3D0);', "_self");
  };

  // const handleSubmit = (event) => {
  //     debugger;
  //     event.preventDefault();
  //     let formData = new FormData();

  //     formData.append('EmailID', loginDetails.username);
  //     formData.append('Password', loginDetails.password);

  //     fetch('http://127.0.0.1:5000/validate_customer', {
  //         method: 'POST',
  //         body: formData
  //     })
  // }

  // if (flagDetails === true) {
  //     setTimeout(() => {
  //         debugger;
  //         setFlagDetails(false);
  //         setIsLogin(true);
  //         (((loginDetails.username === "admin@tibco.com") && (loginDetails.password === "admin")) ? openAgent() : setType("userSession"));
  //     }, 5000);
  // }

  return (
    <div className="login-form-cls">
      <br />
      <Typography
        variant="h4"
        style={{ margin: "0em 0 0.5em 0", color: "Gray" }}
      >
        Let's Get Started
      </Typography>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <PersonIcon className="signIn-Icon-cls" />
        <TextField
          value={loginDetails.username}
          onChange={handleChange("username")}
          label="Username"
        />
        <br />
        <LockOpenIcon className="signIn-Icon-cls" />
        <TextField
          type="password"
          value={loginDetails.password}
          onChange={handleChange("password")}
          label="Password"
        />
        <br />
        <br />
        {/* <Button variant="contained" color="primary" type="submit" disabled={isSubmitDisabled()} onClick={onLoginSumbit}>Submit</Button> */}
        <Button
          variant="contained"
          style={{ backgroundColor: "black", color: "white" }}
          type="submit"
          disabled={isSubmitDisabled()}
          onClick={onLoginSumbit}
        >
          Login
        </Button>
        {/* {(flagDetails === true) ? (<Backdrop open={flagDetails}>
                    <CircularProgress color="inherit" />
                </Backdrop>) : ""} */}
      </form>
      <br />
      <br />
      <br />
      <Link component="button" variant="body1" onClick={onCreate}>
        SignUp
      </Link>
    </div>
  );
};

export default SignIn;
