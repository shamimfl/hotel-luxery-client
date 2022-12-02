import React from 'react';

const Aboutus = () => {
    return (
        <div className='md:flex justify-between items-center md:px-10 p-5 my-20 gap-10'>
            <img className='rounded-md  md:h-96' src="https://cdn3d.iconscout.com/3d/premium/thumb/hotel-6299047-5194137.png" alt="" />
            <div className='md:w-1/2'>
                <h1 className='uppercase font-bold text-3xl mt-5 text-primary'>About Us</h1>
                <p className='text mb-5 text-justify mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, aspernatur.</p>
                <p className='text mb-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, minima! Fuga sunt, similique impedit optio voluptatum aspernatur provident maxime vero, error expedita assumenda blanditiis, id aliquam obcaecati iste cupiditate voluptate nam illum et consectetur praesentium tempore amet ipsum quam? Reiciendis animi quos, delectus eum error quibusdam dignissimos pariatur debitis aut!</p>

                <button className='btn btn-primary card-shadow'>Read more</button>
            </div>
        </div>
    );
};

export default Aboutus;