import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import {
  RulesViewContainer,
  RulesButton,
  RulesContainer,
  RulesHeader,
  CloseButton,
  RulesBody,
  RulesImage,
} from './styledComponents'

const RulesView = () => (
  <RulesViewContainer>
    <Popup modal trigger={<RulesButton type="button">RULES</RulesButton>}>
      {close => (
        <RulesContainer>
          <RulesHeader>
            <CloseButton type="button" onClick={close}>
              <RiCloseLine />
            </CloseButton>
          </RulesHeader>
          <RulesBody>
            <RulesImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </RulesBody>
        </RulesContainer>
      )}
    </Popup>
  </RulesViewContainer>
)

export default RulesView
