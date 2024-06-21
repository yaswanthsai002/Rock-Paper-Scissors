import styled from 'styled-components'

export const ResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 75%;
  }
  @media screen and (max-width: 567px) {
    width: 90%;
  }
`

export const ResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const UserChoiceConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const UserChoiceHeading = styled.h1`
  font-size: 1.5rem;
  color: #fff;
`

export const UserChoiceImage = styled.img`
  width: 200px;
  object-fit: contain;

  @media screen and (max-width: 767px) {
    width: 150px;
  }

  @media screen and (max-width: 567px) {
    width: 125px;
  }
`

export const OpponentChoiceConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const OpponentChoiceHeading = styled.h1`
  font-size: 1.5rem;
  color: #fff;
`

export const OpponentChoiceImage = styled.img`
  width: 200px;
  object-fit: contain;

  @media screen and (max-width: 767px) {
    width: 150px;
  }

  @media screen and (max-width: 567px) {
    width: 125px;
  }
`

export const ResultAndPlayAgainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`

export const ResultHeading = styled.p`
  font-size: 1.75rem;
  color: #fff;
`

export const PlayAgainButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: #fff;
  font-family: Bree serif;
  text-transform: uppercase;
  padding: 0.75rem 3rem;
  font-size: 1rem;
  border-radius: 0.75rem;
  color: #223a5f;
`
