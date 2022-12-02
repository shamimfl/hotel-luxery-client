import React from 'react';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import Loading from '../Loading/Loading';


const Update = () => {

    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const UpdateUser = (e) => {
        e.preventDefault()
        const image = e.target.img.files[0]
        const name = e.target.name.value
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=298d647236c72afda092d79f3b5caa77`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => Photo(data.data.url))

            const Photo =(img)=>{
                updateProfile({ displayName: name, photoURL: img });
            }

    }

    if(updating){
        return <Loading></Loading>
    }

    return (
        <div>
            <form onSubmit={UpdateUser} className="card-body w-96 mx-auto bg-base-300 mt-10 shadow-lg rounded">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" name='name' required className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Img</span>
                    </label>
                    <input type="file" name='img' required className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary bg-nav hover:bg-sky-800">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Update;