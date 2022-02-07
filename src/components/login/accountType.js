import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import './style.css';

const AccountType = ({ accountType, setAccountType, nextStep }) => {
    const handleAccountChange = (e) => {
        setAccountType(e.target.value);
    }

    return (
        <div>
            <AppBar position="static" className="signUp-title-cls">
                <Typography variant="h5">Select the account type</Typography>
            </AppBar>
            <br />
            <br />
            <RadioGroup className="account-type-cls">
                <FormControlLabel value="user" control={<Radio />} onChange={handleAccountChange} label="User" />
                <FormControlLabel value="agent" control={<Radio />} onChange={handleAccountChange} label="Agent" />
            </RadioGroup>
            <br />
            <br />
            <br />
            {/* <Button variant="contained" className={((accountType !== "") ? "btn-color-cls" : "")} disabled={(accountType !== "") ? false : true} onClick={nextStep}>Next</Button> */}
            <Button variant="contained" className="btnColor-cls" disabled={(accountType !== "") ? false : true} onClick={nextStep}>Next</Button>
        </div>
    )
}

export default AccountType;