import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import toast from 'react-hot-toast';

const FoodsGallery = () => {

    const [foods, setFoods] = useState([])
    const [user, loading, error] = useAuthState(auth)
    const { food_ } = useParams()
    console.log(food_)

    const url = `https://hotel67767-shamimfl.vercel.app/foods/${food_}`


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    console.log(foods)

    const handleFoodCart = (e) => {
        e.preventDefault();
        const email = user.email;
        const foodName = e.target.food_name.value;
        const foodImg = e.target.food_img.value;
        const foodPrice = e.target.food_price.value;
        const RoomCode = e.target.room_code.value;
        const FoodData = { email, foodName, foodImg, foodPrice, RoomCode }

        fetch('https://hotel67767-shamimfl.vercel.app/order_foods', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(FoodData)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success('Your order Is processing you will get the food around 30 Minutes')
                }
            })
    }

    return (
        <section>
            <div className='grid lg:grid-cols-4 gap-5 md:p-10 p-5'>
                {
                    foods?.map(food => (
                        <div className=' card-shadow-2'>
                            <img className='h-80 w-full' src={food?.img} alt="" />
                            <p className='p-5'>{food?.name}</p>
                            <span className='flex p-4 gap-3 items-center justify-between'>
                                <p className='text-xl font-bold'>${food.price}</p>
                                <p className=' px-1 flex items-center gap-2 text-orange-500'> <p>4k</p> <ThumbUpIcon className='thumb' /> </p>
                                <label htmlFor={food._id} className="btn card-shadow btn-primary">open modal</label>
                            </span>
                            <input type="checkbox" id={food._id} className="modal-toggle " />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor={food._id} className="btn btn-sm btn-circle absolute right-2 top-2 bg-orange-700">✕</label>
                                    <form onSubmit={handleFoodCart}>
                                        <input name='food_name' type="text" className='w-full input input-bordered mt-5' defaultValue={food?.name} readOnly />
                                        <input name='food_price' type="text" className='w-full input input-bordered mt-5' defaultValue={food.price + '$'} readOnly />
                                        <input name='food_img' type="text" className='w-full input input-bordered mt-5' defaultValue={food.img} readOnly />
                                        <input name='room_code' type="text" className='w-full input input-bordered mt-5' placeholder='Enter your Room Code' required />
                                        <button  className='btn btn-wide btn-primary card-shadow mt-5 block mx-auto'>
                                        <label htmlFor={food._id}>Submit</label>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    );
};

export default FoodsGallery;