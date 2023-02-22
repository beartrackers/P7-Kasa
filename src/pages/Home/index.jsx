// import Card from '../../components/Card'
import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'
import BannerImg from '../../assets/IMGBanner.png'
import { useFetch } from '../../utils/hooks'
import styled from 'styled-components'
import { Loader } from '../../utils/style/Loader'
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`
function App() {
  const { data, isLoading, error } = useFetch(
    `http://localhost:3000/api/data.json`
  )

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }
  return (
    <div className="App">
      <header className="App-header">
        <Banner quote="Chez vous, partout et ailleurs" picture={BannerImg} />
        {isLoading ? (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        ) : (
          <Gallery cardTab={data}>{data}</Gallery>
        )}
      </header>
    </div>
  )
}

export default App
