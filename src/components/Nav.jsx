import React, {useState, useRef, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import menuImgOpen from '../images/HamburgerMenu.png';
import menuImgClose from '../images/HamburgerMenuClose.png';

export const TopNav = () => {

    const [ menuIsClosed, setMenuState ] = useState( true );
    const [ height, setHeight] = useState(0)
    const [ modalState, setModalState ] = useState(false);
    const menuRef = useRef(null)
  
    useEffect(() => {
      setHeight(menuRef.current.clientHeight)
    },[menuIsClosed])
  
    return (<>
    <nav ref={menuRef} style={{marginTop: menuIsClosed ? -1*height : 0 }} >
        <div className="brand">
            <StaticImage src="../images/logotype.png" alt='Gheama Logo' />
        </div> 
        <div className='navItems'>
          <Link to="/">
            Home
          </Link>
          <Link to="/about/">
            Contact Us
          </Link>
          <Link to="/about/">
            About Us
          </Link>
          <Link to="/soon/">
            News
          </Link>
          <Link to="/soon/">
            Find Us
          </Link>
          { !modalState && <button onClick={()=>{setModalState(true)}}>Menu</button> }
          { modalState && <>
              <a href='Gheama-restaurant-menu.pdf' download>Download Menu</a>
              <a href='Gheama-restaurant-menu.pdf' download>Download Print Menu</a>
            </>
          }
          
        </div> 
        <div className="nav-menu-buttons" menustate={ menuIsClosed ? "closed" : "opened" }>
            <button className="reserves">Reservations</button>
            <button className="open-close" onClick={()=>{
                setMenuState(!menuIsClosed)
                setModalState(false)
              }}
              >
                { menuIsClosed && <img src={menuImgOpen} alt="open icon" />}
                {!menuIsClosed && <img src={menuImgClose} alt="close icon - select to close menu" />}
            </button>
        </div>
      </nav>
    </>)
  };
