import React from 'react'

const HeroSection = () => {
  return (
    <div className="hero-container-partners">
      <div className='hero-container'>
        <div className="hero-text-div">
          <div className='brand-awareness-div'>
            <p>Brand Announcement: We have new loans for you, <span>check them out</span></p>
          </div>
          
          <h1>Powering <span>Finance</span> For Female Entrepreneurs</h1>
          <p className='hero-description'>Access Growth loans, learn about money and build your wealth with the shecluded membership</p>
        </div>
        <div className="hero-image-div">
          <img src={require ('../assets/hero-image.png')} />
        </div>
      </div>
      <div className="partners">
        <div>
          <p>OUR PARTNERS</p> 
        </div>
        <div className="images-partner">
          <img src={require ('../assets/partners-logo/nft.png')} />
          <img src={require ('../assets/partners-logo/hubspot.png')} />
          <img src={require ('../assets/partners-logo/google4startups.png')} />
          <img src={require ('../assets/partners-logo/microsoft.png')} />
          <img src={require ('../assets/partners-logo/walmart.png')} />
          <img src={require ('../assets/partners-logo/milesstone.png')} />
        </div>
      </div>
    </div>
   
  )
}

export default HeroSection