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

export default function PanelLayout  ({children})  {
  return (
 <>
    <header className={styles.mainHeader}>
               <Header />
            </header>
            <div>
            {children}
            </div>
 </>
       
   
 );
}