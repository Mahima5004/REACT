import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"


it("Should render Header component with Login button", () => {
    // console.log("Store getState:", appStore.getState());

    render(
        <BrowserRouter>
            <Provider store={appStore}>
              <Header />
           </Provider>
        </BrowserRouter>  
    )
    
    const loginButton = screen.getByRole("button")
    
    expect(loginButton).toBeInTheDocument();
})

it("Should render Header component with 0 Cart items", () => {
    
    render(
        <BrowserRouter>
            <Provider store={appStore}>
              <Header />
           </Provider>
        </BrowserRouter>  
    )
    
    const cartItem = screen.getByText("Cart(0)")
    
    expect(cartItem).toBeInTheDocument();
})

it("Should render Header component with Cart ", () => {
    
    render(
        <BrowserRouter>
            <Provider store={appStore}>
              <Header />
           </Provider>
        </BrowserRouter>  
    )
    
    const cart = screen.getByText(/Cart/) //regex to check 
    
    expect(cart).toBeInTheDocument();
})

it("Should change Login button to Logout once clicked", () => {
    
    render(
        <BrowserRouter>
            <Provider store={appStore}>
              <Header />
           </Provider>
        </BrowserRouter>  
    )
    
    const loginButton = screen.getByRole("button", { name: "LOGIN" });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "LOGOUT"})
    
    expect(logoutButton).toBeInTheDocument();
})
