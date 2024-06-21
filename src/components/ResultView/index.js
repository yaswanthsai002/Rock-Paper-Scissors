import {
  ResultViewContainer,
  ResultContainer,
  UserChoiceConatiner,
  UserChoiceHeading,
  UserChoiceImage,
  OpponentChoiceConatiner,
  OpponentChoiceHeading,
  OpponentChoiceImage,
  ResultAndPlayAgainContainer,
  ResultHeading,
  PlayAgainButton,
} from './styledComponents'

const ResultView = props => {
  const {
    choicesList,
    userChoice,
    opponentChoice,
    resultText,
    handlePlayAgain,
  } = props
  const userChoiceImageUrl = choicesList.find(
    choice => choice.id === userChoice,
  ).imageUrl
  const opponentChoiceImageUrl = choicesList.find(
    choice => choice.id === opponentChoice,
  ).imageUrl
  return (
    <ResultViewContainer>
      <ResultContainer>
        <UserChoiceConatiner>
          <UserChoiceHeading>YOU</UserChoiceHeading>
          <UserChoiceImage src={userChoiceImageUrl} alt="your choice" />
        </UserChoiceConatiner>
        <OpponentChoiceConatiner>
          <OpponentChoiceHeading>OPPONENT</OpponentChoiceHeading>
          <OpponentChoiceImage
            src={opponentChoiceImageUrl}
            alt="opponent choice"
          />
        </OpponentChoiceConatiner>
      </ResultContainer>
      <ResultAndPlayAgainContainer>
        <ResultHeading>{resultText}</ResultHeading>
        <PlayAgainButton type="button" onClick={handlePlayAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </ResultAndPlayAgainContainer>
    </ResultViewContainer>
  )
}

export default ResultView
