import { useState } from "react";
import {
  Container,
  Wrapper,
  Form,
  Label,
  Button,
  Todos,
  TodoItem,
} from "./styles";

function TodoList() {
  const [item, setItem] = useState(""); // Form input
  const [todos, setTodos] = useState([]);

  /**
   * Quando o usuário adiciona um todo (submit do form)
   *
   * @param {*} e
   */
  function handleSubmit(e) {
    e.preventDefault(); // Previne a página de atualizar

    // Pega o valor atual do array de todos antes de adicionar
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: item, completed: false },
      ];
    });

    setItem(""); // Limpando o input de texto
  }

  /**
   * Verifica se a tarefa está completa
   *
   * @param {*} id
   * @param {*} completed
   */
  function toggleTodo(id, completed) {
    // Passa pelos todos atuais, por isso utliza uma function
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed }; // Se for o todo correto, marca a checkbox
        }

        return todo; // Se não for o todo correto, retorna ele sem mudanças
      });
    });
  }

  /**
   * Função que deleta todos
   *
   * @param {*} id
   */
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id); // Se for o mesmo id deleta, senão mantém
    });
  }

  return (
    <Container>
      <Wrapper>
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
        <Todos>
          {todos.map((todo) => {
            return (
              <TodoItem key={todo.id}>
                <Label>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                  />
                  {todo.title}
                </Label>
                <Button onClick={() => deleteTodo(todo.id)}>Deletar</Button>
              </TodoItem>
            );
          })}
        </Todos>
      </Wrapper>
    </Container>
  );
}

export default TodoList;
