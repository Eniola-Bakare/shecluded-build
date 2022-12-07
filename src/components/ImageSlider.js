import '../App.css'
import images from './Images'
import {motion} from 'framer-motion'
import {useRef, useState, useEffect} from 'react'

const ImageSlider = () => {
  const [width, setWidth] = useState(0)
  const carousel = useRef()

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])


  return (
    < >
      <div className='imageSlider-container'>
          <motion.div ref={carousel} className='carousel' whileTap={{cursor: 'grabbing'}}>
            <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className='inner-carousel'>
              {
                images.map(image => {
                  return(
                    <motion.div className='item' key={image}>
                        <img src={image} alt='images of women'/>
                    </motion.div>
                  )
                })
              }
            </motion.div>
          </motion.div>

          <div className="imageSlider-text">
            <p>Enabling Women To Flourish And Grow On Their Journey From Ambititon To Achievement</p>
            <button className='imageSlider-btn'>JOIN OUR COMMUNITY</button>
          </div>
      </div>
    

      {/* building for women - testimonial div */}
      <div className="building-for-women">
        <div className='build-image-div'>
          <img src={require ('../assets/forWomen.png')} alt="" />
        </div>
        <div className="women-text">
          <div className='women-text-wrapper'>
            <p className='women-title'>Building <span>For Women</span></p>
            <p className='women-desc'>"As my business grew, I knew I had to invest in a better laptop. I didn't have the chunck of money to purchase what I needed; a MacBook, so I reached out to shecluded, and they offered me a good loan and a good payment plan to get what I needed to optimize my process. The loan process and disbursement were fast and seamless."</p>
            {/* swipe controls */}
            <div className="swipe-testimonial">
              <div className="left-swipe swiper">
                <img src={require ('../assets/rightArrow.png')} />
              </div>
              <div className="right-swipe swiper">
                <img src={require ('../assets/leftArrow.png')} />
              </div>
            </div>
            <p className='swipe-name'>- Excellence</p>
          </div>
        </div>
      </div>

      {/* Call to download */}
      <div className="download-section">
        <div className="download-text">
          <p className='download-title'>START BUILDING TODAY</p>
          <p className='download-desc'>Download the Shecluded app</p>
        </div>
        <div className="download-images">
          <img src={require ('../assets/googlePlay.png')} alt="Google Download Icon" />
           <img src={require ('../assets/appleStore.png')} alt="Applestore Icon" />
        </div>
      </div>
    </>
  )
}

export default ImageSlider