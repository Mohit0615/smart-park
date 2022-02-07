import React from 'react';
import Grid from '@material-ui/core/Grid';
import QRCode from 'qrcode.react';

const RetrieveBooking = ({ response }) => {
    const formLabelObj = {
        bookingID: "Booking ID:",
        date: "Date:",
        startTime: "Start Time:",
        endTime: "End Time:",
        vehicleType: "Vehicle Type:",
        vehicleNo: "Vehicle Number:"
    };

    return (
        <div className="tabContent-main-cls">
            {((response && response.length > 0) ? (response.map((rec) => {
                return (<div><Grid container spacing={1} style={{ border: "1px solid" }}>
                    <Grid item xs={2} style={{ textAlign: "left" }}>
                        <p>{formLabelObj.bookingID}</p>
                        <p>{formLabelObj.date}</p>
                        <p>{formLabelObj.startTime}</p>
                    </Grid>
                    <Grid item xs={2} style={{ textAlign: "left" }}>
                        <p>{rec.bookingID}</p>
                        <p>{rec.date}</p>
                        <p>{rec.startTime}</p>
                    </Grid>
                    {/* <Grid item xs={1} /> */}
                    <Grid item xs={3} style={{ textAlign: "left" }}>
                        <p>{formLabelObj.vehicleType}</p>
                        <p>{formLabelObj.vehicleNo}</p>
                        <p>{formLabelObj.endTime}</p>
                    </Grid>
                    <Grid item xs={2} style={{ textAlign: "left" }}>
                        <p>{rec.vehicleType}</p>
                        <p>{rec.vehicleNo}</p>
                        <p>{rec.endTime}</p>
                    </Grid>
                    <Grid item xs={3}>
                        {/* <p>Inside RetrieveBooking</p> */}
                        <br />
                        <QRCode value={rec} style={{ height: "100px", width: "100px" }} />
                    </Grid>
                </Grid><br /></div>)
            })) : <p>No Records found</p>)}
        </div>
    )
}

export default RetrieveBooking;