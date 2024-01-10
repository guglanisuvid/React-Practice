import "@testing-library/jest-dom"
import ResCard from "../ResCard"
import MOCK_DATA from "../mocks/ResCardMock.json"
import { render, screen } from "@testing-library/react"

test('should render restaurant card component with name data', () => {
    render
        (
            <ResCard resData={MOCK_DATA} />
        );

    const name = screen.getByText("NIC Ice Creams");

    expect(name).toBeInTheDocument();

});

test('should render restaurant card component with cusines data', () => {
    render
        (
            <ResCard resData={MOCK_DATA} />
        );

    const cuisines = screen.getByText("Ice Cream, Desserts");

    expect(cuisines).toBeInTheDocument();

});

test('should render restaurant card component with price data', () => {
    render
        (
            <ResCard resData={MOCK_DATA} />
        );

    const price = screen.getByText("₹120 for two");

    expect(price).toBeInTheDocument();

});

test('should render restaurant card component with ratings data', () => {
    render
        (
            <ResCard resData={MOCK_DATA} />
        );

    const rating = screen.getByText("4.5 ⭐");

    expect(rating).toBeInTheDocument();

});