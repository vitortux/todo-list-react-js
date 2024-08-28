import { Todos } from "./styles";
import TodoItem from "../TodoItem";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  // Desestruturando os props e passando as funções como prop
  return (
    <Todos>
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </Todos>
  );
}

export default TodoList;
