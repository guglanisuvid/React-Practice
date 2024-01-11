import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import Header from "../Header"
import RestaurantMenu from "../RestaurantMenu"
import Cart from "../Cart"
import MOCK_DATA from "../mocks/ResMenuMock.json"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"

global.fetch = jest.fn(() =>
    Promise.resolve(
        {
            json: () => Promise.resolve(MOCK_DATA)
        }
    )
);

test('should check the working of add to cart and remove from cart button', async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                </Provider>
            </BrowserRouter>
        )
    )

    const category = screen.getByText("Party Combo (10)");

    expect(category).toBeInTheDocument();

    fireEvent.click(category);

    const menuItem = screen.getAllByTestId("menuItem");

    expect(menuItem.length).toBe(10);

    const addToCart = screen.getAllByText("+");

    expect(addToCart.length).toBe(10);

    const removeFromCart = screen.getAllByText("-");

    expect(removeFromCart.length).toBe(10);

    expect(screen.getByText("Cart(0)")).toBeInTheDocument();

    fireEvent.click(addToCart[0]);

    fireEvent.click(addToCart[1]);

    fireEvent.click(addToCart[2]);

    expect(screen.getByText("Cart(3)")).toBeInTheDocument();

    fireEvent.click(removeFromCart[0]);

    fireEvent.click(removeFromCart[1]);

    expect(screen.getByText("Cart(1)")).toBeInTheDocument();

    fireEvent.click(removeFromCart[2]);

    expect(screen.getByText("Cart(0)")).toBeInTheDocument();
});

test('should check the working of clear cart button in the cart component', async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
        )
    )

    const category = screen.getByText("Party Combo (10)");

    expect(category).toBeInTheDocument();

    fireEvent.click(category);

    const menuItem = screen.getAllByTestId("menuItem");

    expect(menuItem.length).toBe(10);

    const addToCart = screen.getAllByText("+");

    fireEvent.click(addToCart[0]);

    fireEvent.click(addToCart[1]);

    fireEvent.click(addToCart[2]);

    const clearCart = screen.getByRole("button", { name: "Clear Cart" });

    fireEvent.click(clearCart);

    const cart0Items = screen.getAllByText("Cart(0)");

    expect(cart0Items.length).toBe(2);

    expect(screen.getByText("No Items in your Cart. Please add some Items to Fill the Cart!")).toBeInTheDocument();

    expect(clearCart).not.toBeInTheDocument();
});