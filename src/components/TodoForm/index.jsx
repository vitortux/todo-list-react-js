import { useState } from "react";
import { Form, Label, Button } from "./styles";

function TodoForm({ onSubmit }) {
  const [item, setItem] = useState(""); // Form input

  /**
   * Quando o usuário adiciona um todo (submit do form)
   *
   * @param {*} e
   */
  function handleSubmit(e) {
    e.preventDefault(); // Previne a página de atualizar

    if (item === "") return;
    onSubmit(item); // Chama a função passada como prop para adicionar o todo

    setItem(""); // Limpando o input de texto
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Label>Novo Item:</Label>
        <input
          type="text"
          placeholder="Adicionar tarefa"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>
      <Button>Adicionar</Button>
    </Form>
  );
}

export default TodoForm;
