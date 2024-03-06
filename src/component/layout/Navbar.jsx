import React, { useState } from 'react'
import "./navbar.css"
import Subnavbar from './Subnavbar'
import img1 from "../../image/10003.png"
import search from "../../image/search.png"
import Placeholdertyping from './Placeholdertyping'
import cart from "../../image/cart.png"
import {Link} from "react-router-dom"
import Subnav from './Subnav'

const Navbar = () => {
  const [color, setColor] = useState(true);

  const changeColor = () => {

    if (window.scrollY <= 0) {
      setColor(true);
    } else {
      setColor(false);
    }
    
  };

  window.addEventListener("scroll", changeColor, true);
  return (
    <>
      <div className={color?"header w100":"header w100 boxShadow"}>
      <Subnavbar />
      <div className="navbar w100 div-center">
        <div className="navbar-content container">
          <div>
            <img src={img1} alt="" />
          </div>
          <div className="middle-navbar">
            <select name="times" id="times" className='a'>
              <option value="volvo">All</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <input type="text"  placeholder="Searchs by publisher"/>
            
            <div className='div-center middle-navbar-img'>
            <img src={search} alt="" />
            </div>
          </div>
          <div className='navbar-content-icon'>
            <div className='div-center'>
              <img src={cart} alt="" />
            </div>
            <div className='div-center'>
              <Link to="#">Sing in</Link>
            </div>

          </div>
        </div>
      </div>
      </div>
      <Subnav/>
    </>
  );
}

export default Navbar