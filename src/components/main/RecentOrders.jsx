import React, {useEffect, useState} from 'react';
import styles from './RecentOrders.scss';
import Order from './Order';
import axios from 'axios';

const RecentOrders = (props) => {
    const [orderData, setOrderData] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(response => {
            setOrderData(response.data)
            console.log( response)
            console.log("response", response.data)
        }
    )
        console.log("set data", setOrderData)
        }, [])
      
    return (
        <>
        {/* Start Recent Orders */}
           <div className='recentOrders mt-4'>
                <div className='subject d-flex justify-content-between p-3'>
                    <strong>Recent Orders</strong>
                    <span>
                    <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                    </svg>
                    </a>
                    </span>
                </div>
                <div className='orders px-3 scroll'>
                   {orderData.map(item => <Order key={item.id} thumbnailUrl={item.thumbnailUrl} title={item.title} description={item.description} date={item.date} label={item.label}/>)} 
                </div>
            </div> 
        {/* End Recent Orders */}
        </>
    );
};

export default RecentOrders;