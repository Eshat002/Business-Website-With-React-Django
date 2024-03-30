import React from 'react'
import './Process.css'
import OrLine from '../../Img/orline.png'

const Process = () => {
    return (
        <div className='process mb-3'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 text-center">
                        <h5 className="generic-sub-headline">Process</h5>
                        <h2 className="generic-headline process-headline">How It Works</h2>
                        <div className="process-steps">
                            <div className="single-process-step">
                                <div className="svg-container">
                                    <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="34.5" cy="34.5" r="34.5" fill="#F1F5FF" />
                                        <path d="M22 41.1399V45.0952H32.8319V42.6033H24.5726V41.1399C24.5726 40.296 28.8105 38.3711 32.8319 38.3711C34.1317 38.3843 35.418 38.5557 36.6636 38.8721L38.7217 36.8681C36.8261 36.2484 34.8628 35.9056 32.8319 35.866C29.2167 35.866 22 37.6196 22 41.1399ZM32.8319 24C29.8396 24 27.4159 26.36 27.4159 29.2738C27.4159 32.1876 29.8396 34.5476 32.8319 34.5476C35.8242 34.5476 38.2478 32.1876 38.2478 29.2738C38.2478 26.36 35.8242 24 32.8319 24ZM32.8319 31.9107C31.3425 31.9107 30.1239 30.7373 30.1239 29.2738C30.1239 27.8103 31.3425 26.6369 32.8319 26.6369C34.3212 26.6369 35.5398 27.8235 35.5398 29.2738C35.5398 30.7241 34.3348 31.9107 32.8319 31.9107ZM48.6735 36.3275L47.3195 37.646L44.5438 35.0091L45.8978 33.6906C46.1821 33.4137 46.656 33.4137 46.9404 33.6906L48.6735 35.3782C48.9578 35.6551 48.9578 36.1166 48.6735 36.3934M35.5398 43.6976L43.745 35.7078L46.5206 38.3447L38.3967 46.3477H35.5398V43.6976Z" fill="#4074F8" />
                                    </svg>
                                </div>
                                <h5 className="single-process-step-title">Enquiry</h5>
                                <p className="single-process-step-text">
                                    Our Customers/Clients give us a call or they send us a enquiry.
                                </p>

                            </div>
                            <div className="single-process-step">
                                <div className="svg-container">
                                    <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="34.5" cy="34.5" r="34.5" fill="#F1F5FF" />
                                        <path d="M36.9938 33.745H43V31.5878H38.5446L36.0831 27.5969C35.7138 26.9976 35.0492 26.5901 34.2862 26.5901C34.0646 26.5901 33.8677 26.6261 33.6708 26.686L27 28.7114V34.9435H29.2154V30.5451L31.8123 29.7541L27 48.1267H29.2154L32.7477 38.4071L35.6154 42.1343V48.1267H37.8308V40.4445L34.7662 35.0034L35.6646 31.5638M36.8462 26.3145C38.0769 26.3145 39.0615 25.3557 39.0615 24.1572C39.0615 22.9588 38.0769 22 36.8462 22C35.6154 22 34.6308 22.9588 34.6308 24.1572C34.6308 25.3557 35.6154 26.3145 36.8462 26.3145Z" fill="#4074F8" />
                                    </svg>
                                </div>
                                <h5 className="single-process-step-title">Visit</h5>
                                <p className="single-process-step-text">
                                    We visit to our Customer/client location and we finalize the deal on the spot.
                                </p>

                            </div>

                            <div className="single-process-step">
                                <div className="svg-container">
                                    <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="34.5" cy="34.5" r="34.5" fill="#F1F5FF" />
                                        <path d="M43.2159 42.4516C44.3006 42.4516 45.1761 41.599 45.1761 40.5428C45.1761 39.4866 44.3006 38.634 43.2159 38.634C42.1313 38.634 41.2557 39.4866 41.2557 40.5428C41.2557 41.599 42.1313 42.4516 43.2159 42.4516ZM45.1761 30.9989H41.9091V34.1802H47.7375L45.1761 30.9989ZM27.5341 42.4516C28.6188 42.4516 29.4943 41.599 29.4943 40.5428C29.4943 39.4866 28.6188 38.634 27.5341 38.634C26.4494 38.634 25.5739 39.4866 25.5739 40.5428C25.5739 41.599 26.4494 42.4516 27.5341 42.4516ZM45.8295 29.0901L49.75 34.1802V40.5428H47.1364C47.1364 42.6552 45.3852 44.3604 43.2159 44.3604C41.0466 44.3604 39.2955 42.6552 39.2955 40.5428H31.4545C31.4545 42.6552 29.7034 44.3604 27.5341 44.3604C25.3648 44.3604 23.6136 42.6552 23.6136 40.5428H21V26.545C21 25.1325 22.1631 24 23.6136 24H41.9091V29.0901H45.8295ZM23.6136 26.545V37.9978H24.6068C25.3256 37.2215 26.371 36.7252 27.5341 36.7252C28.6972 36.7252 29.7426 37.2215 30.4614 37.9978H39.2955V26.545H23.6136ZM26.2273 32.2714L28.1875 30.3626L30.1477 32.2714L34.7216 27.8176L36.6818 29.7264L30.1477 36.089L26.2273 32.2714Z" fill="#407BFF" />
                                    </svg>

                                </div>
                                <h5 className="single-process-step-title">Pay & Pickup</h5>
                                <p className="single-process-step-text">
                                    Once the deal is done we will pay the amount and pickup the scrap.
                                </p>

                            </div>
                        </div>

                        <div className="process-btn-container">
                            <div><button className="custom-primary-btn about-us-btn">About us</button></div>
                            <div className='px-4 d-flex mt-2 or-div-line-container'>
                                <div className='or-line-container'><img src={OrLine} alt="or-line" /></div>
                                <div className='or-div'>or</div>
                                <div className='or-line-container'><img src={OrLine} alt="or-line" /></div>
                            </div>
                            <div><button className="custom-primary-btn enquiry-btn">Enquiry</button></div>

                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </div>
    )
}

export default Process
