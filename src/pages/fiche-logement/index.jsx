import React from 'react'
import Carousel from '../../components/Carousel'
import { useFetchById } from '../../utils/hooks'
import { Loader } from '../../utils/style/Loader'
import styled from 'styled-components'
import { useParams } from 'react-router'

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`
function FicheLogement() {
  const { id } = useParams()
  const { data, isLoading, error } = useFetchById(
    `http://localhost:3000/api/data.json`,
    id
  )

  if (error) {
    return <span>Oups il y a eu un problème</span>
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
          </div>
        )}
      </header>
    </div>
  )
}

export default FicheLogement
