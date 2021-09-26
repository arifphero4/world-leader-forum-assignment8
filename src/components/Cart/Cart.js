import React, { useEffect, useState } from 'react';
import Donation from '../Donation/Donation';
import Leaders from '../Leaders/Leaders';
import './Cart.css';

const Cart = () => {
    const [leaders, setLeaders] =useState([]);
    const [donate, setDonate] = useState([])

    useEffect( () =>{
        fetch('./info.JSON')
        .then(res => res.json())
        .then(data => setLeaders(data));
    },[])

    const handleClickToDonate = (Leaders)=>{
        const newDonate = [...donate, Leaders];
        setDonate(newDonate);
    }

    return (
        <div className="cart-container">
            <div className="leader-container">
                <h3>Forum members: {leaders.length} </h3>
                {
                    leaders.map(leader => <Leaders
                        key={leader.key}
                        leader= {leader} 
                        handleClickToDonate={handleClickToDonate}
                    >
                    </Leaders> )
                }
            </div>
            <div className="donation-container">
                <Donation donation={donate}></Donation>

            </div>
        </div>
    );
};

export default Cart;