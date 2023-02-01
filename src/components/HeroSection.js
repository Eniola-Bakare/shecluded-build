import React, {useState, useEffect} from 'react'

import image1 from '../assets/heroImages/hero-image1.png'
import image2 from '../assets/heroImages/hero-image2.png'
import image3 from '../assets/heroImages/hero-image3.png'
import image4 from '../assets/heroImages/hero-image4.png'
import image5 from '../assets/heroImages/hero-image5.png'
import image6 from '../assets/heroImages/hero-image6.png'
import image7 from '../assets/heroImages/hero-image7.png'
import image8 from '../assets/heroImages/hero-image8.png'

const HeroSection = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [allImages, setAllImages] = useState([image1, image2, image3, image3, image4, image5, image6, image7, image8])

  useEffect(() => {
    setInterval(() => {
      setSelectedImage(selectedImage => selectedImage > 7 ? 0 : selectedImage + 1 )
    }, 3000);
  }, [])
  
  
  return (
    <div className="hero-container-partners">
      <div className='hero-container'>
        <div className="hero-text-div">
          {/* Hidden Brand Announcement Segment */}
          {/* <div className='brand-awareness-div'>
            <p>Brand Announcement: We have new loans for you, <span>check them out</span></p>
          </div> */}
          
          <h1>Powering <span>Finance</span> For Female Entrepreneurs</h1>
          <p className='hero-description'>Access Growth loans, learn about money and build your wealth with the shecluded membership</p>
        </div>
        <div className="hero-image-div">
          {/* <img src={require ('../assets/heroImages/hero-image1.png')} /> */}
            <img src={allImages[selectedImage]} />
        </div>
      </div>
      <div className="partners">
        <div className='ourPartners'>
          <p>OUR PARTNERS
          {/* <div className='partners-divider one'></div> */}
          </p> 
          <div className='partners-divider one'></div>
        </div>
        <div className="images-partner">
          {/* previous partners images */}
          {/* <img src={require ('../assets/partners-logo/partners.png')} />
          <img src={require ('../assets/partners-logo/hubspot.png')} />
          <img src={require ('../assets/partners-logo/google4startups.png')} />
          <img src={require ('../assets/partners-logo/microsoft.png')} />
          <img src={require ('../assets/partners-logo/walmart.png')} />
          <img src={require ('../assets/partners-logo/milesstone.png')} /> */}
          <img src={require ('../assets/partners-logo/partners-logo.png')} />
        </div>
        <div className='partners-divider two'></div>
      </div>
    </div>
   
  )
}

export default HeroSection