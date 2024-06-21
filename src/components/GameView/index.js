import {
  GameViewContainer,
  ChoicesList,
  ChoiceItem,
  ChoiceButton,
  ChoiceImage,
} from './styledComponents'

const GameView = props => {
  const {choicesList, setUserChoice} = props
  return (
    <GameViewContainer>
      <ChoicesList>
        {choicesList.map(choice => (
          <ChoiceItem key={choice.id}>
            <ChoiceButton
              onClick={() => setUserChoice(choice.id)}
              data-testid={`${choice.id.toLowerCase()}Button`}
            >
              <ChoiceImage src={choice.imageUrl} alt={choice.id} />
            </ChoiceButton>
          </ChoiceItem>
        ))}
      </ChoicesList>
    </GameViewContainer>
  )
}

export default GameView
