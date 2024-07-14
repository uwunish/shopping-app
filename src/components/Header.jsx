import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="flex items-center justify-between h-20 mx-auto max-w-6xl">
			<Link to="/">
				<h2 className="text-xl text-orange-500 font-bold sm:text-2xl md:text-3xl tracking-wide">
					ShoppingApp
				</h2>
			</Link>

			<ul className="flex space-x-6 items-center font-semibold text-gray-500">
				<Link to="/">
					<li className="hover:text-black duration-300">Home</li>
				</Link>
				<Link to="/cart">
					<li className="hover:text-black duration-300">Cart</li>
				</Link>
			</ul>
		</div>
	);
}

export default Header;
