import Card from '../Card'
import colors from '../../utils/style/colors'
import styled from 'styled-components'

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  align-items: center;
  border-radius: 25px;
  width: 90%;
  margin: auto;
  margin-top: 45px;
  margin-bottom: 45px;
  background-color: ${colors.backgroundGallery};

  @media (max-width: ${colors.breakpoint}) {
    background-color: #ffffff;
    flex-direction: column;

    width: 100%;
  }
`
function Gallery(props) {
  return (
    <GalleryWrapper>
      {props.cardTab.map((aCardTab) => (
        <Card
          key={aCardTab.id}
          id={aCardTab.id}
          title={aCardTab.title}
          picture={aCardTab.cover}
        />
      ))}
    </GalleryWrapper>
  )
}

export default Gallery
