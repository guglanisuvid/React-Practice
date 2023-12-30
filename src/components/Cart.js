import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="w-[72%] my-10 mx-auto">
            <h1 className="text-center font-bold text-4xl text-lime-800 my-8">Cart({cartItems.length})</h1>

            {
                cartItems.length === 0
                &&
                <h1>No Items in your Cart. Please add some Items to Fill the Cart!</h1>
            }

            <div className="my-8 p-2 bg-[#ECF8E5] rounded-lg shadow-md">
                {
                    cartItems.map((item) => (
                        <div>
                            <h4>{item?.name}</h4>
                            <h4>₹{item?.price / 100 || item?.defaultPrice / 100}</h4>
                            <h4 className="text-[12px] mt-2">{item?.description}</h4>
                            <hr className="mt-4 border-lime-800" />
                        </div>
                    ))
                }
            </div>
            <div className="text-right">
                {
                    cartItems.length !== 0
                    &&
                    <button
                        className="px-4 py-2 rounded-lg bg-green-600 text-lime-50 shadow-lg"
                        onClick={handleClearCart}>
                        Clear Cart
                    </button>
                }
            </div>
        </div>
    )
}

export default Cart;