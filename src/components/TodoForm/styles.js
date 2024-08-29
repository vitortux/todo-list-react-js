import styled from "styled-components";

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

  color: #fff;
  background-color: #48cae4;

  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.1); /* Aumenta o tamanho em 10% */
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }
`;
