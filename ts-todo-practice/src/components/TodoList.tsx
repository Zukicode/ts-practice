import React from 'react';
import { iTodo } from '../types/data';
import { TodoItem } from './TodoItem';

interface iTodoListProps {
	items: iTodo[];
	toggleTodo: (id: number) => void;
	removeTodo: (id: number) => void;
}

export const TodoList = (props: iTodoListProps) => {
	const { items, toggleTodo, removeTodo } = props;

	return (
		<div>
			{items.map(todo => (
				<TodoItem
					key={todo.id}
					toggleTodo={toggleTodo}
					removeTodo={removeTodo}
					{...todo}
				/>
			))}
		</div>
	);
};
