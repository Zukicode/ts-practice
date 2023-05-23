import React from 'react';
import { iTodo } from '../types/data';

interface iTodoItem extends iTodo {
	toggleTodo: (id: number) => void;
	removeTodo: (id: number) => void;
}

export const TodoItem = (props: iTodoItem) => {
	const { id, title, completed, toggleTodo, removeTodo } = props;

	return (
		<div>
			<input
				type='checkbox'
				checked={completed}
				onChange={() => toggleTodo(id)}
			/>
			{title}
			<button onClick={() => removeTodo(id)}>x</button>
		</div>
	);
};
