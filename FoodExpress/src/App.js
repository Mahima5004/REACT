import { useEffect, useState } from "react"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore"


const App = () => {


  //let say we have userAuthentication here
  const [userName, setUserName] = useState();

  useEffect(() => {

    //we made a api call to get userInfo
    const data = {
      name: "UserName"
    }
    setUserName(data?.name)

  },[])


  return (
    <div className="app">
      <Provider store={appStore}>
         <UserContext.Provider value = {{loggedUser : userName, setUserName}}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </div>
  )
}


export default App
