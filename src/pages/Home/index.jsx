// import Card from '../../components/Card'
import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'
import BannerImg from '../../assets/IMGBanner.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner quote="Chez vous, partout et ailleurs" picture={BannerImg} />
        <Gallery />
      </header>
    </div>
  )
}

export default App
