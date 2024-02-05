import './App.css'
import DeckInfo from './components/ DeckInfo'
import CardBox from './components/CardBox/CardBox'
import CardPreview from './components/CardPreview/CardPreview'
import DeckBuilder from './components/DeckBuilder/DeckBuilder'

function App() {
  return (
    <div className='container'>
      <div className='component'>
        <CardPreview/>
      </div>
      <div className='component'>
        <DeckBuilder/>
      </div>
      <div className='component'>
        <DeckInfo/>
      </div>
      <div className='component'>
        <CardBox/>
      </div>
    </div>
  )
}

export default App
