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
  return (
    <Container>
      <Wrapper>
        <Form>
          <div>
            <Label>Novo Item:</Label>
            <input type="text" />
          </div>
          <Button>Adicionar</Button>
        </Form>
        <Todos>
          <TodoItem>
            <Label>
              <input type="checkbox" />
              Item 1
            </Label>
            <Button>Deletar</Button>
          </TodoItem>
        </Todos>
      </Wrapper>
    </Container>
  );
}

export default TodoList;
