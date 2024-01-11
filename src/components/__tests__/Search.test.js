import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/ResListMock.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

test('should render body component with restaurant cards', async () => {
    await act(
        async () =>
            render(
                <BrowserRouter>
                    <Body />
                </BrowserRouter>
            )
    );

    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(20);

});

test('should check if top rated restaurant is working properly or not', async () => {
    await act(
        async () =>
            render(
                <BrowserRouter>
                    <Body />
                </BrowserRouter>
            )
    );

    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(20);

    const topRatedResBtn = screen.getByRole("button", { name: "See Top Rated Restaurants" });

    expect(topRatedResBtn).toBeInTheDocument();

    fireEvent.click(topRatedResBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.length).toBe(4);

    const seeAllResBtn = screen.getByRole("button", { name: "See All Restaurants" });

    expect(seeAllResBtn).toBeInTheDocument();
});