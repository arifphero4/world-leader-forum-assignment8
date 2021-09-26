import React from 'react';
import Name from '../Name/Name';
import './Donation.css';

const Donation = (props) => {
   const {donation} = props;
   const totalReducer = (previous, donation) => previous + donation.donationAmount;
   const total = donation.reduce( totalReducer, 0)
    


    return (
        <div>
            <h1>Donation History</h1>
            <h3>Donation Count: {props.donation.length} </h3>
            <h5>Total Donation: ${total} </h5>
            <h2> Doneted by:</h2>
            <div>
                {
                  donation.map(name => <Name name={name}></Name>)  
                }
            </div>
        </div>
    );
};

export default Donation;