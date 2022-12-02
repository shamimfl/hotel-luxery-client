import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../Firebase/Firebase.init';
import Loading from '../Loading/Loading';

const AddReview = () => {

    const [user, loading, error] = useAuthState(auth)


    const handleSubmitAdd=(e)=>{
        e.preventDefault()
        const Descriptions = e.target.Descriptions.value;
        const name =user.displayName;
        const photo = user.photoURL;
        const email = user.email;
        const review = {Descriptions, name, photo, email}
        console.log(e)


        const url =`https://hotel67767-shamimfl.vercel.app/review`

        fetch(url, {
            method: "Post",
            headers:{
                'content-Type' : 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.acknowledged){
                toast.success('Review Added Successfully')
                e.target.reset()
            }
        })
    }


    if(loading){
        return <Loading></Loading>
    }

    return (
        <div className='   p-5'>
            <form onSubmit={handleSubmitAdd} className='w-full md:w-96 card-shadow  mx-auto text-center  bg-base-100  p-5'>
            <input readOnly type="text" placeholder={user?.displayName} className=" input w-full   input-bordered my-2" />
            <input readOnly type="text" placeholder={user?.email} className=" input w-full   input-bordered my-2" />
            <input readOnly type="text" placeholder={user?.photoURL} className=" input w-full   input-bordered my-2" />
            <textarea  type="text" placeholder="Description" name='Descriptions' required className=" input h-24 w-full   input-bordered p-5" />

            <button className='btn btn-primary w-full my-5 mx-auto block card-shadow'>Submit</button>
            </form>
        </div>
    );
};

export default AddReview;