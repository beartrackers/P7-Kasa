import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const HostContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin: auto;
  margin-right: 0;
  margin-bottom: 16px;
`

const HostName = styled.h3`
  color: ${colors.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
`

const HostImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-left: 16px;
`

function Host(dataHost) {
  return (
    <HostContainer>
      <HostName>{dataHost.dataHost.name}</HostName>
      <HostImage src={dataHost.dataHost.picture} alt={dataHost.dataHost.name} />
    </HostContainer>
  )
}

export default Host
