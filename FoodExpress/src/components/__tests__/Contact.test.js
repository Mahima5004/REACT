import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"



describe("Contact us Page test cases",() => {

    it('Should load Contact Us Component with heading', () => {
    render(<Contact />)

    const heading = screen.getByRole("heading")

    expect(heading).toBeInTheDocument();
}),

test('Should load Contact Us Component with submit button', () => {
    render(<Contact />)

    const button = screen.getByText("Submit")

    expect(button).toBeInTheDocument();
})

it('Should load Contact Us Component with name input', () => {
    render(<Contact />)

    const input = screen.getByPlaceholderText("name")

    expect(input).toBeInTheDocument();
})


//Querying

test('Should load Contact Us Component with 2 input box', () => {
    render(<Contact />)

    const inputBoxes = screen.getAllByRole("textbox")

    expect(inputBoxes.length).toBe(2); //on more method expect(inputBoxes.length).not.toBe(3);
})
})

