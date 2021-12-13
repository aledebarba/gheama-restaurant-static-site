import React, {useState, useRef, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export const TopNav = () => {

    const [ menuIsClosed, setMenuState ] = useState( true );
    const [ height, setHeight] = useState(0)
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
          <Link to="/soon/">
            About Us
          </Link>
          <Link to="/soon/">
            Contact Us
          </Link>
          <Link to="/soon/">
            Menu
          </Link>
          <Link to="/soon/">
            Gift Card
          </Link>
          <Link to="/soon/">
            Events
          </Link>
          <Link to="/soon/">
            Gallery
          </Link>
          <Link to="/soon/">
            Blog
          </Link>
        </div> 
        <div className="nav-menu-buttons" menustate={ menuIsClosed ? "closed" : "opened" }>
            <button className="reserves">Reservations</button>
            <button className="open-close" onClick={()=>setMenuState(!menuIsClosed)}>
                { menuIsClosed && <StaticImage src="../images/HamburgerMenu.png" alt="open icon" />}
                {!menuIsClosed && <StaticImage src="../images/HamburgerMenuClose.png" alt="close icon - select to close menu" />}
            </button>
        </div>
      </nav>
    </>)
  };
