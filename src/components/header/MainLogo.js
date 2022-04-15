import React from 'react';
import Logo from '../../assets/img/Logo.png';
import LogoMobile from '../../assets/img/LogoMobile.png';
const MainLogo = () => {
    return (
        <div>
            {/* Start Main Logo */}
            <div className='mainLogo d-none d-md-inline-block'>
                <a href="#">
                   <img src={Logo} alt="mainLogo" width="110" height="35" decoding='async' loading='eager' />
                </a>
            </div>
             {/* End Main Logo */}
             {/* Start Logo Mobile */}
            <div className='logoMobile d-md-none d-inline-block'>
                <a href="#">
                   <img src={LogoMobile} alt="LogoMobile" width="20" height="25" decoding='async' loading='eager' />
                </a>
            </div>
            {/* End Logo Mobile */}
        </div>
    );
};

export default MainLogo;