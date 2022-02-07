import React from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import InputLabel from '@material-ui/core/InputLabel';

import { createCustomer } from '../../../services/login';

const Confirm = ({ nextStep, prevStep, values }) => {
    // let labelObj = [{ firstName: "First Name" }, { lastName: "Last Name" }, { email: "Email" },
    // { contactNo: "Contact Number" }, { vehicleType: "Vehicle Type" }, { vehicleNo: "Vehicle Number" }
    // ];

    let labelObj = {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        contactNo: "Contact Number",
        vehicleType: "Vehicle Type",
        vehicleNo: "Vehicle Number"
    }

    let requestObj = {
        CustomerFirstName: values.firstName,
        CustomerLastName: values.lastName,
        ContactNo: values.contactNo,
        EmailID: values.email,
        VehicleRegistrationPlate: values.vehicleNo,
        VehicleType: values.vehicleType,
        Password: values.password
    };

    const next = e => {
        // (async () => {
        //     const list = await createCustomer(requestObj);
        // })();

        console.log(values);
        e.preventDefault();
        nextStep();

    }

    const back = e => {
        e.preventDefault();
        prevStep();
    }

    return (
        <div>
            <AppBar position="static" className="signUp-title-cls">
                <Typography variant="h5">Confirm</Typography>
            </AppBar>
            <br />
            <div>
                {/* {labelObj.map((label, index, arr) => {
                    let keyLabel, inputValue, formLabel;
                    keyLabel = Object.keys(arr[index])[0];
                    formLabel = label[keyLabel];
                    inputValue = values[keyLabel];
                    return (<div key={formLabel}>
                        <InputLabel className="confirmLabel-cls">{formLabel}:</InputLabel>
                        <InputLabel className="confirmValue-cls">{inputValue}</InputLabel>
                        <br />
                        <br />
                    </div>)
                })} */}
                {Object.entries(labelObj).map(([key, value]) => {
                    return (<div key={key} style={{ padding: "20px" }}>
                        <InputLabel className="confirmLabel-cls">{value}:</InputLabel>
                        <InputLabel className="confirmValue-cls">{values[key]}</InputLabel>
                    </div>)
                })}
            </div>
            <br />
            <Button variant="contained" className="btnColor-cls" onClick={next} endIcon={<InsertEmoticonIcon />}>Please Confirm</Button>
            <span className="step-btn-cls" />
            <Button variant="contained" onClick={back}>Back</Button>
        </div >
    )
};

export default Confirm;