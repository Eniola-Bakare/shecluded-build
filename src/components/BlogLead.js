import React from 'react'

const BlogLead = () => {

  return (
    <div className='blog-lead-container'>
        <h1>Tools That Connect Everyside of Your Business</h1>
        <div className="blog-img-wrapper">
            <div className="img-1 img-div">
                <img src={require('../assets/blog-lead-images/image1.png')} />
                <p className="blog-title">Growth Loans</p>
                <p className="blog-text">Get Growth loans for your business and live out your dreams</p>
                <p className='view-more'> View more <img src={require ('../assets/blog-lead-images/viewmore-arrow.png')} /></p>
            </div>
            <div className="img-2 img-div">
                <img src={require('../assets/blog-lead-images/image2.png')} />
                <p className="blog-title">Insurance</p>
                <p className="blog-text">Preserve your growth and get covered by our insurance plans ranging from health, cars, business, life insurance...</p>
                <p className='view-more'> View more <img src={require ('../assets/blog-lead-images/viewmore-arrow.png')} /></p>
            </div>
        </div>
        
    </div>
  )
}

export default BlogLead