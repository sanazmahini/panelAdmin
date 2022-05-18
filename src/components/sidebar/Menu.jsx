import React from 'react';
import styles from './Menu.scss';
const Menu = () => {
    return (
        <>
             {/* Start Menu */}
             <li className='item border-bottom'>
                <a href='#' className='link menu'>              
                   <span className='d-flex justify-content-center'>
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-command" viewBox="0 0 16 16">
                    <path d="M3.5 2A1.5 1.5 0 0 1 5 3.5V5H3.5a1.5 1.5 0 1 1 0-3zM6 5V3.5A2.5 2.5 0 1 0 3.5 6H5v4H3.5A2.5 2.5 0 1 0 6 12.5V11h4v1.5a2.5 2.5 0 1 0 2.5-2.5H11V6h1.5A2.5 2.5 0 1 0 10 3.5V5H6zm4 1v4H6V6h4zm1-1V3.5A1.5 1.5 0 1 1 12.5 5H11zm0 6h1.5a1.5 1.5 0 1 1-1.5 1.5V11zm-6 0v1.5A1.5 1.5 0 1 1 3.5 11H5z"/>
                    </svg>
                   </span>
                   <strong className='d-flex justify-content-center title pt-2'>Menu</strong>               
                </a> 
            </li>
            {/* End Menu */} 
        </>
    );
};

export default Menu;