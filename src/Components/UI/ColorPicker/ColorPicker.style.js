import styled from "styled-components";

export const Wrapper = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 4px;
  background-color: rgba(${(props) => props.bg}, 0.8);
`;
