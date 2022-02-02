import React from 'react';
import Container from '../Container/Container';
import Header from '../Components/Home/Header';
import Intro from './../Components/Home/Intro';
import Courses from './../Components/Home/Courses';
import Footer from '../Components/Home/Footer';

const Home = () => {
    return (
        <Container>
            <Header />
            <Intro />
            <Courses />
            <Footer />
        </Container>
    );
};

export default Home;
