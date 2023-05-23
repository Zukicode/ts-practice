import { useState, useEffect } from 'react';
import { iProduct } from '../models';
import axios from 'axios';

export const useProducts = () => {
	const [products, setProducts] = useState<iProduct[]>([]);
	const [isLoading, setLoading] = useState<boolean>(false);

	const addProduct = (product: iProduct) => {
		setProducts([...products, product]);
	};

	const fetchProducts = async () => {
		try {
			const response = await axios.get<iProduct[]>(
				'https://fakestoreapi.com/products?limit=5'
			);
			setProducts(response.data);
			setLoading(true);
		} catch (error) {
			console.log(error);
		}

		const response = await axios.get<iProduct[]>(
			'https://fakestoreapi.com/products?limit=5'
		);
		setProducts(response.data);
		setLoading(true);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return { products, isLoading, addProduct };
};
