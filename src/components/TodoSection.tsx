import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoSection = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() === '') return;
    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <Card className="max-w-xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-gray-800 dark:text-white">
              My Todo List
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2 mb-6">
              <Input
                type="text"
                placeholder="Add a new todo"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-grow dark:bg-gray-800 dark:text-white dark:border-gray-700"
              />
              <Button onClick={addTodo} className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800">
                Add Todo
              </Button>
            </div>
            {todos.length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400">No todos yet. Add one above!</p>
            ) : (
              <ul className="space-y-3">
                {todos.map((todo) => (
                  <li key={todo.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-md shadow-sm">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        checked={todo.completed}
                        onCheckedChange={() => toggleTodo(todo.id)}
                        id={`todo-${todo.id}`}
                        className="data-[state=checked]:bg-blue-500 dark:data-[state=checked]:bg-blue-600"
                      />
                      <label
                        htmlFor={`todo-${todo.id}`}
                        className={`text-lg dark:text-gray-200 ${todo.completed ? 'line-through text-gray-400 dark:text-gray-500' : 'text-gray-800 dark:text-gray-100'}`}
                      >
                        {todo.text}
                      </label>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => deleteTodo(todo.id)}
                      className="bg-red-500 hover:bg-red-600 text-white dark:bg-red-600 dark:hover:bg-red-700"
                    >
                      Delete
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TodoSection;
