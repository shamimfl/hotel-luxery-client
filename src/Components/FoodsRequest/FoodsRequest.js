import React, { useEffect, useState } from 'react';

const FoodsRequest = () => {

    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('https://hotel67767-shamimfl.vercel.app/order_foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    return (
        <div>
            <h1 className='text-xl text-center'>Food Request : {foods.length}</h1>
            <section>
                {
                    foods.map(food => (
                        <div className='md:flex justify-between items-start gap-5 mt-5 bg-black p-3 rounded'>
                            <img className='md:w-40' src={food.foodImg} alt="" />
                            <div className='mt-3'>
                                <p>{food.foodName}</p>
                                <p>{food.foodPrice}</p>
                                <p>{food.RoomCode}</p>
                                <p>{food.email}</p>
                                <button className='btn btn-primary md:hidden card-shadow mt-4'>
                                    Delivered
                                </button>
                            </div>
                            <button className='btn btn-primary md:block hidden card-shadow'>
                                Delivered
                            </button>
                        </div>
                    ))
                }
            </section>
        </div>
    );
};

export default FoodsRequest;