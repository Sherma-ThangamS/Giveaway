import React from 'react'
import './shapeTop.scss'
const ShapeTop = () => {
    return (
        <div className='ShapeTop'>
            <div className="shapeTopLayer">
            </div><div className="bgShapeLayerCol">
                <div className="container">
                    <div className="mdContainer2">
                        <div className="topCenterTitleCol titleWdLg mdPText">
                            <h2 className="xlTitle pb-xl-3 darkColor">Launch Your Giveaway in 3 Simple Steps</h2>
                            <p>Start professional giveaways within minutes using our user-friendly dashboard.</p>
                        </div>
                        <div className="manageCardsCol">
                            <div className="row gy-4">
                                <div className="col-md-4">
                                    <div className="manageCard">
                                        <div className="mcIconCol">
                                            <img loading="lazy" src="https://giveawayhopper.com/assets/images/choose-prize-icon.svg" alt="Illustration of a gift filled with hearts." />
                                        </div><div className="mcContentCol">
                                            <div className="row g-2 justify-content-center justify-content-md-start align-items-center mcTitleCol"><div className="col-auto"><div className="stepNumberImg">
                                                <img loading="lazy" src="https://giveawayhopper.com/assets/images/step-number-1.svg" alt="Step 1" /></div></div><div className="col-auto">Choose Your Prize</div>
                                            </div><p>Choose a prize that fits your business and connects with your audience.</p></div></div></div><div className="col-md-4"><div className="manageCard">
                                                <div className="mcIconCol"><img loading="lazy" src="https://giveawayhopper.com/assets/images/setup-giveaway-icon.svg" alt="Illustration of a computer with Giveawayhopper screens" />
                                                </div>
                                                <div className="mcContentCol">
                                                    <div className="row g-2 justify-content-center justify-content-md-start align-items-center mcTitleCol"><div className="col-auto">
                                                        <div className="stepNumberImg"><img loading="lazy" src="https://giveawayhopper.com/assets/images/step-number-2.svg" alt="Step 2" />
                                                        </div>
                                                    </div>
                                                        <div className="col-auto">Set Up Your Giveaway</div></div><p>Set up your giveaway in our dashboard and decide how people can enter.</p>
                                                    <a className="ga4-get-started-button" href="/pricing" style={{textDecoration:"none",color:"inherit"}}>
                                                        <span >Get Started for Free</span>
                                                        <span className="linkIcon"><img loading="lazy" src="https://giveawayhopper.com/assets/images/arrow-right-dark.svg" alt="" />
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                </div>
                                <div className="col-md-4"><div className="manageCard">
                                    <div className="mcIconCol"><img loading="lazy" src="https://giveawayhopper.com/assets/images/launch-icon.svg" alt="Illustration of rocket at airborne launch." />
                                    </div><div className="mcContentCol"><div className="row g-2 justify-content-center justify-content-md-start align-items-center mcTitleCol">
                                        <div className="col-auto">
                                            <div className="stepNumberImg">
                                                <img loading="lazy" src="https://giveawayhopper.com/assets/images/step-number-3.svg" alt="Step 3" />
                                            </div>
                                        </div>
                                        <div className="col-auto">Launch and Grow</div></div><p>Share your giveaway with the world. Watch your success grow!</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shapeBtmLayer">
            </div>
        </div>
    )
}

export default ShapeTop