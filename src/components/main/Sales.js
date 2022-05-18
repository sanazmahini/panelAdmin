import React from 'react';
import styles from './Sales.scss';
import { Line } from 'react-chartjs-2';
import { Chart } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);
const Sales = () => {    
    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat" , "Sun"],
        datasets: [
          {
            label: 'dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgb(0 ,54, 90)',
            borderColor: 'rgb(0 ,54, 90)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgb(0 ,54, 90)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgb(0 ,54, 90)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [5, 55, 80, 81, 56, 55, 40]
          },
         
        ]
      };
    return (
        <>        
           {/* Start Sales */}
           <div className='sales mt-3'>
                <div className='subject d-flex justify-content-between p-3'>
                    <strong>Sales</strong>
                    <span>
                    <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                    </svg>
                    </a>
                    </span>
                </div>
                <Line data={data} className='p-3' />
            </div>           
           {/* End Sales */}
        </>
    );
};

export default Sales;