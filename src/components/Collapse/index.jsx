import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 35px;

  display: flex;
  flex-direction: column;
  background-color: ${colors.backgroundGallery};
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.primary};
  border-radius: 5px;
`
const Title = styled.h2`
  color: ${colors.background};
  margin-left: 20px;
`

const Button = styled.button`
  border: none;
  background: none;
  font-size: 30px;
  color: ${colors.background};
  margin-right: 20px;
  cursor: pointer;
`

const Content = styled.p`
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 24px;
  font-weight: 400;
  margin-left: 20px;
  margin-right: 20px;
  color: ${colors.primary};
`
const List = styled.ul`
  list-style: none;
  padding: 0;
`

const ListItem = styled.li`
  margin-bottom: 10px;
`
function TextCollapse({ title, content }) {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  const chevronIcon = isCollapsed ? faChevronDown : faChevronUp
  let renderedContent

  if (Array.isArray(content)) {
    renderedContent = (
      <List>
        {content.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
    )
  } else {
    renderedContent = content
  }

  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        <Button onClick={toggleCollapse}>
          <FontAwesomeIcon icon={chevronIcon} />
        </Button>
      </Header>
      {!isCollapsed && <Content>{renderedContent}</Content>}
    </Wrapper>
  )
}
export default TextCollapse
