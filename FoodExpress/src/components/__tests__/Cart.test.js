import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../../mocks/restaurantMenu.mock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header"
import Cart from "../Cart"
import "@testing-library/jest-dom"

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should render Menu Accordion on Restaurant menu and on adding item should change Cart items", async () => {
    render(
    <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu />
                <Cart/>
      </Provider>
    </BrowserRouter>
  );

  
  const recommended = await screen.findByText("Recommended (20)");
    expect(recommended).toBeInTheDocument();
    const menuItems = screen.getAllByTestId("menu-item");
    expect(menuItems.length).toBe(20);


  
    const addBtn =  screen.getAllByRole("button", { name: "ADD+" })
    fireEvent.click(addBtn[0]);

    const cartElement = screen.getByText("Cart(1)");
    expect(cartElement).toBeInTheDocument();

    fireEvent.click(addBtn[1]);
    const cartElement1 = screen.getByText("Cart(2)");
    expect(cartElement1).toBeInTheDocument();

    const menuItemsUpdated = screen.getAllByTestId("menu-item");
    expect(menuItemsUpdated.length).toBe(22)

});
