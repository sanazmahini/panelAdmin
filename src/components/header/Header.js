import React from 'react';
import styles from "./Header.scss";
import '../../assets/lib/bootstrap/dist/css/bootstrap.min.css';
import ButtonMenu from './ButtonMenu'; 
import Search from './Search';
import MainLogo from './MainLogo';
import DarkMode from './DarkMode';
import GridBtn from './GridBtn';
import BellBtn from './BellBtn';
import FullSceenBtn from './FullSceenBtn';
import Profile from './Profile';
import LanguageBtn from './LanguageBtn';
const Header = () => {
    
// document.addEventListener('DOMContentLoaded', function() {   

window.addEventListener('scroll', () => {
    let mainheader =document.querySelector('.main-header');
let fixed = mainheader.offsetTop;
    if(window.pageYOffset > fixed){
        mainheader.classList.add('fixed');
    }else 
    mainheader.classList.remove('fixed');
    })
// }) 
    return (
        <>           
                {/* Start Main Header */}
                <div className='header'>
                <div className='main-header py-4'>
                <div className='container'>
                    <div className="row">
                        <div className="col-12">
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex justify-content-start'>
                                <div><ButtonMenu /></div>
                                <div><Search /></div>
                                <div><LanguageBtn/></div>
                            </div>                        
                        <div className='flex-shrink-0'><MainLogo/></div>
                            <div className='d-flex align-items-center'>
                             <DarkMode/>
                             <GridBtn/>
                             <BellBtn/>
                             <FullSceenBtn/>
                             <Profile/>
                        </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
                </div>
                 {/* End Main Header */}       
        </>
    );
};
export default Header;