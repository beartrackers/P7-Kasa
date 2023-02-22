import Card from '../Card'
import colors from '../../utils/style/colors'
import styled from 'styled-components'

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-item: center;
  border-radius: 25px;
  width: 90%;
  margin: auto;
  margin-top: 45px;
  margin-bottom: 45px;
  background-color: ${colors.backgroundGallery};
`
let items = []
async function getProducts() {
  //   Récupération des pièces depuis l'API HTTP
  const reponse = await fetch('http://localhost:3000/api/data.json')

  items = await reponse.json()
}

function Gallery() {
  getProducts()
  let cardTab = items

  return (
    <GalleryWrapper>
      {cardTab.map((aCardTab) => (
        <Card
          key={aCardTab.id}
          title={aCardTab.title}
          picture={aCardTab.cover}
        />
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
