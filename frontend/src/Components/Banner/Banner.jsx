import React from 'react'
import './Banner.css'


const Banner = () => {
    return (
        <div className='banner'>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-lg-6 left-col text-end">
                        <div className="svg-container">
                            <svg width="67" height="68" viewBox="0 0 67 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 33.625C2 16.159 16.2412 2 33.8085 2C37.0463 2 40.1712 2.48098 43.1147 3.375" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M26.9628 40.4309C30.7434 44.1897 36.873 44.1897 40.6536 40.4309C44.4342 36.6721 60.0846 10.2501 58.7016 8.87506C57.3186 7.50007 30.7434 23.0603 26.9628 26.8191C23.1822 30.5779 23.1822 36.6721 26.9628 40.4309ZM33.808 36.3751C35.3356 36.3751 36.5739 35.1438 36.5739 33.6251C36.5739 32.1063 35.3356 30.8751 33.808 30.8751C32.2804 30.8751 31.042 32.1063 31.042 33.6251C31.042 35.1438 32.2804 36.3751 33.808 36.3751Z" fill="white" />
                                <ellipse cx="6.14889" cy="50.125" rx="2.76596" ry="2.75" fill="white" />
                                <ellipse cx="17.2127" cy="61.125" rx="2.76596" ry="2.75" fill="white" />
                                <ellipse cx="33.8086" cy="65.25" rx="2.76596" ry="2.75" fill="white" />
                                <ellipse cx="50.4043" cy="61.125" rx="2.76596" ry="2.75" fill="white" />
                                <ellipse cx="60.085" cy="50.125" rx="2.76596" ry="2.75" fill="white" />
                                <ellipse cx="64.2341" cy="33.625" rx="2.76596" ry="2.75" fill="white" />
                            </svg>
                        </div>
                        <h2 className="banner-headline">100%</h2>
                        <p className="banner-text">Satisfactory work followed by rules and regulations</p>

                    </div>
                    <div className="col-lg-6 right-col">
                        <div className="svg-container">
                            <svg width="75" height="66" viewBox="0 0 75 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="28.6251" cy="17.5" rx="15.6369" ry="15.5" stroke="#5E80FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M55.2501 64.0001C55.2501 49.6556 43.3296 38.0271 28.625 38.0271C13.9204 38.0271 2 49.6556 2 64.0001" stroke="#5E80FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                <ellipse cx="62.0118" cy="20.223" rx="6.45334" ry="6.49324" stroke="#5E80FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M72.9999 39.7028C72.9999 33.6937 68.0804 28.8223 62.0118 28.8223C55.9432 28.8223 51.0237 33.6937 51.0237 39.7028" stroke="#5E80FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </div>
                        <h2 className="banner-headline">10000+</h2>
                        <p className="banner-text">Total clients we have provided our services</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
