import {Component} from 'react'

import GameView from '../GameView'

import ResultView from '../ResultView'

import RulesView from '../RulesView'

import {
  RockPaperScissorsContainer,
  GameHeader,
  HeadingsContainer,
  Heading,
  ScoreContainer,
  ScoreHeading,
  Score,
} from './styledComponents'

export default class RockPaperScissors extends Component {
  state = {
    score: 0,
    userChoice: '',
    opponentChoice: '',
    resultText: 'YOU WON',
    showResult: false,
  }

  setUserChoice = id => {
    const {choicesList} = this.props
    const opponentChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)].id
    this.setState({userChoice: id, opponentChoice}, () => {
      const {userChoice} = this.state
      let resultText
      let scoreChange

      if (
        (userChoice === 'ROCK' && opponentChoice === 'SCISSORS') ||
        (userChoice === 'SCISSORS' && opponentChoice === 'PAPER') ||
        (userChoice === 'PAPER' && opponentChoice === 'ROCK')
      ) {
        resultText = 'YOU WON'
        scoreChange = 1
      } else if (userChoice === opponentChoice) {
        resultText = 'IT IS DRAW'
        scoreChange = 0
      } else {
        resultText = 'YOU LOSE'
        scoreChange = -1
      }

      this.setState(prevState => ({
        score: prevState.score + scoreChange,
        resultText,
        showResult: !prevState.showResult,
      }))
    })
  }

  handlePlayAgain = () => this.setState({showResult: false})

  render() {
    const {choicesList} = this.props
    const {
      score,
      showResult,
      userChoice,
      opponentChoice,
      resultText,
    } = this.state
    return (
      <RockPaperScissorsContainer>
        <GameHeader>
          <HeadingsContainer>
            <Heading>ROCK PAPER SCISSORS</Heading>
          </HeadingsContainer>
          <ScoreContainer>
            <ScoreHeading>Score</ScoreHeading>
            <Score>{score}</Score>
          </ScoreContainer>
        </GameHeader>
        {!showResult ? (
          <GameView
            choicesList={choicesList}
            setUserChoice={this.setUserChoice}
          />
        ) : (
          <ResultView
            choicesList={choicesList}
            userChoice={userChoice}
            opponentChoice={opponentChoice}
            resultText={resultText}
            handlePlayAgain={this.handlePlayAgain}
          />
        )}
        <RulesView />
      </RockPaperScissorsContainer>
    )
  }
}
