import React from 'react';
import '../../assets/lib/bootstrap/dist/css/bootstrap.min.css';
const buttonMenu = () => {
    return (
        <div>
            {/* Start Button Menu */}
            <div className='buttonMenu'>
            <a href="#" className='mr-4' aria-label='buttonMenu'>
            <svg viewBox="0 0 180 80" width="40" height="40"><rect width="80" height="3"></rect><rect y="30" width="80" height="3"></rect><rect y="60" width="80" height="3"></rect></svg>
                </a>
            </div>
            {/* End Button Menu */}
        </div>
    );
};

export default buttonMenu;