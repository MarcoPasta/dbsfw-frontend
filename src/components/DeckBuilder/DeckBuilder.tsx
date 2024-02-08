import './DeckBuilder.css'
import { ReactNode, useEffect, useState } from "react";
import { Card } from "../../services/interfaces"
import { EMPTY_CARD } from '../../services/constants';

type DeckBuilderProps = {
    pickedCard?: Card,
    handleCardHover: (item: Card) => void
}

type ItemProps = {
    item: Card
}

function Item({item}: ItemProps): ReactNode {
    if (item != undefined) {
        return (
                <img src={item.image} alt={item.name} width={120}/>
        )
    }
}
    
export default function DeckBuilder({pickedCard, handleCardHover}: DeckBuilderProps) {
    const [deck, setDeck] = useState<Card[]>([])

    const handlerSetDeck = (item?: Card) => {
        // Check if the same id occures less than 4 times
        if(deck.filter((x) => x.id === item?.id).length < 4 && item != undefined) {
            setDeck([...deck, item])
        }
    }

    const sortByNumber = () => {
        setDeck((prevDeck) => ([...prevDeck.sort((next, prev) => {
            if(next.number < prev.number)
            // if next (the actual element) is smaller than the previus one, place it in front
                return -1
            else
                return 1
        })]))
    } 

    const handlerPopItem = (item: Card) => {
        setDeck(deck.filter( x => x !== item))
    } 
    
    useEffect(() => {
        handlerSetDeck(pickedCard)
        sortByNumber()
    }, [pickedCard])
    
    return (
        <div>
            <div style={{backgroundColor: 'lightblue'}}>
                <ul>
                    {deck.map( (item, index) => (
                        // Index + Timestamp
                        <li 
                            key={index + Date.now()}
                            onMouseOver={() => handleCardHover(item)}
                            onMouseLeave={() => handleCardHover(EMPTY_CARD)}
                            onClick={() => handlerPopItem(item)}
                        >
                            <Item item={item} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}