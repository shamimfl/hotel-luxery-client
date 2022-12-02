import React from 'react';
// import { Typewriter } from 'react-simple-typewriter'

const Subscribe = () => {


    
    //   const handleDone = () => {
    //     console.log(`Done after 5 loops!`)
    //   }
    //   const handleType = () => {
    //     console.log(`Done after 5 loops!`)
    //   }


    return (
        <section className='p-5'>

            {/* <span className='text-4xl font-bold text-red-500'>
                <Typewriter
                    words={['I am a front end developer', 'I am a front end developer', 'I am a front end developer', 'I am a front end developer']}
                    loop={100}
                    cursor
                    cursorStyle='।'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    onLoopDone={handleDone}
                    onType={handleType}
                />
            </span> */}

            <div className=' p-10 my-20 text-center card-shadow '>
                <h1 className='text-3xl font-bold text-center text-white uppercase'>Subscribe</h1>
                <div className='h-1 w-44 rounded bg-nav mx-auto my-3'></div>
                <p className='text-center font-medium mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, fugit.</p>
                <input type="email" placeholder='Enter your email' className='input input-bordered mt-10 mb-10  card-shadow hover:bg-dark' />
                <button className='btn btn-primary card-shadow'>Subscribe</button>

            </div>
        </section>
    );
};

export default Subscribe;