import { useState } from 'react'
import './App.css'
import DeckInfo from './components/ DeckInfo'
import CardBox from './components/CardBox/CardBox'
import CardPreview from './components/CardPreview/CardPreview'
import DeckBuilder from './components/DeckBuilder/DeckBuilder'
import { Card } from './services/interfaces'
import Navbar from './Navbar/Navbar'


function App() {
  const [hoveredCard, setHoveredCard] = useState<Card>()
  const [pickedCard, setPickedCard] = useState<Card>()
  const [deck, setDeck] = useState<Card[]>([])

  const handleCardHover = (item: Card) => {
    setHoveredCard(item)
  }

  const handlePickedCard = (item: Card) => {
    // Mit dem Spread Operator hats dann funktioniert weil hier mit einer neuen
    // Speicheradresse verglichen wird anstatt mit demselben Objekt 
    // Garbage Collection erfolgt automatisch
    setPickedCard({...item})
  }


  return (
    <>

      <div className='container'>
        <div className='navbar'>
          <Navbar/>
        </div>
        <div className='subcontainer'>

        <div className='component' style={{zIndex: 2}}>
          <CardPreview hoveredCard={hoveredCard}/>
        </div>
        <div className='component' style={{zIndex: 1}}>
          <DeckInfo deck={deck}/>
        </div>
        <div className='component'>
          <DeckBuilder deck={deck} setDeck={setDeck} pickedCard={pickedCard} handleCardHover={handleCardHover}/>
        </div>
        <div className='component'>
          <CardBox handlePickedCard={handlePickedCard} handleCardHover={handleCardHover} />
        </div>
        </div>
      </div>

    </>
  )
}

export default App
