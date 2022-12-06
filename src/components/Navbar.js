import React from 'react'

const Navbar = () => {
  return (
    <div className='navBar-container'>
        <div className="logo-container">
            <img src={require ('../assets/shecluded-logo.png')} />
        </div>
        <div className="nav-list">
            <ul>
                <li className="nav-list-items">About Us</li>
                <li className="nav-list-items">Learn</li>
                <li className="nav-list-items">Loan</li>
                <li className="nav-list-items">Insights</li>
                <li className="nav-list-items">Community</li>
            </ul>
        </div>
        <div className="sign-in-div">
            <button className="sign-in-btn">Sign In</button>
        </div>
    </div>
  )
}

export default Navbar