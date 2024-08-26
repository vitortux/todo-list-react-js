import { Task, Label, Button } from "./styles";

function Todo() {
  return (
    <Task>
      <Label>
        <input type="checkbox" />
        <span>Item 1</span>
      </Label>
      <Button>Excluir</Button>
    </Task>
  );
}

export default Todo;
