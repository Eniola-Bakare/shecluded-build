import '../App.css'
import images from './Images'
import {motion} from 'framer-motion'
import {useRef, useState, useEffect} from 'react'

const ImageSlider = () => {
  console.log(images)
  return (
    <>
      <div>
          <motion.div className='carousel'>
            <motion.div className='inner-carousel'>
              {
                images.map(image => {
                  return(
                    <motion.div className='item'>
                        <img src={image} alt='images of women'/>
                    </motion.div>
                  )
                })
              }
            </motion.div>
          </motion.div>
      </div>
      <div className="imageSlider-text">
        <p>Enabling Women To Flourish And Grow On Their Journey From Ambititon To Achievement</p>
        <button>JOIN OUR COMMUNITY</button>
      </div>

      {/* building for women - testimonial div */}
      <div className="building-for-women">
        <div>
          <img src={require ('../assets/forWomen.png')} alt="" />
        </div>
        <div className="4-women-text">
          <p>Building <span>For Women</span></p>
          <p>"As my business grew, I knew I had to invest in a better laptop. I didn't have the chunck of money to purchase what I needed; a MacBook, so I reached out to shecluded, and they offered me a good loan and a good payment plan to get what I needed to optimize my process. The loan process and disbursement were fast and seamless."</p>
          {/* swipe controls */}
          <div className="swipe-testimonial">
            <div className="left-swipe">
              <img src={require ('../assets/leftArrow.png')} />
            </div>
            <div className="right-swipe">
            <img src={require ('../assets/rightArrow.png')} />
            </div>
          </div>
          <p><strong>- Excellence</strong></p>
        </div>
      </div>

      {/* Call to download */}
      <div className="download-section">
        <div className="download-text">
          <p>START BUILDING TODAY</p>
          <p>Download the Shecluded app</p>
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