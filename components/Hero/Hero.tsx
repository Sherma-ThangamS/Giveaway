import React from 'react'
import './hero.scss'
const Hero = () => {
  return (
    <div className='Hero'>
      <div className='container'>
        <div className='Banner'>
          <div className='content'>
            <div className='content-text'>
              <h1 className="heroHeaderText">
                <span>The </span>
                <span className="primaryWord">Easiest </span>
                <span>Way </span><br /><span>to Grow With </span>
                <span className="primaryWord">Giveaways</span>
                <span>.</span>
              </h1>
              <p className="d-none d-lg-block">
                Set up giveaways in just 2 minutes! Grow followers, likes, website traffic, email subscribers, and more! Customize entry options and enjoy fraud protection, random winner selection, and automatic prize delivery.
              </p>
              <div>
                <div className="hBannerBtnCol"><a className="btn btnPrimary iconBtn btnLg ga4-get-started-button" href="/pricing">
                  <span>Get Started for Free</span>
                </a></div>
                <div className="noCreditCardRequired">No credit card required</div>
              </div>
              <div className="gtCol">
                <span className="inline-block">
                  <img src="https://giveawayhopper.com/assets/images/give-it-try-arrow.svg" alt="Give it a try" />
                </span>
              </div>
            </div>
            <div className='content-image'>
              <img src="https://giveawayhopper.com/assets/images/banner-img.webp" alt="Instagram giveaway for headphones using Giveawayhopper" />
            </div>
          </div>
          <div className='target ta1'>
            <div className="taImgCol">
              <a href="/en/industries/marketing">
                <img src="https://giveawayhopper.com/assets/images/targetAudience-img-1.webp" alt="Marketer" /></a></div>
                <div className="tAudienceLinkCol"><a href="/en/industries/marketing">Marketer</a></div>
          </div>
          <div className='target ta2'>
            <div className="taImgCol"><a href="/en/industries/retail"><img src="https://giveawayhopper.com/assets/images/targetAudience-img-2.webp" alt="Shopkeeper" /></a></div>
            <div className="tAudienceLinkCol"><a href="/en/industries/retail">Shopkeeper</a></div>
          </div>
          <div className='target ta3'>
            <div className="taImgCol"><a href="/en/industries/content-creation"><img src="https://giveawayhopper.com/assets/images/targetAudience-img-3.webp" alt="Content creator" /></a></div>
            <div className="tAudienceLinkCol"><a href="/en/industries/content-creation">Content Creator</a></div>
          </div>
          <div className='target ta4'>
            <div className="taImgCol"><a href="/en/industries/hospitality"><img src="https://giveawayhopper.com/assets/images/targetAudience-img-4.webp" alt="Restaurateur" /></a></div>
            <div className="tAudienceLinkCol"><a href="/en/industries/hospitality">Restaurateur</a></div>
          </div>
          <div className='target ta5'>
            <div className="taImgCol"><a href="/en/industries/e-commerce"><img src="https://giveawayhopper.com/assets/images/targetAudience-img-5.webp" alt="Online retailer" /></a></div>
            <div className="tAudienceLinkCol"><a href="/en/industries/e-commerce">Online Retailer</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero