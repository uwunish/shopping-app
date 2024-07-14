import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/cart-slice";

function Product({ item }) {
	const dispatch = useDispatch();
	const { cart } = useSelector((state) => state);

	function handleAddToCart() {
		dispatch(addToCart(item));
	}

	function handleRemoveFromCart() {
		console.log("removed");
		dispatch(removeFromCart(item.id));
	}

	return (
		<div>
			<div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
				<div className="h-[180px] border-4">
					<img
						src={item.image}
						alt={item.title}
						className="object-cover h-full w-full"
					/>
				</div>
				<div>
					<h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
						{item.title}
					</h1>
				</div>
				<div className="flex items-center justify-center w-full mt-5">
					<button
						onClick={
							cart.some((data) => data.id === item.id)
								? handleRemoveFromCart
								: handleAddToCart
						}
						className="bg-red-950 text-white border-2 rounded-lg font-semibold p-4">
						{cart.some((cartItem) =>
							cartItem.id === item.id
								? "Remove from cart"
								: "Add to cart"
						)}
					</button>
				</div>
			</div>
		</div>
	);
}

export default Product;
