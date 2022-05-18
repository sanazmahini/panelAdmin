import React from 'react';
import '../../assets/lib/bootstrap/dist/css/bootstrap.min.css';
import './Search.scss';

const Search = () => {  
    const ToggleSearch = () => {
        const ToggleSearch = document.querySelector('.searchMobile');
        ToggleSearch.classList.toggle('searchView');
    }
    return (
        <>
            <div className='d-flex align-items-center'>  
            {/* Start Search Box*/}
            <div className='searchBox mx-2 d-none d-md-inline-block'>
            <div className='form-group'>
                <form action="">
                    <label htmlFor="search" className='sr-only sr-only-focusable d-none'>Search</label>
                    <input className='form-control' autoComplete='off' placeholder='Search' inputMode='search'/>
                    <button className='searchIcon' type="submit" aria-label="search">
                     <svg focusable="false" fill="#d7d7d7" pointer-event="none" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"><path d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z"></path></svg>
                     </button>
                </form>
            </div>         
            </div>
            {/* End Search Box*/}
            
            {/* Start Search Mobile */}
            <div className='searchMobile d-block d-md-none mt-1'>
            <input  placeholder="Search" type="text" className="form-control border-0" value="" />                              
                    <button className='searchIcon border-0 bg-transparent' onClick={ToggleSearch} type="submit" aria-label="search">
                     <svg focusable="false" fill="#d7d7d7" pointer-event="none" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"><path d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z"></path></svg>
                    </button>                      
            </div>
            {/* End Search Mobile */}

           {/* Start Btn Buy */}
            <div className='btnBuy d-none d-lg-flex'>
                <button className='btn btn-outline'>
                    BUY
                </button>
            </div>
            {/* End Btn Buy */}
            </div>
        </>
    );
};

export default Search;