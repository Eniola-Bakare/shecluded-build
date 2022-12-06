import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="div-1-footer">
				<div className="first-">
					<img src={require ('../assets/footer/logo-white.png')} />
					<p>Subscribe to our newsletter</p>
					<div>
						<input type="text" placeholder='Email address'/>
						<button> <img src={require ('../assets/footer/submitArrow.png')} /></button>
					</div>
				</div>
				<div className="second-">
					<ul>
						<li className="footer-links">Who We Are</li>
						<li className="footer-links">About Us</li>
						<li className="footer-links">What We do</li>
						<li className="footer-links">Who we serve</li>
						<li className="footer-links">Our People</li>
						<li className="footer-links">Our Services</li>
					</ul>
					<ul>
						<li className="footer-links">Support</li>
						<li className="footer-links">Help Center</li>
						<li className="footer-links">FAQs</li>
						<li className="footer-links">Community</li>
						<li className="footer-links">Contact Us</li>
						<li className="footer-links">Careers</li>
					</ul>
					<ul>
						<li className="footer-links">Legal</li>
						<li className="footer-links">Cookies Policy</li>
						<li className="footer-links">Privacy Policy</li>
						<li className="footer-links">Terms of Service</li>
					</ul>
				</div>
				<div className="third-">
					<div className="socials">
						<p>Connect with us</p>
						<button><img src={require ('../assets/footer/IG.png')} /> </button>
						<button><img src={require ('../assets/footer/twitter.png')} /> </button>
						<button><img src={require ('../assets/footer/facebook.png')} /> </button>
						<button><img src={require ('../assets/footer/linkedIn.png')} /> </button>
					</div>

					<div className="install-div">
						<p> Install App </p>
						<div className="install-apps">
							<img src={require ('../assets/footer/googlePlay.png')} alt="Google Play download button" />
							<img src={require ('../assets/footer/appStore.png')} alt="Apple Store download button" />
						</div>
					</div>
				</div>
			</div>
			<div className="div-2-footer">
				<div className="text-footer">
					<p> This site uses cookies. <span>Cookies and Privacy.</span> I agree to the <span>terms of use, </span> and the <span>Disclaimer Policy.</span> This information will not be used for marketing purposes.</p>
					<p>Copyright 2021 Shecluded Solutions Ltd.</p>
				</div>
			</div>
    </>
  )
}

export default Footer