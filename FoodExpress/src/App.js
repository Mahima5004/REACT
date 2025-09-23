import { useEffect, useState } from "react"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"
import UserContext from "./utils/UserContext";


const App = () => {


  //let say we have userAuthentication here
  const [userName, setUserName] = useState();

  useEffect(() => {

    //we made a api call to get userInfo
    const data = {
      name: "Mahima"
    }
    setUserName(data?.name)

  },[])


  return (
    <div className="app">
      <UserContext.Provider value = {{loggedUser : userName}}>
          <Header />
          <Outlet />
      </UserContext.Provider>
    </div>
  )
}


export default App
