import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import './userViewStyle.css';
import BookSpace from './bookSpace';
import CurrentBooking from './currentBooking';
import RetrieveBooking from './retrieveBooking';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const UserView = ({ type, setType, isLogin, setIsLogin }) => {
    const [value, setValue] = React.useState(0);
    const [bookSpaceDetails, setBookSpaceDetails] = useState({ location: "", date: "", startTime: "", endTime: "", locationSearch: false, dateTimeSearch: false });

    const currentBookingResponse = {
        bookingId: "B150326", date: bookSpaceDetails.date, startTime: bookSpaceDetails.startTime,
        endTime: bookSpaceDetails.endTime, vehicleType: "Sedan", vehicleNo: "MP13CA5903"
    };

    const retrieveBookingResponse = [
        {
            bookingID: "B150328", date: "20/9/2019", startTime: "20:30", endTime: "22:30",
            vehicleType: "Sedan", vehicleNo: "MP13CA5903"
        },
        {
            bookingID: "B386210", date: "28/3/2019", startTime: "09:30", endTime: "12:30",
            vehicleType: "Sedan", vehicleNo: "MP13CA5903"
        },
        {
            bookingID: "B285310", date: "10/2/2020", startTime: "10:00", endTime: "11:00",
            vehicleType: "Sedan", vehicleNo: "MP13CA5903"
        },
        {
            bookingID: "B907412", date: "05/12/2019", startTime: "07:30", endTime: "09:30",
            vehicleType: "Sedan", vehicleNo: "MP13CA5903"
        },
        {
            bookingID: "B539742", date: "21/5/2019", startTime: "16:00", endTime: "17:00",
            vehicleType: "Sedan", vehicleNo: "MP13CA5903"
        },
        {
            bookingID: "B150326", date: "24/1/2020", startTime: "13:30", endTime: "17:30",
            vehicleType: "Sedan", vehicleNo: "MP13CA5903"
        }
    ];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <div className="userView-back-cls">
                {/* <div style={{ position: "absolute", left: "5%", border: '1px solid', height: '15cm' }}> */}
                {((type === "userSession") ? (<div className="userView-box-cls">
                    <AppBar position="static" style={{ backgroundColor: "black"}}>
                        <Tabs value={value} onChange={handleChange}
                            aria-label="simple tabs example" variant="fullWidth">
                            <Tab label="Book Space" />
                            <Tab label="Current Booking" />
                            <Tab label="Retrieve Booking" />
                        </Tabs>
                    </AppBar>
                    {((value === 0) ? <BookSpace value={value} setValue={setValue} bookSpaceDetails={bookSpaceDetails}
                        setBookSpaceDetails={setBookSpaceDetails} /> : ((value === 1) ?
                            <CurrentBooking response={currentBookingResponse} /> :
                            <RetrieveBooking response={retrieveBookingResponse} />))}
                </div>) : <div>
                        {/* <iframe src="http://win-hi51foeau6c:1010/spotfire/wp/Embed?file=/SmartParking/ParkView&configurationBlock=SetPage%28pageIndex%3D0%29%3B&options=7-1,9-1,10-1,11-1,12-1,13-1,14-1,1-1,2-1,3-1,4-1,5-0,6-0,15-1,17-1" width="800" height="600" /> */}
                        {/* <iframe src="http://10.97.119.48:1010/spotfire/wp/OpenAnalysis?file=/SmartParking/ParkView_Dark&configurationBlock=SetPage%28pageIndex%3D0%29%3B&options=7-0,9-0,10-0,11-0,12-0,13-0,14-0,1-0,2-0,3-0,4-0,5-0,6-0,15-0,17-0" width="100%" height="100%" ></iframe> */}
                        {/* <iframe src="http://10.97.119.48:1010/spotfire/wp/Embed?file=/SmartParking/ParkView_Dark&configurationBlock=SetPage%28pageIndex%3D0%29%3B&options=7-0,9-0,10-0,11-0,12-0,13-0,14-0,1-0,2-0,3-0,4-0,5-0,6-0,15-0,17-0" width="900" height="650" ></iframe> */}
                        {/* window.open('http://10.97.119.48:1010/spotfire/wp/analysis?file=/SmartParking/ParkView_Dark&waid=JWgloRRGGEGfR-j_rlGkN-0112560a19QIgo&wavid=0&options=7-0,9-0,10-0,11-0,12-0,13-0,14-0,1-0,2-0,3-0,4-0,5-0,6-0,15-0,17-0&configurationBlock=SetPage(pageIndex%3D0);', "_self"); */}
                        {/* <iframe src="http://localhost:80" width="1400" height="650"></iframe> */}
                        <iframe src="\ezgif.com-crop.gif" className="agentWindow-cls"></iframe>
                    </div>)}
            </div>
            {/* ))} */}
        </div>
    )
};

export default UserView;