import './DeckBuilder.css'
import { ReactNode, useEffect, useState } from "react";
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
    
    const [deckColor, setdeckColor] = useState<String>()

    const handleSetDeck = (item?: Card) => {
        
        // hier könnte man toasts machen

        // If it's the first card being added it will determine the decks deckColor
        if(deck.length === 0 && item !== undefined) {
            console.log("First Card uniquedeckColor: ", deckColor);
            setdeckColor(item.color)
            setDeck((prevDeck) => [...prevDeck, item])
        }
        else if(
            item != undefined    
            // Limit amount of Leaders to 1
            && deck.filter((card) => card.type === "Leader" && card.type === item.type).length < 1
            // Limit each else card to 4
            && deck.filter((card) => card.id === item.id).length < 4
            && item.color === deckColor
            && deck.length < 60
        ) {
            console.log("This should not be on first card");
            setDeck((prevDeck) => ([...prevDeck, item]))
        }
    }

    const sortByNumber = () => {
        setDeck((prevDeck) => ([...prevDeck.sort((act, prev) => {
            if(act.number < prev.number)
            // if act is smaller than the previus one, place it in front
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