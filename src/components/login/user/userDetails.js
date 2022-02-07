import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const UserDetails = ({ accountType, nextStep, prevStep, handleChange, values }) => {
    const next = e => {
        e.preventDefault();
        nextStep();
    }

    const isNextDisabled = () => {
        return ((values.firstName === "") || (values.lastName === "") || (values.contactNo === "") ||
            (values.email === "") || (values.password === "")) ? true : false;
    }

    return (
        <div>
            <AppBar position="static" className="signUp-title-cls">
                <Typography variant="h5">Enter the user details</Typography>
            </AppBar>
            <br />
            <TextField value={values.firstName} onChange={handleChange('firstName')} label="First Name" />
            <br />
            <TextField value={values.lastName} onChange={handleChange('lastName')} label="Last Name" />
            <br />
            <TextField value={values.contactNo} onChange={handleChange('contactNo')} label="Contact No" />
            <br />
            <TextField value={values.email} onChange={handleChange('email')} label="Email" />
            <br />
            <TextField type="password" value={values.password} onChange={handleChange('password')} label="Password" />
            <br />
            <br />
            {/* <Button variant="contained" className="btnColor-cls" disabled={isNextDisabled()} onClick={next}>Next</Button> */}
            <Button variant="contained" className="btnColor-cls" onClick={next}>Next</Button>
        </div>
    )
}

export default UserDetails;