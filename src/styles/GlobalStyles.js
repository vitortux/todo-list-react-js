import * as styled from "styled-components";

export default styled.createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *,
  button,
  input {
    border: 0;
    outline: 0;
  }

  body {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`;
