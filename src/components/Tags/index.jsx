import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const TextListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const TextListItem = styled.div`
  min-width: 115px;
  height: 25px;
  margin: 10px;
  padding-left: 5px;
  padding-right: 5px;
  background-color: ${colors.primary};
  border-radius: 10px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`

function TagList({ data }) {
  return (
    <TextListContainer>
      {data.map((text, index) => (
        <TextListItem key={index}>{text}</TextListItem>
      ))}
    </TextListContainer>
  )
}

export default TagList
