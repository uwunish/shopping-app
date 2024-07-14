import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { Circles } from "react-loader-spinner";

function Home() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	async function fetchProducts() {
		setLoading(true);
		try {
			const response = await fetch(`https://fakestoreapi.com/products`);
			const data = await response.json();
			if (data) {
				console.log(data);
				setProducts(data);
				setLoading(false);
			}
		} catch (err) {
			setLoading(false);
			console.log(err);
		}
	}

	useEffect(() => {
		fetchProducts();
	}, []);

	if (loading) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<Circles />
			</div>
		);
	}

	return (
		<div>
			{products && products.length ? (
				<div
					className="grid sm:grid-cols-2 md:grid-cols-3 
				lg:grid-cols-4
				space-x-5 mx-auto">
					{products.map((item) => (
						<Product key={item.id} item={item} />
					))}
				</div>
			) : (
				<div className="font-semibold text-lg flex justify-center">
					No products fetched
				</div>
			)}
		</div>
	);
}

export default Home;
