import './DeckBuilder.css'
import { ReactNode, useEffect } from "react";
import { Card } from "../../services/interfaces"
import { EMPTY_CARD } from '../../services/constants';

type DeckBuilderProps = {
    deck: Card[],
    setDeck: (value: React.SetStateAction<Card[]>) => void,
    pickedCard?: Card,
    handleCardHover: (item: Card) => void
}

type ItemProps = {
    item: Card,
    handleCardHover: (item: Card) => void,
    handlePopItem: (item: Card) => void
}

function Item({item, handleCardHover, handlePopItem}: ItemProps): ReactNode {
    if (item != undefined) {
        return (
            <li 
                onMouseOver={() => handleCardHover(item)}
                onMouseLeave={() => handleCardHover(EMPTY_CARD)}
                onClick={() => {handlePopItem(item); handleCardHover(EMPTY_CARD)}}
            >
                <img src={item.image} alt={item.name} width={120}/>
            </li>
        )
    }
}
    
export default function DeckBuilder({deck, setDeck, pickedCard, handleCardHover}: DeckBuilderProps) {
    
    const handleSetDeck = (item?: Card) => {
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

    const handlePopItem = (item: Card) => {
        setDeck(deck.filter( x => x !== item))
    } 
    
    useEffect(() => {
        handleSetDeck(pickedCard)
        sortByNumber()
    }, [pickedCard])
    
    return (
        <div className='deckbuilder'>
            <ul>
                {deck.map( (item, index) => (
                    // Index + Timestamp
                    <Item item={item} handleCardHover={handleCardHover} handlePopItem={handlePopItem} key={index + Date.now()}/>
                ))}
            </ul>
        </div>
    )
}