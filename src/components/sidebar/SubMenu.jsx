import React from 'react';
import styles from './SubMenu.scss';
import SubMenuDashboards from './SubMenuDashboards';
const SubMenu = () => {
    return (
        <>
           {/* Start SubMenu  */}
           <div className='subMenu d-none d-md-block'>
               <SubMenuDashboards />
           </div>
           {/* End SubMenu  */}
        </>
    );
};

export default SubMenu;