import React from 'react';
import styles from './SideBar.scss';
import Dashboards from './Dashboards';
import Pages from './Pages';
import Application from './Application';
import Ui from './Ui';
import Menu from './Menu';
import BlankPage from './BlankPage';
import Docs from './Docs';
const Sidebar = () => {
    return (
        <>
            {/* Start sideBar */}
            <div className='sideBar bg-white d-none d-md-block flex-shrink-0 border border-bottom-0 border-top-0 scroll'>
                <ul className='list-unstyled  flex-column my-0'>
                <Dashboards />
                <Pages />
                <Application />
                <Ui />
                <Menu />
                <BlankPage />
                <Docs />
              </ul>
            </div>
            {/* End sideBar */}
        </>
    );
};

export default Sidebar;