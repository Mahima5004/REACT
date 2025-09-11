import { useState } from "react"
import { LOGO_URL } from "../utils/constant"
import { Link } from "react-router-dom"
import useInternetStatus from "../utils/useInternetStatus"

const Header = () => {

  const [btnName, setBtnName] = useState("LOGIN");
  const internetStatus = useInternetStatus();

  return (
    <div className="header">
      <div className="logo-component">
        <img className="logo" src={LOGO_URL} />  
      </div>
      <div className="nav-components">
        <ul>
          <li>Online Status: {internetStatus ? "🟢" : "🔴"}</li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li><Link to= "/">Home</Link></li>
          <li><Link to= "/about">About Us</Link></li>
          <li><Link to= "/contact">Contact Us</Link></li>
          <li><Link to= "/cart">Cart</Link></li>
          <li><button
            className="login-btn"
            onClick={() => {
              btnName === "LOGIN" ?
                setBtnName("LOGOUT") :
                setBtnName("LOGIN") 
          }}>{btnName}</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Header