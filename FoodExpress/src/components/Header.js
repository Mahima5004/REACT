import { useState } from "react"
import { LOGO_URL } from "../utils/constant"

const Header = () => {

  const [btnName, setBtnName] = useState("LOGIN");

  return (
    <div className="header">
      <div className="logo-component">
        <img className="logo" src={LOGO_URL} />  
      </div>
      <div className="nav-components">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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