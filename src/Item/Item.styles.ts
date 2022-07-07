import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;

  button {
    border-radius: 0 0 20px 20px;
    width: 100%;
  }

  img {
    max-height: 200px;
    object-fit: cover;
    border-radius: 0 0 20px 20px;
  }
  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 20px;
  }
`;
