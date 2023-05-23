import React, { useState } from 'react';
import { iProduct } from '../models';
import axios from 'axios';

const productData: iProduct = {
	title: 'test product',
	price: 13.5,
	description: 'lorem ipsum set',
	image: 'https://i.pravatar.cc',
	category: 'electronic',
	rating: {
		rate: 42,
		count: 10,
	},
};

interface CreateProductProps {
	onCreate: (product: iProduct) => void;
}

export const CreateProduct = ({ onCreate }: CreateProductProps) => {
	const [value, setValue] = useState('');
	const [error, setError] = useState('');

	const submitHandler = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');
		if (value.trim().length === 0) {
			setError('Please enter valid title!');
			return;
		}
		productData.title = value;
		const response = await axios.post<iProduct>(
			'https://fakestoreapi.com/products',
			productData
		);

		onCreate(response.data);
	};

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<form onSubmit={submitHandler}>
			<input
				type='text'
				className='border py-2 px-4 mb-2 w-full outline-none'
				placeholder='Enter product title...'
				value={value}
				onChange={changeHandler}
			/>

			{error && <p className='text-red-500'>{error}</p>}

			<button type='submit' className='py-2 px-4 border bg-yellow-400'>
				Create
			</button>
		</form>
	);
};
