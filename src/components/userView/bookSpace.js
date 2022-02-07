import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
// import 'date-fns';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import './userViewStyle.css';
import DialogContent from '@material-ui/core/DialogContent';
import Divider from '@material-ui/core/Divider';
import InputAdornment from '@material-ui/core/InputAdornment';


const BookSpace = ({ value, setValue, bookSpaceDetails, setBookSpaceDetails }) => {

    // const [selectedDate, setSelectedDate] = React.useState(new Date('2020-07-24T21:11:54'));
    const [flagDetails, setFlagDetails] = useState({ dateSearchLoader: false, snackBarFlag: false, dialogFlag: false });

    const handleChange = input => e => {
        setBookSpaceDetails({ ...bookSpaceDetails, [input]: e.target.value });
    }

    const onLocationSearch = () => {
        setBookSpaceDetails({ ...bookSpaceDetails, locationSearch: true });
    }

    const onDetailsSubmit = () => {
        // setFlagDetails({ dateSearchLoader: true });
        setBookSpaceDetails({ ...bookSpaceDetails, dateTimeSearch: true });
    }

    const onReserveClick = () => {
        console.log(bookSpaceDetails);
        // setFlagDetails({ ...flagDetails, snackBarFlag: true });
        setFlagDetails({ ...flagDetails, dialogFlag: true });
    }

    const closeLoader = () => {
        setFlagDetails()
    }

    // if (flagDetails.dateSearchLoader === true) {
    //     setTimeout(() => {
    //         setFlagDetails({ ...flagDetails, dateSearchLoader: false });
    //         setBookSpaceDetails({ ...bookSpaceDetails, dateTimeSearch: true });
    //     }, 3000);
    // }

    // function Alert(props) {
    //     return <MuiAlert elevation={6} variant="filled" {...props} />;
    // }

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setFlagDetails({ ...flagDetails, snackBarFlag: false });
    };

    const handleDialogClose = () => {
        setFlagDetails({ ...flagDetails, dialogFlag: false });
        setValue(1);
    }

    return (
        <div className="tabContent-main-cls">
            <div>
                <LocationOnIcon className="bookSpace-location-cls" />
                <TextField style={{ width: "120%" }}
                    value={bookSpaceDetails.location}
                    onChange={handleChange('location')}
                    label="Where do you want to go?"
                // InputProps={{
                //     endAdornment: (
                //         <InputAdornment position="end">
                //             <LocationOnIcon />
                //         </InputAdornment>
                //     ),
                // }} 
                />
                <Button variant="contained" onClick={onLocationSearch} className="bookSpace-btn-cls">Search</Button>
            </div>
            <br />
            {((bookSpaceDetails.locationSearch === true) ? <div>
                <TextField type="date" label="Date" value={bookSpaceDetails.Date}
                    onChange={handleChange('date')} InputLabelProps={{ shrink: true }} />
                <span className="bookSpace-space-cls" />
                <TextField type="time" label="Start Time" value={bookSpaceDetails.startTime}
                    onChange={handleChange('startTime')} InputLabelProps={{ shrink: true }} />
                <span className="bookSpace-space-cls" />
                <TextField type="time" label="End Time" value={bookSpaceDetails.endTime}
                    onChange={handleChange('endTime')} InputLabelProps={{ shrink: true }} />
                <span className="bookSpace-space-cls" />
                <Button variant="contained" className="bookSpace-btn-cls" onClick={onDetailsSubmit}>Submit</Button>
            </div> : "")}
            {/* {(flagDetails.dateSearchLoader === true) ? (<Backdrop open={flagDetails.dateSearchLoader}>
                <CircularProgress color="inherit" />
            </Backdrop>) : ""} */}
            <br />
            <br />
            {((bookSpaceDetails.dateTimeSearch === true) ? (<div>
                <Grid container spacing={1}>
                    <Grid item xs={1} />
                    <Grid item xs={4} style={{ border: "1px solid" }}>
                        <Typography variant="subtitle2" style={{ margin: "5px 0 0 5px" }}>Business Bay Park</Typography>
                        <Typography variant="subtitle2" style={{ margin: "5px 0 15px 5px" }}>{bookSpaceDetails.location}</Typography>
                        <Typography variant="subtitle2">Price: $20</Typography>
                        <br />
                        <Button variant="contained" style={{ backgroundColor: "black", color: "white" }} onClick={onReserveClick}>Reserve</Button>
                    </Grid>
                    <Grid item xs={2} />
                    <Grid item xs={4} style={{ border: "1px solid" }}>
                        <Typography variant="subtitle2" style={{ margin: "5px 0 0 5px" }}>Phoenix Mall</Typography>
                        <Typography variant="subtitle2" style={{ margin: "5px 0 15px 5px" }}>Pune-Nagar Road, Yerwada, Pune</Typography>
                        <Typography variant="subtitle2">Price: $30</Typography>
                        <br />
                        <Button variant="contained" style={{ backgroundColor: "black", color: "white" }} onClick={onReserveClick}>Reserve</Button>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </div>) : "")}
            {((flagDetails.dialogFlag === true) ? (<Dialog open={flagDetails.dialogFlag} onClose={handleDialogClose}>
                <DialogTitle className="successDialog-cls">Success</DialogTitle>
                <Divider />
                <DialogContent style={{ padding: "28px 24px" }}>
                    <Typography variant="h6">Parking has been successfully reserved</Typography>
                </DialogContent>
            </Dialog>) : "")}
            {/* <Snackbar open={true} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} autoHideDuration={20000} message="Sucess message" /> */}
            {/* <SnackbarContent message="Sucess message" /> */}
            {/* <Snackbar open={flagDetails.snackBarFlag} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="success">
                    This is a success message!
                </Alert>
            </Snackbar> */}
        </div>
    )
};

export default BookSpace;