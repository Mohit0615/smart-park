import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import './style.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const UserRegistration = () => {
    const localObj = {
        firstName: "", lastName: "", contactNo: "", email: "", vehicleType: "", vehicleNo: ""
    }
    const [userDetails, setUserDetails] = useState(localObj);

    const handleChange = (event) => {
        setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
    }

    const handleSubmit = () => {
        console.log(userDetails);
    }

    // const disabledSubmit = () => {
    //     debugger;
    // }

    const onReset = () => {
        setUserDetails(localObj);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset className="fieldset-cls">
                    <legend>User Registration</legend>
                    <div className="form-inner-cls">
                        <TextField required className="textField-cls" label="First Name" name="firstName" value={userDetails.firstName} onChange={(e) => handleChange(e)} />
                        <br />
                        <TextField required className="textField-cls" label="Last Name" name="lastName" value={userDetails.lastName} onChange={(e) => handleChange(e)} />
                        <br />
                        <TextField required className="textField-cls" name="contactNo" label="Contact number" value={userDetails.contactNo} onChange={(e) => handleChange(e)} />
                        <br />
                        <TextField required className="textField-cls" type="email" label="Email" name="email" value={userDetails.email} onChange={(e) => handleChange(e)} />
                        <br />
                        <InputLabel className="selectLabel-cls">Vechicle Type</InputLabel>
                        <Select className="select-cls" name="vechicleType" value={userDetails.vehicleType} onChange={handleChange}>
                            <MenuItem value="hatchback">Hatchback</MenuItem>
                            <MenuItem value="sedan">Sedan</MenuItem>
                            <MenuItem value="suv">SUV</MenuItem>
                        </Select>
                        <TextField required className="textField-cls" label="Vehicle Number" name="vehicleNo" value={userDetails.vehicleNo} onChange={(e) => handleChange(e)} />
                        <br />
                        <br />
                        <br />
                        <Button variant="contained" color="primary" className="btn-cls" onClick={handleSubmit}>Submit</Button>
                        <Button variant="contained" color="primary" className="btn-cls" onClick={onReset}>Reset</Button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
};

export default UserRegistration;