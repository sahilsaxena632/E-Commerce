import React from 'react'
import "./css/Navbar.css"

const Navbar : React.FC = () => {
  return (
      <div className="menu">
	<nav>
		<ul>
	<li><a href="#">Home</a></li>
  <br></br>
  <li><a href="#">About</a></li>
  <br></br>
	<li><a href="#">Categories</a></li>
  <br></br>
	<li><a href="#">Collections</a></li>
  <br></br>
	<li><a href="#">Contact</a></li>
		</ul>
		</nav>
    </div>
  )
}

export default Navbar