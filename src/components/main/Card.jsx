import React from 'react';
import CardImg from './CardImg';

const Card = (props) => {
    return (
        <>
           <div className='card bg-white text-center'>
              <div className='cardBody'>
               <CardImg />
                <div className='cardContent py-2'>
                    <div className='title py-1'>
                        <strong>{props.title}</strong>
                    </div>
                    <div className='count'>
                        <span className='number'>
                        {props.number}
                        </span>
                    </div>
                </div>
              </div>
            </div> 
        </>
    );
};

export default Card;