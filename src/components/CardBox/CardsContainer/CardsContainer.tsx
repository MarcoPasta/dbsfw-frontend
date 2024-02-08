import { ReactNode, useEffect, useState } from "react"
import './CardsContainer.css'
import { Card, CheckboxState } from "../../../services/interfaces.ts"
import { FetchCards } from "../../../services/api.ts"

type CardsContainerProps = {
    checkboxes: CheckboxState,
    handleCardHover: (item: Card) => void,
    handlePickedCard: (item: Card) => void
}

type ItemProps = {
    item: Card,
    checkboxes: CheckboxState,
    handlePickedCard: (item: Card) => void,
    handleCardHover: (item: Card) => void
}
const emptyCard: Card = {
    id: 0,
    name: "",
    color: "", 
    number: "",
    type: "",
    image: ""
}

function Item({item, checkboxes, handlePickedCard, handleCardHover}: ItemProps): ReactNode {
    let key: keyof typeof checkboxes
    for ( key in checkboxes) {
        if (item.color === key && checkboxes[key]) {
            return (
                <li 
                    onClick={() => handlePickedCard(item)} 
                    onMouseOver={() => handleCardHover(item)} 
                    onMouseLeave={() => handleCardHover(emptyCard)}
                >
                    <img src={item.image} alt={item.name} width={120}/>
                </li>
            )
        }
    }
}

export default function CardsContainer({checkboxes, handlePickedCard, handleCardHover}: CardsContainerProps) {
    
    // const[url, setUrl] = useState("http://localhost:3000/api/cards/")
    const url = "http://localhost:3000/api/cards/"
    // Arrays with retrieved cards
    const[cards, setCards] = useState<Card[]>([])
    // generate random UUID for <li> keys
    
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


    return(
        <>
            <div style={{backgroundColor: 'pink'}}>
                <ul>
                    {cards.map( item => (
                        <Item key={item.id} item={item} checkboxes={checkboxes} handlePickedCard={handlePickedCard} handleCardHover={handleCardHover}/>
                    ))}
                </ul>
            </div>
        </>
    )
}