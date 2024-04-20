import React from 'react'
import HeadlineCompo from './HeadlineCompo/HeadlineCompo'
import "./AboutPage.css"

const AboutPage = () => {
    return (
        <div className='about-page'>
            <HeadlineCompo subTitle="a short story" title="About Us" />
            <div className="container-fluid about-us-text-container">
                <div className="row">
                    <div className="col-lg"></div>
                    <div className="col-lg-10  text-center">
                        <p className='about-us-text'>AK Enterprises is an established family run business in the heart of Mumbai City dealing in all types of scrap metals. We have strong commercial traders in India enabling us to pay the best price possible. This means that we pay higher than our competitors 99% of the time. We pay top prices for all metals including Aluminium Scarp, Battery Scrap, Brass Scrap, Computer Scrap, Conveyor Belt, Copper Scrap, Demolishing Work, DG Set, Electrical Scrap, Eva Rubber, Ferrous And Nonferrous, GI Scrap, Glass Scrap, Iron Pipes Scrap, Steel Pipes Scrap, Iron Scrap, Lead Scrap, Motor Parts Scrap, Nickel Scrap, Office Furnitures, Old Air Condition, Old Machinery, Old Vehicles, Pet Bottle, Plastic Scrap, PVB Rubber, Solar Scrap, Stainless Steel, TMT Steel Scrap, Wooden Scrap and many more.</p>
                        <p className='about-us-text mt-5'> We have an experience of 20 years in this business. We also undertake Bank scrap, Shifting and demolition work. We buy all grades of scrap from a variety of sources from local plumbers to demolition sites and other metal merchants. We can offer collection services by either skips or roll-on-off bins. We pay top prices in Mumbai India for all scrap metal. Our expertise is that we work in favour of client satisfaction.</p>
                    </div>
                    <div className="col-lg"></div>

                </div>
            </div>
        </div>
    )
}

export default AboutPage
