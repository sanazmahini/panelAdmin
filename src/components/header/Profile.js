import React from 'react';
import ProfileImg from '../../assets/img/ProfileImg.jpg';
import './Profile.scss';
const Profile = () => {
    const ToggleProfileMenu = () => {
        const ToggleProfileMenu = document.querySelector('.profileMenu');
        ToggleProfileMenu.classList.toggle('active');
    }
    return (
        <div className='flex-shrink-0'>
            {/* Start Profile */}
            <div className='profile flex-shrink-0' onClick={ToggleProfileMenu}>
                <a href="#"><span className='name mx-2 d-none d-lg-inline-block'>Sara Kortney</span></a>
                <a href="#" aria-label='profile'>
                    <img src={ProfileImg} width="40" height="40px" className='img-fluid' decoding='async' loading='eager' alt="profile" />
                </a>
                <div className='profileMenu'>
                    <div className='menuItems d-flex flex-column'>
                       <a href="#" className='py-2 mx-2'><span>Account</span></a>
                       <a href="#" className='py-2 mx-2'><span>Feacures</span></a>
                       <a href="#" className='py-2 mx-2'><span>History</span></a>
                       <a href="#" className='py-2 mx-2'><span>Support</span></a> 
                       <a href="#" className='py-2 mx-2 mt-1'><span>Sign out</span></a> 
                    </div>
                </div>
            </div>
             {/* End Profile */}
        </div>
    );
};

export default Profile;