import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const Success = ({ type, setType, prevStep }) => {
    const onLoginClick = () => {
        setType("login");
    };

    const back = () => {
        prevStep();
    }

    return (
        <div>
            <AppBar position="static" className="signUp-title-cls">
                {/* <Typography variant="h5">Success</Typography> */}
                {/* <Typography variant="h5">Failed</Typography> */}
            </AppBar>
            <br />
            <br />
            <Typography variant="h5">Voila! Your account is created</Typography>
            {/* <Typography variant="h5">Entered details are invalid. Please enter correct details.</Typography> */}
            <br />
            <br />
            <br />
            <Link component="button" variant="body1" onClick={onLoginClick}>Login</Link>
            {/* <Button variant="contained" onClick={back}>Back</Button> */}
        </div>
    )
};

export default Success;