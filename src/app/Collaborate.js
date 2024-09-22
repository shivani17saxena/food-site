import React from 'react'

function Collaborate() {
  return (
    <section class="collaborate-section">
    <div class="collaborate-content">
        <h2>Collaborate <br /> <span>With Us</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
    </div>
    <img className='filler-bottom-dots' src="https://raw.githubusercontent.com/shivani17saxena/showcase/refs/heads/main/small.png" />
    <div class="collaborate-form-container">
        <form class="collaborate-form">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="Name"/>
            </div>
            <div class="form-group">
                <label for="surname">Surname</label>
                <input type="text" id="surname" placeholder="Surname"/>
            </div>
            <div class="form-group">
                <label for="phone">Phone</label>
                <input type="text" id="phone" placeholder="Phone"/>
            </div>
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" placeholder="Email" />
            </div>
            <div class="form-group">
                <label for="experience">Experience</label>
                <select id="experience">
                    <option>Select</option>
                    <option>1-3 years</option>
                    <option>3-5 years</option>
                    <option>5+ years</option>
                </select>
            </div>
            <div class="form-group">
                <label for="hear-about">Where did you hear about us?</label>
                <select id="hear-about">
                    <option>Select</option>
                    <option>Social Media</option>
                    <option>Friends</option>
                    <option>Events</option>
                </select>
            </div>
            <div className='form-group'></div>
            <div class="form-group" style={{justifySelf: "right"}}>
                <button type="submit" class="send-btn">Send</button>
            </div>
        </form>
    </div>
</section>



  )
}

export default Collaborate