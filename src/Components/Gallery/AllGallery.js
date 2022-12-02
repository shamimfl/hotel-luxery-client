import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const AllGallery = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        fetch('https://hotel67767-shamimfl.vercel.app/all_gallery')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    return (
        <div className='my-5 p-5'>
            {/* <h1 className='font-bold text-3xl text-center uppercase text'>Our Gallery</h1>
            <div className='h-1 w-60 bg-primary mx-auto my-3 mb-10'></div> */}
            <div className='flex flex-wrap mx-auto gap-5 justify-center'>
                {
                    data?.map(gallery => (
                        <PhotoProvider>
                            <PhotoView src={gallery.img ? gallery?.img : 'https://www.anglodiamond.com/skin/adminhtml/default/default/ibmbuilder/image/loader_ring.gif'}>
                                <img className='md:h-40 rounded cursor-zoom-in' src={gallery.img ? gallery?.img : 'https://www.anglodiamond.com/skin/adminhtml/default/default/ibmbuilder/image/loader_ring.gif'} alt="" />
                            </PhotoView>
                        </PhotoProvider>
                    ))
                }
            </div>
        </div>
    );
};


export default AllGallery;