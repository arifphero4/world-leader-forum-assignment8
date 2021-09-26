import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDonate,  faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Leaders.css';


const Leaders = (props) => {
    // console.log(props);
    const {name, age, designation, country, img, donationAmount} = props.leader;
    const element = <FontAwesomeIcon icon={faDonate} />
    const location = <FontAwesomeIcon icon={faMapMarkerAlt} />
    return (
        <div  >
           <div className="cart-child">
               <div className="img-div">
                    <img src={img} alt="" />
               </div>
           
            <h2>Name: {name}</h2>
            <p>Age: {age} </p>
            <p>Designation: {designation}</p>
            <p>{location} Country: {country} </p>
            <p>Donaton Amount: ${donationAmount} </p>
            <button 
            onClick={() => props.handleClickToDonate (props.leader) }
            className="donate-btn">{element} Click to Donate</button>
            
           </div>

        </div>
    );
};

export default Leaders;