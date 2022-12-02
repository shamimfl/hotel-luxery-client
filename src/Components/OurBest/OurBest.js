import React from 'react';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import WifiChannelIcon from '@mui/icons-material/WifiChannel';
import RadioIcon from '@mui/icons-material/Radio';
import AlarmIcon from '@mui/icons-material/Alarm';
import CallEndIcon from '@mui/icons-material/CallEnd';

const OurBest = () => {
    return (
        <div className='md:flex justify-between items-center gap-10 md:px-10 p-5 my-20 '>
            <div className='md:w-1/2'>
                <h1 className='uppercase font-bold text-3xl mt-5 text-primary'>Our Best</h1>
                <p className='text mb-5 text-justify mt-2'>One of Catalina Island’s best-loved hotels, Hotel Vista Del Mar is recognized as one of Avalon’s leading hotels with gracious island hospitality, thoughtful amenities and distinctive .</p>
                <div className='mt-5 grid lg:grid-cols-2'>
                    <span className='flex  items-center gap-5 mt-10'>
                        <CoffeeMakerIcon className='  text-primary rounded-sm'></CoffeeMakerIcon>
                        <p className='font-medium'>Coffee Maker</p>
                    </span>
                    <span className='flex  items-center gap-5 mt-10'>
                        <ConnectedTvIcon className='  text-primary rounded-sm'></ConnectedTvIcon>
                        <p className='font-medium'>25 inch or larger TV</p>
                    </span>
                    <span className='flex  items-center gap-5 mt-10'>
                        <WifiChannelIcon className='  text-primary rounded-sm'></WifiChannelIcon>
                        <p className='font-medium'>Cable/satellite TV channels</p>
                    </span>
                    <span className='flex  items-center gap-5 mt-10'>
                        <RadioIcon className='  text-primary rounded-sm'></RadioIcon>
                        <p className='font-medium'>AM/FM clock radio</p>
                    </span>
                    <span className='flex  items-center gap-5 mt-10'>
                        <CallEndIcon className='  text-primary rounded-sm'></CallEndIcon>
                        <p className='font-medium'>Oversized work desk</p>
                    </span>
                    <span className='flex  items-center gap-5 mt-10'>
                        <AlarmIcon className='  text-primary rounded-sm'></AlarmIcon>
                        <p className='font-medium'>24-hour Concierge servic</p>
                    </span>
                </div>

            </div>
            <img className='rounded-md  mt-10' src="https://cdni.iconscout.com/illustration/premium/thumb/buildings-background-3882353-3243144.png" alt="" />
        </div>
    );
};

export default OurBest;