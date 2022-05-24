import React from 'react';
import styles from './LoginPage.scss';
const LoginPage = () => {
    return (
        <>
            <div className='LoginPage m-5'>
                <div className='container'>
                    <div className='row justify-content-center'>
                    <div className='col-12 col-lg-6'>
                            <div className='image d-none d-lg-block'></div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className='loginForm mt-5'>
                                <div className='title'>
                                    <h1>login</h1>
                                </div>                              
                                <div className='form-group pt-2'>
                                <label htmlFor="email">email</label>
                                    <input type="email" className='form-control form-control-sm email required' placeholder='demo@gogo.com' />
                                </div>
                                <div className='form-group py-3'>
                                <label htmlFor="password">password</label>
                                    <input type="password" className='form-control form-control-sm password' />
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='forgetPass'>
                                        <a href="#">Forget password?</a>
                                    </div>
                                <div className='sendBtn'>
                                    <button className='send btn btn-primary'>Login</button>
                                </div>
                                </div>
                            </div>
                        </div>                       
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;