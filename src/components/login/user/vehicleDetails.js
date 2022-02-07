import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const VehicleDetails = ({ nextStep, prevStep, handleChange, values }) => {
    const next = e => {
        e.preventDefault();
        nextStep();
    }

    const back = e => {
        e.preventDefault();
        prevStep();
    }

    const isNextDisabled = () => {
        return ((values.vehicleType === "") || (values.vehicleNo === "") ? true : false);
    }

    return (
        <div>
            <AppBar position="static" className="signUp-title-cls">
                <Typography variant="h5">Enter the vehicle details</Typography>
            </AppBar>
            <br />
            <br />
            <InputLabel>Vehicle Type</InputLabel>
            <Select value={values.vehicleType} onChange={handleChange('vehicleType')} className="select-cls">
                <MenuItem value="hatchback">Hatchback</MenuItem>
                <MenuItem value="sedan">Sedan</MenuItem>
                <MenuItem value="suv">SUV</MenuItem>
            </Select>
            <br />
            <br />
            <TextField value={values.vehicleNo} onChange={handleChange('vehicleNo')} label="Vehicle Number" />
            <br />
            <br />
            <br />
            {/* <Button variant="contained" className="btnColor-cls" disabled={isNextDisabled()} onClick={next}>Next</Button> */}
            <Button variant="contained" className="btnColor-cls" onClick={next}>Next</Button>
            <span className="step-btn-cls" />
            <Button variant="contained" onClick={back}>Back</Button>
        </div>
    )
}

export default VehicleDetails;