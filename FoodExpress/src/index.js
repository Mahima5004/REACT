import App from "./App"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Contact from "./components/Contact"
import Error from "./components/Error"
import Body from "./components/Body"
import RestaurantMenu from "./components/RestaurantMenu"
import { lazy, Suspense } from "react"

const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import("./components/About"))

const routerElement = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        index: true,
        element: <Body />
      },
      {
        path: "/about",
        element: <Suspense fallback = {<h1>Loading...</h1>}><About /></Suspense>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "restaurant/:resId", //this resId is dynamic here it can be anything
        element: <RestaurantMenu />
      },
      {
        path: "/grocery",
        element : <Suspense fallback = {<h1>Loading...</h1>}><Grocery /></Suspense>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerElement}/>)