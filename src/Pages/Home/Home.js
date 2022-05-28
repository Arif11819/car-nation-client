import React from 'react';
import Banner from '../Banner/Banner';
import BestServices from '../BestServices/BestServices';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import ContactUs from '../ContactUs';
import Parts from '../Parts/Parts';
import Footer from '../Shared/Footer';
import CustomerReviews from './CustomerReviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BestServices></BestServices>
            <BusinessSummary></BusinessSummary>
            <CustomerReviews></CustomerReviews>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;