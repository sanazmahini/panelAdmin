import React from 'react'
import buttonMenu from './../header/ButtonMenu';
import Search from './../header/Search';
import LanguageBtn from './../header/LanguageBtn';
import MainLogo from './../header/MainLogo';
import DarkMode from './../header/DarkMode';
import GridBtn from './../header/GridBtn';
import BellBtn from './../header/BellBtn';
import FullSceenBtn from './../header/FullSceenBtn';
import Profile from './../header/Profile';
import styles from "../header/Header.scss";
import Header from './../header/Header';
import Home from './../Home';
import Sidebar from './../sidebar/Sidebar';
import SubMenu from './../sidebar/SubMenu';
import DefaultPage from '../main/DefaultPage';
export default function PanelLayout  ({children})  {
  return (
 <>
   <header className={styles.mainHeader}>
     <Header />
   </header>           
   <main>
      <div className='container-fluid'>
         <div className='row'>
            <div className='col-12 col-md-6 col-lg-3'>
               <Sidebar />
               <SubMenu />
            </div>
            <div className='col-12 col-md-6 col-lg-9'>            
               {children}            
            </div>
         </div>
      </div>               
    </main>           
 </>   
 );
}