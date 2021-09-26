import React from 'react';
import './Name.css'

const Name = (props) => {
    console.log(props.name.name);
    return (
        <div>            
            <h5>
            {
                props.name.name
            }
            </h5>
        </div>
    );
};

export default Name;