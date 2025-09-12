import { useState } from "react"
import { LOGO_URL } from "../utils/constant"
import { Link } from "react-router-dom"
import useInternetStatus from "../utils/useInternetStatus"

const Header = () => {

  const [btnName, setBtnName] = useState("LOGIN");
  const internetStatus = useInternetStatus(); 

  return (
    <div className="px-4 flex justify-between bg-orange-100 shadow-amber-800 items-center">
      <div className="logo-component">
        <img className="w-20" src={LOGO_URL} />  
      </div>
      <div className="nav-components">
        <ul className="flex m-4">
          <li className="px-4">Online Status: {internetStatus ? "🟢" : "🔴"}</li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4"><Link to= "/">Home</Link></li>
          <li className="px-4"><Link to= "/about">About Us</Link></li>
          <li className="px-4"><Link to= "/contact">Contact Us</Link></li>
          <li className="px-4"><Link to= "/cart">Cart</Link></li>
          <li className="px-4"><button
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