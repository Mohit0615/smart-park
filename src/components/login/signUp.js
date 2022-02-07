import React, { useState } from 'react';

import AccountType from './accountType';
import UserDetails from './user/userDetails';
import VehicleDetails from './user/vehicleDetails';
import AgentRegistration from './agent';
import Confirm from './user/confirm';
import Success from './success';

const SignUp = ({ type, setType }) => {
    const [accountType, setAccountType] = useState("");
    const [step, setStep] = useState(0);
    const [user, setUser] = useState({
        firstName: "", lastName: "", contactNo: "", email: "", password: "", vehicleType: "", vehicleNo: ""
    });
    const [agent, setAgent] = useState({ agentName: "", parkingLot: "", password: "", date: new Date() });

    const nextStep = () => {
        setStep(step + 1);
    }

    const prevStep = () => {
        setStep(step - 1);
    }

    const handleChange = input => e => {
        ((accountType === "user") ? setUser({ ...user, [input]: e.target.value }) : setAgent({ ...agent, [input]: e.target.value }));
    }

    switch (step) {
        case 0: return (
            <AccountType accountType={accountType} setAccountType={setAccountType} nextStep={nextStep} />
        )
        case 1: return ((accountType === "user") ?
            <UserDetails accountType={accountType} nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={user} />
            : <AgentRegistration nextStep={nextStep} handleChange={handleChange} values={agent} />
        )
        case 2: return ((accountType === "user") ?
            <VehicleDetails nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={user} />
            : <Success type={type} setType={setType} prevStep={prevStep} />
        )
        case 3: return (
            <Confirm nextStep={nextStep} prevStep={prevStep} values={user} />
        )
        case 4: return (
            <Success type={type} setType={setType} prevStep={prevStep} />
        )
    }
};

export default SignUp;