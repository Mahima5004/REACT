import { useState } from "react"
import { LOGO_URL } from "../utils/constant"
import { Link } from "react-router-dom"
import useInternetStatus from "../utils/useInternetStatus"

const Header = () => {

  const [btnName, setBtnName] = useState("LOGIN");
  const internetStatus = useInternetStatus(); 

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between shadow-lg shadow-gray-100 items-center bg-white font-medium">
      <div className="logo-component flex items-center text-lg font-bold">
        <img className="w-20" src={LOGO_URL} />  
        Food Express
      </div>
      <div className="nav-components">
        <ul className="flex m-4 gap-10 items-center">
          <li>Online Status: {internetStatus ? "🟢" : "🔴"}</li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li><Link to= "/">Home</Link></li>
          <li><Link to= "/about">About Us</Link></li>
          <li><Link to= "/contact">Contact Us</Link></li>
          <li><Link to= "/cart">Cart</Link></li>
          <li><button
            className=" bg-amber-700 rounded-2xl text-white cursor-pointer p-2"
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