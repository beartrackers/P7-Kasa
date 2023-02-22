import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const TextCollapseDiv = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.backgroundGallery};
`

const TextHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.primary};
  border-radius: 5px;
`
const TextCollapseTitle = styled.h2`
  color: ${colors.background};
  margin-left: 20px;
`

const TextCollapseButton = styled.button`
  border: none;
  background: none;
  font-size: 30px;
  color: ${colors.background};
  margin-right: 20px;
  cursor: pointer;
`

const TextCollapsed = styled.p`
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 24px;
  font-weight: 400;
  margin-left: 20px;
  margin-right: 20px;
  color: ${colors.primary};
`

function TextCollapse({ title, text }) {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <TextCollapseDiv>
      <TextHeaderDiv>
        <TextCollapseTitle>{title}</TextCollapseTitle>
        <TextCollapseButton onClick={toggleCollapse}>
          {isCollapsed ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </TextCollapseButton>
      </TextHeaderDiv>
      {!isCollapsed && <TextCollapsed>{text}</TextCollapsed>}
    </TextCollapseDiv>
  )
}
export default TextCollapse
