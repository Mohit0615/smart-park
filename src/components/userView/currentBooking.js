import React from 'react';
import QRCode from 'qrcode.react';
import InputLabel from '@material-ui/core/InputLabel';
import './userViewStyle.css';

const CurrentBooking = ({ response }) => {
    const labelObj = {
        bookingId: "Booking ID",
        vehicleType: "Vehicle Type",
        vehicleNo: "Vehicle Number",
        date: "Date",
        startTime: "Start Time",
        endTime: "End Time",
        parkingLot: "Parking Lot",
        price: "Price"
    }

    return (
        <div className="tabContent-main-cls">
            <div className="cbLeftPanel-cls">
                {Object.entries(labelObj).map(([key, value]) => {
                    return (<div className="cbFields-cls">
                        <InputLabel className="cbLabel-cls">{value}:</InputLabel>
                        <InputLabel className="cbValue-cls">{response[key]}</InputLabel>
                    </div>)
                })}
            </div>
            <div className="cbRightPanel-cls">
                <br />
                <br />
                <QRCode value={response} className="cbQRCode-cls" />
            </div>
        </div>
    )
};

export default CurrentBooking;