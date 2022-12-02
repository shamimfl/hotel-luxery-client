import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import {useCreateUserWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth'
import toast from 'react-hot-toast';
import Loading from '../Loading/Loading';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const SingUp = () => {


    const [createUserWithEmailAndPassword , user, loading, error] = useCreateUserWithEmailAndPassword(auth)
    const navigate = useNavigate();


    const CreateUser =(e)=>{
        e.preventDefault()
        
        const email= e.target.email.value;
        const password = e.target.password.value;
        const password2 = e.target.reCheck.value;
        if(password == password2){
            createUserWithEmailAndPassword(email, password)
            console.log(email, password, password2)
        }
        else{
            toast.error('Password not mach')
            console.log('error not mach')
        }
    }

    if(loading){
        return <Loading></Loading>
    }

    if(error){
        toast.error(error.message)
    }

    if(user){
        navigate('/update')
    }

    return (
        <div className=' p-5'>
            <div className="max-w-md mx-auto  card-shadow bg-base-100 p-5">
                <div className='flex justify-center items-center gap-5'>
                   <h1 className='label-text-alt link link-hover'>Already i have an account ?</h1>
                    <Link to='/login' className='px-5 border-2 rounded-3xl font-bold card-shadow py-1'>Login</Link>
                </div>
                <form onSubmit={CreateUser} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name='email' required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="*********" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password </span>
                        </label>
                        <input required type="password" name='reCheck' placeholder="***********" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary card-shadow">Sing Up</button>
                    </div>
                </form>
               <GoogleLogin></GoogleLogin>
            </div>
        </div>
    );
};

export default SingUp;