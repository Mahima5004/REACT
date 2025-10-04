import { fireEvent, render, screen , waitFor} from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../../mocks/restaurantList.mock.json"
// import { act } from "react"
import { BrowserRouter } from "react-router-dom"

global.fetch = jest.fn(() => {
    // console.log("Mock fetch called");
    return Promise.resolve({
        json: () => {
            // console.log("Returned mock: "+MOCK_DATA)
            return Promise.resolve(MOCK_DATA)
        }
    })
})


it("Should search and filter restaurant card for input text Pizza", async () => {

    // await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
    )
    
    const initialCards = await waitFor(() => screen.getAllByTestId("res-card"));
    expect(initialCards.length).toBe(20);
    
    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "Pizza" } });
    const searchBtn = screen.getByRole("button", { name: "Search" })
    fireEvent.click(searchBtn)

    const updatedCards = await waitFor(() => screen.getAllByTestId("res-card"));
    expect(updatedCards.length).toBe(2);

        
        
    })
   
    it("Should search and filter top rated restaurant on click of Top Rated Restaurants button", async () => {

    // await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
    )
    
    const initialCards = await waitFor(() => screen.getAllByTestId("res-card"));
    expect(initialCards.length).toBe(20);
    
    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
    fireEvent.click(topRatedBtn)

    const updatedCards = await waitFor(() => screen.getAllByTestId("res-card"));
    expect(updatedCards.length).toBe(7);

        
        
    })
   
    


