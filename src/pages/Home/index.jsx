import { useState } from "react";
import { Container, Wrapper } from "./styles";

import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";

function Home() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");

    if (localValue == null) return []; // Se não tiver nada no local storage, retorna um array vazio

    return JSON.parse(localValue);
  });

  // Execute esta função sempre que o array de todos muda...
  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos)); // Guarda os todos no local storage
  }, [todos]);

  /**
   * Adiciona novos todos na todo list, passada como prop para o form
   *
   * @param {*} title
   */
  function addTodo(title) {
    // Pega o valor atual do array de todos antes de adicionar
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
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
        <TodoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </Wrapper>
    </Container>
  );
}

export default Home;
