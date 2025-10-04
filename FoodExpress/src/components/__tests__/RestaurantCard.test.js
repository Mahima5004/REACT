import { render , screen} from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../../mocks/resCard.mock.json"
import "@testing-library/jest-dom"


it("Should Render restaurant card ", () => {
    render(<RestaurantCard resData={MOCK_DATA} />)
    
    const resCard = screen.getByText("ZAZA Mughal Biryani");

    expect(resCard).toBeInTheDocument();
})