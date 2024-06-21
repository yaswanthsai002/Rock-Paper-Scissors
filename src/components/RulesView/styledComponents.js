import styled from 'styled-components'

export const RulesViewContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80%;
`
export const RulesButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #fff;
  font-family: Bree serif;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: #223a5f;
`
export const RulesContainer = styled.div`
  background-color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;
`
export const RulesHeader = styled.div``
export const CloseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.25rem;
  font-weigth: 500;
  color: #223a5f;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const RulesBody = styled.div``
export const RulesImage = styled.img`
  width: 600px;
  object-fit: contain;

  @media screen and (max-width: 767px) {
    width: 300px;
  }
`
