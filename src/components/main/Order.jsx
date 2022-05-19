import React  from 'react';
import MarbelCake from './../../assets/img/MarbleCake.jpg';
import axios from 'axios';
const Order = (props) => {
    return (
        <>
            <div className='order d-flex align-items-center pb-3'>       
                <div className='image'>
                    <img src={MarbelCake} width="100" height="90" className='flex-shrink-0' alt={props.title} />
                    <span className='label'>{props.label}</span>
                </div>
                <div className='mx-3 content'>
                <div className='title mb-2'>
                    <strong>{props.title}</strong>
                </div>
                <div className='description'>
                    <span>{props.description}</span>
                </div>
                <div className='date'>
                    <span>{props.date}</span>
                </div>
                </div>          
            </div>           
        </>
    );
};

export default Order;