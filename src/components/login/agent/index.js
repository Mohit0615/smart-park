import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../style.css';

import { createAgent } from "../../../services/login";

const AgentRegistration = ({ nextStep, handleChange, values }) => {
    const next = (e) => {
        let requestObj = {
            AgentName: values.agentName,
            ParkingLotName: values.parkingLot,
            Password: values.password
        };

        // (async () => {
        //     const list = await createAgent(requestObj);
        // })();

        e.preventDefault();
        nextStep();
    }

    const isSubmitDisabled = () => {
        return ((values.agentName === "") || (values.parkingLot === "") || (values.password === "")) ? true : false;
    }

    return (
        <div>
            <AppBar position="static" className="signUp-title-cls">
                <Typography variant="h5">Enter the Agent details</Typography>
            </AppBar>
            <br />
            <TextField value={values.agentName} onChange={handleChange('agentName')} label="Agent Name" />
            <br />
            <TextField value={values.parkingLot} onChange={handleChange('parkingLot')} label="Parking lot" />
            <br />
            <TextField value={values.contactNo} onChange={handleChange('contactNo')} label="Contact No" />
            <br />
            <TextField value={values.email} onChange={handleChange('email')} label="Email" />
            <br />
            <TextField value={values.password} onChange={handleChange('password')} type="password" label="Password" />
            <br />
            <br />
            {/* <Button variant="contained" className="btnColor-cls" disabled={isSubmitDisabled()} onClick={next}>Submit</Button> */}
            <Button variant="contained" className="btnColor-cls" onClick={next}>Submit</Button>
        </div>
    )
};

export default AgentRegistration;