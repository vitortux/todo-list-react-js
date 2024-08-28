import { TodosItem, Label, Button } from "./styles";

function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  // Desestruturando os props e passando as funções como prop
  return (
    <TodosItem>
      <Label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </Label>
      <Button onClick={() => deleteTodo(id)}>Deletar</Button>
    </TodosItem>
  );
}

export default TodoItem;
