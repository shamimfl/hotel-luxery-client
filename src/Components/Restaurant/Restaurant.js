import React from 'react';
import { Link } from 'react-router-dom';

const Restaurant = () => {


    const foods = [
        { name: 'Grill', img: 'https://static.onecms.io/wp-content/uploads/2022/06/22/1244x830_14597_ETG_25kFall_Grill_Sweepstakes_2022.jpg', id: 1 },
        { name: 'Sea Fishes', img: 'https://images.squarespace-cdn.com/content/v1/52d3fafee4b03c7eaedee15f/1505699195515-PQJ8XZV54C3FNANC17I8/fish+lemongrass-3.jpg?format=1000w', id: 2 },
        { name: 'Fast Foods', img: 'https://ehonline.eu/wp-content/uploads/2020/06/fast-food-bio-tortilla.jpg', id: 3 },
        { name: 'Juice or Drink', img: 'https://cdn.loveandlemons.com/wp-content/uploads/2021/06/watermelon-juice.jpg', id: 4 },
    ]

    return (
        <div className='p-5'>
            <h1 className='text-3xl text-center font-bold'>Our Restaurant</h1>
            <section className='grid md:grid-cols-2 gap-10'>
                {
                    foods.map(food => (
                        <div key={food.id} className="card card-side bg-base-100 card-shadow mt-5">
                            <figure><img className='h-60' src={food.img} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{food.name}</h2>
                                <p className=' text-3xl font-bold text-warning cursor-pointer'>...</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/foodGallery/${food.name}`} className="btn btn-primary card-shadow">See foods</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </section>
        </div>
    );
};

export default Restaurant;