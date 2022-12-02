import React from 'react';
import Aboutus from '../AboutUs/Aboutus';
import AddReview from '../AddReview/AddReview';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import OurBest from '../OurBest/OurBest';
import Review from '../Review/Review';
import Subscribe from '../Subscribe/Subscribe';
import Banner from './Banner/Banner';
import CheckRoom from './CheckRoom/CheckRoom';
import RoomsAndRate from './RoomsAndRate/RoomsAndRate';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CheckRoom></CheckRoom>
            <RoomsAndRate></RoomsAndRate>
            <Aboutus></Aboutus>
            <OurBest></OurBest>
            <Review></Review>
            <Subscribe></Subscribe>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Home;