import React from 'react';

const CardP = ({pokemon, i}) => {
    return(
        <div className='col-md-3 mb-3'>
            <div className='card text-white bg-dark'>
            <div className="card-header"></div>
            <div className="card-body">
                <h4 className="card-title">Name: {pokemon}</h4>
                <p className="card-text">No. {i} </p>
            </div>
        </div>
        </div>
        
    );
};
   
export default CardP;