import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.125rem;
  margin: 0 auto;
  margin-top: 2.5rem;
  max-width: 1120px;
`

export const NewTransactionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.75rem 1.25rem;

  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["white"]};
  font-weight: 700;
  border-radius: 6px;
  transition: filter 0.2s;
  border: none;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    filter: brightness(0.85);
  }
`
