import React from 'react'

function Menu() {
  return (
    <section class="menu-section">
        <div class="menu-header">
            <h1><span>Our Menu</span></h1>
        </div>
        <div class="know-more-btn">Know More</div>

        <div class="menu-container">
            <div class="menu-column starters">
                <h2>Starters</h2>
                <div class="menu-item">
                    <p class="menu-item-title">Quinoa Croquettas</p>
                    <p>Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)</p>
                    <p class="menu-item-price">£4.95</p>
                </div>
                <div class="menu-item">
                    <p class="menu-item-title">Chifa Chicharrones</p>
                    <p>Slow cooked, crispy pork belly with sweet soy sauce</p>
                    <p class="menu-item-price">£6.95</p>
                </div>
                <div class="menu-item">
                    <p class="menu-item-title">Calamares</p>
                    <p>Crispy baby squid with pickled jalapeño miso salsa</p>
                    <p class="menu-item-price">£6.95</p>
                </div>
            </div>

            <div class="menu-column main-courses">
                <h2>Main Courses</h2>
                <div class="menu-item">
                    <p class="menu-item-title">El Clasico</p>
                    <p>Sea bass ceviche with aji limo tiger’s milk, sweet potato purée, choclo corn, red onion, coriander & plantain (gf)</p>
                    <p class="menu-item-price">£8.95</p>
                </div>
                <div class="menu-item">
                    <p class="menu-item-title">Tiradito Callao</p>
                    <p>Cobia tiradito with coriander tiger’s milk, black tobika, crème fraiche & sweet potato crunchies</p>
                    <p class="menu-item-price">£8.95</p>
                </div>
            </div>

            <div class="menu-column sides">
                <h2>Sides</h2>
                <div class="menu-item">
                    <p class="menu-item-title">Super Pollo</p>
                    <p>Marinated corn-fed chicken pieces with rocotto salsa</p>
                    <p class="menu-item-price">£4.95</p>
                </div>
                <div class="menu-item">
                    <p class="menu-item-title">Patatas Fritas</p>
                    <p>Sweet potato fries with aji rocotto mayonnaise (v)</p>
                    <p class="menu-item-price">£3.95</p>
                </div>
            </div>

            <div class="menu-column desserts">
                <h2>Desserts</h2>
                <div class="menu-item">
                    <p class="menu-item-title">Ice Cream</p>
                    <p>Lorem ipsum dolor sit amet salerma petrum sea</p>
                    <p class="menu-item-price">£3.95</p>
                </div>
                <div class="menu-item">
                    <p class="menu-item-title">Tiramisu</p>
                    <p>Lorem ipsum dolor sit amet salerma petrum sea</p>
                    <p class="menu-item-price">£3.95</p>
                </div>
                <div class="menu-item">
                    <p class="menu-item-title">Chocolate Brownie</p>
                    <p>Lorem ipsum dolor sit amet salerma petrum sea</p>
                    <p class="menu-item-price">£3.95</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Menu