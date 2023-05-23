import React, { useContext } from 'react';
import { useProducts } from '../hooks/product';
import { ModalContext } from '../context/ModalContext';
import { iProduct } from '../models';
import { Product } from '../components/Product';
import { Modal } from '../components/Modal';
import { CreateProduct } from '../components/CreateProduct';
import { Loader } from '../components/Loader';

export const ProductsPage = () => {
	const { products, isLoading, addProduct } = useProducts();
	const { modal, open, close } = useContext(ModalContext);

	const createHandler = (product: iProduct) => {
		close();
		addProduct(product);
	};

	return isLoading ? (
		<div className='container mx-auto max-w-2xl pt-5'>
			{products.map(product => (
				<Product key={product.id} product={product} />
			))}

			{modal && (
				<Modal onClose={() => close()} title='Create new product'>
					<CreateProduct onCreate={createHandler} />
				</Modal>
			)}

			{!modal && (
				<button
					onClick={() => open()}
					className='w-16 h-16 rounded-full bg-yellow-400 fixed bottom-5 right-5 text-3xl text-white'
				>
					<span className='relative -top-[1px]'>+</span>
				</button>
			)}
		</div>
	) : (
		<Loader />
	);
};
