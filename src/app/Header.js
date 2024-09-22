import React from 'react'

function Header() {
  return (
    <header>
        <nav class="navbar">
            <div class="logo">LOGO</div>
            <ul class="nav-links">
                <li><a href="#">About</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">Our Menu</a></li>
                <li><a href="#">Recipes</a></li>
            </ul>
            <div class="nav-right">
                <a href="#" class="nav-link">Contact</a>
                <a href="#" class="nav-link">Login</a>
            </div>
        </nav>
    </header>
  )
}

export default Header