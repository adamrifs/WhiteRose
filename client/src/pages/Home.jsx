import React from 'react'
import { HeroParallaxDemo } from '../components/HeroParallax'
import Navbar from '../components/Navbar'
import '../css/Home.css'
import { AppleCardsCarouselDemo } from '../components/AppleCardsCarouselDemo'
import ProductPage from '../components/ProductPage'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className='home-container'>
            <Navbar/>
            <HeroParallaxDemo />
            <AppleCardsCarouselDemo/>
            <ProductPage/>
            <Subscribe/>
            <Footer/>
        </div>
    )
}

export default Home