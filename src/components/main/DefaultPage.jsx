import React from 'react';
import styles from './DefaultPage.scss';
import Cards from './Cards';
import RecentOrders from './RecentOrders';
import Sales from './Sales';
import ProductCategories from './ProductCategories';
const DefaultPage = () => {
    return (
        <>
            <div className='defaultPage'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1 className='d-inline-block'>Default</h1>
                            <nav className='d-inline-block mx-3'>
                                <ul className='breadcrumb'>
                                    <li className='breadcrumb-item'><a href="#">Home</a></li>
                                    <li className='breadcrumb-item'><a href="#">Dashboards</a></li>
                                    <li className='breadcrumb-item active'>Default</li>
                                </ul>
                            </nav>
                            <div className='separator'></div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-12 col-lg-6'>
                            <Cards />
                            <Sales />
                        </div>
                        <div className='col-12 col-md-12 col-lg-6'>
                            <RecentOrders />    
                            <RecentOrders />                                                
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-6 col-lg-4'>
                            <ProductCategories />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DefaultPage;