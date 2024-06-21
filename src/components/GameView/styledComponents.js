import styled from 'styled-components'

export const GameViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ChoicesList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 75%;

  @media screen and (max-width: 425px) {
    width: 100%;
  }
`

export const ChoiceItem = styled.li`
  list-style-type: none;
`

export const ChoiceButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
`

export const ChoiceImage = styled.img`
  width: 225px;
  object-fit: contain;
  @media screen and (max-width: 767px) {
    width: 150px;
  }

  @media screen and (max-width: 567px) {
    width: 125px;
  }
`
