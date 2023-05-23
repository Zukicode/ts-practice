import { useEffect, useRef, useState } from 'react';
import { iTodo } from './../types/data';
import { TodoList } from './TodoList';

export const App: React.FC = () => {
	const [value, setValue] = useState('');
	const [todos, setTodos] = useState<iTodo[]>([]);

	const inputRef = useRef<HTMLInputElement>(null);

	const addTodoByPress: React.KeyboardEventHandler<HTMLInputElement> = e => {
		if (e.key === 'Enter') addTodo();
	};

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
		setValue(e.target.value);
	};

	const addTodo = () => {
		if (value) {
			setTodos([
				...todos,
				{
					id: Date.now(),
					title: value,
					completed: false,
				},
			]);

			setValue('');
		}
	};

	const removeTodo = (id: number): void =>
		setTodos(todos.filter(todo => todo.id !== id));

	const toggleTodo = (id: number): void => {
		setTodos(
			todos.map(todo => {
				if (todo.id !== id) return todo;

				return {
					...todo,
					completed: !todo.completed,
				};
			})
		);
	};

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	return (
		<div>
			<div>
				<input
					type='text'
					ref={inputRef}
					value={value}
					onKeyDown={addTodoByPress}
					onChange={handleChange}
				/>
				<button onClick={addTodo}>Add</button>
			</div>

			<TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
		</div>
	);
};
