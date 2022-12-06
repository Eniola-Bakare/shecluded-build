import React from 'react'

const BlogLead = () => {
    const blogContent = [
        {
            'image': require('../assets/blog-lead-images/image1.png'),
            'title': 'Growth Loans',
            'text' : 'Get Growth loans for your business and live out your dreams',
        },
        {
            'image': require('../assets/blog-lead-images/image2.png'),
            'title': 'Insurance',
            'text': 'Preserve your growth and get covered by our insurance plans ranging from health, cars, business, life insurance...',
        },
    ]

  return (
    <div>
        <h1>Tools That Connect Everyside of Your Business</h1>
        <div className="blog-img">
            <div className="img-1">
                <img src={require('../assets/blog-lead-images/image1.png')} />
                <p className="blog-title">Growth Loans</p>
                <p className="blog-text">Get Growth loans for your business and live out your dreams</p>
                <p> View more <img src={require ('../assets/blog-lead-images/viewmore-arrow.png')} /></p>
            </div>
            <div className="img-2">
                <img src={require('../assets/blog-lead-images/image2.png')} />
                <p className="blog-title">Insurance</p>
                <p className="blog-text">Preserve your growth and get covered by our insurance plans ranging from health, cars, business, life insurance...</p>
                <p> View more <img src={require ('../assets/blog-lead-images/viewmore-arrow.png')} /></p>
            </div>
        </div>
        
    </div>
  )
}

export default BlogLead