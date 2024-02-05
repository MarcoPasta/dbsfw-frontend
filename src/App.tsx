import { useEffect, useState } from 'react'
import './App.css'
import DeckInfo from './components/ DeckInfo'
import CardBox from './components/CardBox/CardBox'
import CardPreview from './components/CardPreview/CardPreview'
import DeckBuilder from './components/DeckBuilder/DeckBuilder'
import { Card } from './services/interfaces'
import { FetchCards } from './services/api'


function App() {


  // const[url, setUrl] = useState("http://localhost:3000/api/cards/")
  const url = "http://localhost:3000/api/cards/"
  // Arrays with retrieved cards
  const[cards, setCards] = useState<Card[]>([])
  const[hoveredCard, setHoveredCard] = useState<Card>()
  
  async function fetchDataFromApi() {
      try {
          setCards([])
          const result = await FetchCards(url)
          setCards(result)
      } catch (error) {
          console.error
      }
  }

  useEffect(() => {
      let ignore = false
      if (!ignore)
          fetchDataFromApi()

      return () => { ignore = true }
  }, [url])

  const handleCardHover = (item: Card) => {
    setHoveredCard(item)
  }

  return (
    <div className='container'>
      <div className='component'>
        <CardPreview hoveredCard={hoveredCard}/>
      </div>
      <div className='component'>
        <DeckBuilder/>
      </div>
      <div className='component'>
        <DeckInfo/>
      </div>
      <div className='component'>
        <CardBox cards={cards} handleCardHover={handleCardHover} />
      </div>
    </div>
  )
}

export default App
