import React from 'react';
import styles from './SubMenuDashboards.scss';
import Default from './Default';
import Analytics from './Analytics';
import Ecommerce from './Ecommerce';
import Content from './Content';
import Login from './Login';
import Register from './Register';
const SubMenuDashboards = () => {
    return (
        <>
            {/* Start SubMenuDashboards */}
            <div className='SubMenuDashboards'>
                <ul className='list-unstyled'>
                   <Default />
                   <Login />
                   <Register />
                   <Analytics />
                   <Ecommerce />
                   <Content />
                </ul>
            </div>
            {/* End SubMenuDashboards */}
        </>
    );
};

export default SubMenuDashboards;