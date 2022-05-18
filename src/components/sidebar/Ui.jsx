import React from 'react';
import styles from './Ui.scss';
const Ui = () => {
    return (
        <>
            {/* Start Ui */}
            <li className='item border-bottom'>
                <a href='#' className='link ui'>              
                   <span className='d-flex justify-content-center'>
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-file-break" viewBox="0 0 16 16">
                    <path d="M0 10.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zM12 0H4a2 2 0 0 0-2 2v7h1V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7h1V2a2 2 0 0 0-2-2zm2 12h-1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2H2v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2z"/>
                    </svg>
                   </span>
                  <strong className='d-flex justify-content-center title pt-2'>Ui</strong>               
                </a>
            </li> 
            {/* End Ui */}
        </>
    );
};

export default Ui;