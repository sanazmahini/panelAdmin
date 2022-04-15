import React from 'react';
import './LanguageBtn.scss';
const LanguageBtn = () => {
    const ToggleLanguageMenu = () => {
        const toggleLanguageMenu = document.querySelector('.languageMenu');
        toggleLanguageMenu.classList.toggle('active');
    }
    return (
        <div>
            {/* Start Change Language */}
              <div className='changeLanguage mx-2'>
                <button className='btn btn-language' onClick={ToggleLanguageMenu}>
                    EN
                </button>
                <div className='languageMenu'>
                    <div className='menuItems d-flex flex-column py-2'>
                       <a href="#" className='py-2 mx-2'><span>English-LTR</span></a>
                       <a href="#" className='py-2 mx-2'><span>Sponol</span></a>
                       <a href="#" className='py-2 mx-2'><span>English-RTL</span></a>                      
                    </div>
                </div>
            </div>
            {/* End Change Language */}
        </div>
    );
};

export default LanguageBtn;