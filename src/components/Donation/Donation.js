import React from 'react';
import './Donation.css';

const Donation = (props) => {
   const {donation} = props;
   const totalReducer = (previous, donation) => previous + donation.donationAmount;
   const total = donation.reduce( totalReducer, 0)
    


    return (
        <div>
            <h3>Donation Count: {props.donation.length} </h3>
                <h5>Total Donation:{total} </h5>
        </div>
    );
};

export default Donation;