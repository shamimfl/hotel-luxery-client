import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import './Login.css'

const Login = () => {
    return (
        <div className=' h-[90vh] p-5'>
            <div className="max-w-md mx-auto  card-shadow bg-base-100 p-5">
            <div className='flex justify-center items-center gap-5'>
                   <h1 className='label-text-alt link link-hover'>i am new to LuxStay?</h1>
                    <Link to='/sing_up' className='px-5 border-2 rounded-3xl font-bold card-shadow py-1 '>Sign Up</Link>
                    
                </div>
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input required type="password" placeholder="***********" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary card-shadow">Login</button>
                    </div>
                </div>
                <GoogleLogin></GoogleLogin>
            </div>
        </div>
    );
};

export default Login;