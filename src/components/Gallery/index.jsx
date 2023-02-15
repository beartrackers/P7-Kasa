import Card from '../Card'
import colors from '../../utils/style/colors'
import styled from 'styled-components'

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: ${colors.backgroundGallery};
`

function Gallery() {
  let cardTab = [
    'image1',
    'image2',
    'image3',
    'image4',
    'image5',
    'image6',
    'image7',
    'image8',
    'image9',
  ]

  return (
    <GalleryWrapper>
      {cardTab.map((aCardTab) => (
        <Card />
      ))}

      {/* <Card title='maison 1'/>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
    </GalleryWrapper>
  )
}

export default Gallery
