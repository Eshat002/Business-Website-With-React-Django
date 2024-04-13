import React from 'react'
import './HomePage.css'
import Hero from './Hero/Hero'
import Sponsor from './Sponsor/Sponsor'
import Info from './Info/Info'
import Banner from './Banner/Banner'
import Process from './Process/Process'
import Works from './Works/Works'
import Review from './Review/Review'
import Interest from './Interest/Interest'



const HomePage = () => {

    return (
        <div className='home'>
            <Hero />
            <Sponsor />
            <Info />
            <Banner />
            <Process />
            <Works />
            <Review />
            <Interest />

        </div>

    )
}

export default HomePage
