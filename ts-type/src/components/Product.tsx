import React, { useState } from 'react';
import { iProduct } from '../models';

interface ProductProps {
	product: iProduct;
}

export const Product = ({ product }: ProductProps) => {
	const [isVisibleDetails, setVisibleDeatils] = useState<boolean>(false);

	const handleChangeDetail = () => setVisibleDeatils(!isVisibleDetails);

	return (
		<div className='border py-2 px-4 rounded flex flex-col items-center mb-2 cursor-pointer'>
			<img src={product.image} className='w-1/6' alt={product.title} />
			<p>{product.title}</p>
			<span className='font-bold'>{product.price}</span>
			{isVisibleDetails && (
				<div>
					<p>{product.description}</p>
					<p>
						Rate:{' '}
						<span className='text-yellow-400 font-bold'>
							{product.rating?.rate}
						</span>
					</p>
				</div>
			)}
			<button
				onClick={handleChangeDetail}
				className='py-2 px-4 bg-yellow-400 font-bold cursor-pointer mt-4 hover:shadow-yellow-200 shadow-lg transition-all '
			>
				{isVisibleDetails ? 'Hide Details' : 'Show Details'}
			</button>
		</div>
	);
};
