import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;

  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;

  max-width: 640px;
  padding: 18px;

  border-radius: 6px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
`;

export const Form = styled.form`
  display: flex;

  /* align-items: center;
  justify-content: space-between; */

  margin-bottom: 30px;

  padding: 0 18px;

  div {
    width: 100%;

    display: flex;

    justify-content: center;
    align-items: center;
  }

  div > input {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;

    padding: 6px 12px;
  }
`;

export const Label = styled.label`
  display: flex;

  align-items: center;
  gap: 12px;

  margin-right: 12px;
`;

export const Button = styled.button`
  min-width: 88px;
  padding: 6px 12px;

  border: none;
  border-radius: 6px;

  cursor: pointer;

  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.1); /* Aumenta o tamanho em 10% */
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }
`;

export const Todos = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TodoItem = styled.li`
  display: flex;

  justify-content: space-between;
  align-items: center;

  margin-bottom: 12px;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;

  padding: 12px 18px;
`;
