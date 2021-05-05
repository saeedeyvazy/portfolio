import styled from "styled-components"

const Button = styled.button`
  background-color: ${({ bg }) => (bg ? bg : "#000")};
  color: #fff;
  border: none;
  padding: 15px 35px;
  cursor: pointer;
  border-radius: 3px;
  font-weight: 500;
  transition: all 300ms linear;
  width: 150px;
  text-align: center;
  &:hover {
    background-color: #06bc9b;
  }
`

export default Button
