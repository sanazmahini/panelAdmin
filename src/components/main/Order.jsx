import React , {useEffect} from 'react';
import MarbelCake from './../../assets/img/MarbleCake.jpg';
import axios from 'axios';
const Order = () => {
    // useEffect(()=>{
    //     axios.get("http://localhost:3000/posts/1")
    //     .then(response => console.log(response))
    // })
    return (
        <>
            <div className='order d-flex align-items-center pb-3'>
                        <div className='image'>
                            <img src={MarbelCake} width="100" height="90" className='flex-shrink-0' alt="MarbelCake" />
                            <span className='label'>On Hold</span>
                        </div>
                        <div className='mx-3 content'>
                        <div className='title mb-2'>
                            <strong>Marbel Cake</strong>
                        </div>
                        <div className='description'>
                            <span>Wedding cake with flowers Macarons</span>
                        </div>
                        <div className='date'>
                            <span>02.04.2021</span>
                        </div>
                        </div>
            </div>
        </>
    );
};

export default Order;