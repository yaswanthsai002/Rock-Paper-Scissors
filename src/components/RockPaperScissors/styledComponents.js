import styled from 'styled-components'

export const RockPaperScissorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #223a5f;
  padding: 2rem 1rem;
  min-height: 100vh;
  gap: 5rem;
`

export const GameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #fff;
  border-radius: 0.5rem;
  width: 80%;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1rem 2rem;

  @media screen and (max-width: 767px) {
    width: 90%;
    padding: 1rem;
  }
`

export const HeadingsContainer = styled.div``

export const Heading = styled.h1`
  color: #fff;
  font-family: Bree Serif;
  font-weight: normal;

  @media screen and (max-width: 767px) {
    font-size: 1.75rem;
  }

  @media screen and (max-width: 567px) {
    font-size: 1.5rem;
  }
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 0.75rem 3rem;
  gap: 0.5rem;
  border-radius: 0.75rem;

  @media screen and (max-width: 767px) {
    padding: 1rem 2rem;
  }

  @media screen and (max-width: 567px) {
    padding: 1rem;
  }
`

export const ScoreHeading = styled.p`
  font-family: Bree Serif;
  font-weight: normal;
  font-size: 1.5rem;
  color: #223a5f;

  @media screen and (max-width: 767px) {
    font-size: 1.5rem;
  }
`

export const Score = styled.p`
  font-size: 3rem;
  color: #223a5f;
  font-family: Roboto;
  @media screen and (max-width: 767px) {
    font-size: 2rem;
  }
`
