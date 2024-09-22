import React from 'react'

function Hero() {
  return (
    <section className="hero">
        <div className="vertical-nav">
            <span>01</span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="hero-content">
            <h1>The Best Foodie</h1>
            <h1 className="experience">Experience</h1>
            <p>Now in London</p>
        </div>
        <div className="request-info">
            <a href="#">Request Info</a>
        </div>
    </section>
  )
}

export default Hero