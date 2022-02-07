import {
    CREATE_CUSTOMER_URL,
    VALIDATE_CUSTOMER_URL,
    CREATE_AGENT_URL
} from '../utils/Api';

import { fireAjaxRequest } from '../utils/Utility';

// create customer
export const createCustomer = async (params) => {
    return await fireAjaxRequest(CREATE_CUSTOMER_URL, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    });
};

// login service
export const validateCustomer = async (username, password) => {
    return await fireAjaxRequest(VALIDATE_CUSTOMER_URL, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: ({
            EmailID: username,
            Password: password
        })
    });
};

// create agent
export const createAgent = async (params) => {
    return await fireAjaxRequest(CREATE_AGENT_URL, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
};