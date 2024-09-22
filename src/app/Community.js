import React from 'react'


function Community() {

    return (
        <section class="community-section">
        <div class="box-container align-right">
            <div class="community-header">
                <h1>Meet Our <span>Community</span></h1>
                <div class="know-more-btn">Know More</div><br /><br/>
                <p>Lorem ipsum dolor sit amet ernut tempartero sertu per nabore en torna entalto.</p>
            </div>
            <div class="image-box">
                <img src="https://raw.githubusercontent.com/shivani17saxena/showcase/refs/heads/main/2.png" alt="Tacos"/>
                <div class="icon">
                    <img src={"https://raw.githubusercontent.com/shivani17saxena/showcase/refs/heads/main/insta.png"} />
                </div>
            </div>
            <img className='filler-dots' src="https://raw.githubusercontent.com/shivani17saxena/showcase/refs/heads/main/small.png" />
            <div class="text-box">
                <p class="handle">@buzzfeedfood</p>
                <p class="description">
                    It's taco Tuesday! These tacos from <a href="#">@jesseszewczyk</a> have no added sugars and are SO good 🌮.
                    <br /><a href="#">Find the recipe from the link in our bio! 📸 :</a>
                    <br /><a href="#">@taylormillerphoto</a>
                </p>
                <div class="engagement">
                    <span style={{position: "relative",top:"2px"}}>🗨 60</span>
                    <span>♥︎ 14.7K</span>
                </div>
            </div>
            <img className='filler-lines' src="https://raw.githubusercontent.com/shivani17saxena/showcase/refs/heads/main/lines.png" />
        </div>

        <div class="box-container align-left">
            <div class="text-box">
                <p class="handle">@love_food</p>
                <p class="description">
                    Waffle sticks in Copenhagen! 🇩🇰 😍 Milk chocolate with sprinkles, dark chocolate with coconut and milk chocolate with peanuts! [📷 : @foodwithmichel] #lovefood
                </p>
                <div class="engagement">
                    <span style={{position: "relative",top:"2px"}}>🗨 789</span>
                    <span>♥︎ 99.7K</span>
                </div>
            </div>
            <img className='filler-smalldots' src="https://raw.githubusercontent.com/shivani17saxena/showcase/refs/heads/main/smalldots.png" />
            <div class="image-box">
                <img src="https://raw.githubusercontent.com/shivani17saxena/showcase/refs/heads/main/3.png" alt="Waffle Sticks" />
                <div class="icon">
                    <img src="https://raw.githubusercontent.com/shivani17saxena/showcase/refs/heads/main/insta.png" alt="Instagram Icon" />
                </div>
            </div>
        </div>

        <div class="box-container align-right">
            <div class="text-box">
                <p class="handle">@buzzfeedfood</p>
                <p class="description">
                    Getting into long weekend mode like 🍤 #pancitpalabok (📷 : @jeepneynyc)
                </p>
                <div class="engagement">
                    <span style={{position: "relative",top:"2px"}}>🗨 152</span>
                    <span>♥︎ 18.2K</span>
                </div>
            </div>
            <div class="image-box">
                <img src="https://raw.githubusercontent.com/shivani17saxena/showcase/refs/heads/main/4.png" alt="Pancit Palabok" />
                <div class="icon">
                    <img src="https://raw.githubusercontent.com/shivani17saxena/showcase/refs/heads/main/insta.png" alt="Instagram Icon" />
                </div>
            </div>
        </div>
        <div class="lorem-box">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure.</p>
        </div>

    </section>
    )
}

export default Community