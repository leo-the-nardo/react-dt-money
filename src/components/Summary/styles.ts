import styled, { css } from "styled-components"

export const SummaryContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  max-width: 1120px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2.5rem;
`

type SummaryCardProps = {
  variant?: "green"
}

export const SummaryCard = styled.div<SummaryCardProps>`
  display: flex;
  padding: 1.5rem 1.5rem 1.5rem 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;

  background-color: ${(props) => props.theme["gray-600"]};
  border-radius: 6px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    p {
      color: ${(props) => props.theme["gray-300"]};
    }
  }

  strong {
    color: ${(props) => props.theme["gray-100"]};
    font-size: 2rem;
    font-weight: 700;
    line-height: 140%; /* 2.8rem */
  }

  ${(props) =>
    props.variant === "green" &&
    css`
      background-color: ${props.theme["green-700"]};
    `}
`
