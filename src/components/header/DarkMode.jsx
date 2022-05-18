import React from 'react';

import './DarkMode.scss';
const DarkMode = () => {
    return (
        <div>
            {/* Start Dark Mode */}
            <div className='darkMode d-none d-md-inline-block'>
                <button className='btn-darkMode'>
                <span className='bg-darkMode'>                    
                </span>               
                </button>
            </div>
            {/* End Dark Mode */}
        </div>
    );
};

export default DarkMode;