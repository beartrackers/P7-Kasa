import React from 'react'
import Carousel from '../../components/Carousel'
import { useFetchById } from '../../utils/hooks'
import { Loader } from '../../utils/style/Loader'
import styled from 'styled-components'
import { Redirect, useParams } from 'react-router'
import RatingStars from '../../components/StarRating'
import TextCollapse from '../../components/Collapse'
import TagList from '../../components/Tags'
import colors from '../../utils/style/colors'
import Host from '../../components/Host'

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const PlaceDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`
const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: ${colors.breakpoint}) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
  }
`
const Title = styled.p`
  color: ${colors.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  margin-bottom: 0;
`
const Location = styled.p`
  color: ${colors.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
`
const DescWrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  @media (max-width: ${colors.breakpoint}) {
    flex-direction: column;
  }
`

const CollapseDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  margin: auto;
  gap: 40px;

  @media (max-width: ${colors.breakpoint}) {
    flex-direction: column;
  }
`
function FicheLogement() {
  const { id } = useParams()
  const { data, isLoading, error } = useFetchById(
    `http://localhost:3000/api/data.json`,
    id
  )

  if (error || !data) {
    return <Redirect to="/error" />
  }
  return (
    <div className="App">
      <header className="App-header">
        {isLoading ? (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        ) : (
          <div className="App">
            <Carousel images={data.pictures} />
            <DescWrapper>
              <PlaceDiv>
                <Title>{data.title}</Title>
                <Location>{data.location}</Location>
                <TagList data={data.tags} />
              </PlaceDiv>
              <RightDiv>
                <Host dataHost={data.host} />
                <RatingStars rating={data.rating} />
              </RightDiv>
            </DescWrapper>
            <CollapseDiv>
              <TextCollapse title="Description" content={data.description} />
              <TextCollapse title="Équipements" content={data.equipments} />
            </CollapseDiv>
          </div>
        )}
      </header>
    </div>
  )
}

export default FicheLogement
