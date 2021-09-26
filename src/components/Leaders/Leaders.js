import React from 'react';
import './Leaders.css';

const Leaders = (props) => {
    // console.log(props);
    const {name, age, designation, country, img, donationAmount} = props.leader;
    return (
        <div >
           <div className="cart-child">
           <img src={img} alt="" />
            <h2>Name: <span>{name}</span></h2>
            <p>Age: {age} </p>
            <p>Designation: {designation}</p>
            <p>Country: {country} </p>
            <p>Donaton Amount:$ {donationAmount} </p>
            <button 
            onClick={() => props.handleClickToDonate (props.leader) }
            className="donate-btn">Click to Donate</button>
            
           </div>

        </div>
    );
};

export default Leaders;