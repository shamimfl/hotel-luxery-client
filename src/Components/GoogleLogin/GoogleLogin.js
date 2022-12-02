import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import Loading from '../Loading/Loading';

const GoogleLogin = () => {

    const [singInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    const navigate= useNavigate()

    const googleLogin =()=>{
        singInWithGoogle()
    }

    if(error){
        toast.error(error.message)
    }

    if(loading){
        return <Loading></Loading>
    }

    if(user){
        navigate('/')
    }

    return (
        <div className='p-6'>
            <button onClick={googleLogin} className='flex font-bold uppercase items-center gap-3 mx-auto bg-base-300 w-full rounded'>
                <img className='h-10 w-10' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
                sing in with google
            </button>
        </div>
    );
};

export default GoogleLogin;