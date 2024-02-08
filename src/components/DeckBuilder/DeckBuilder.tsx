import './DeckBuilder.css'
import { ReactNode, useEffect, useState } from "react";
import { Card } from "../../services/interfaces"

type DeckBuilderProps = {
    pickedCard?: Card
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
    
export default function DeckBuilder({pickedCard}: DeckBuilderProps) {
    const [deck, setDeck] = useState<Card[]>([])

    const handlerSetDeck = (item?: Card) => {
        // Check if the same id occures less than 4 times
        if(deck.filter((x) => x.id === item?.id).length < 4 && item != undefined) {
            setDeck([...deck, item])
        }
    }

    useEffect(() => {
        handlerSetDeck(pickedCard)
    }, [pickedCard])
    
    return (
        <div>
            <div style={{backgroundColor: 'lightblue'}}>
                <ul>
                    {deck.map( (item, index) => (
                        // Index + timestamp
                        <li key={index + Date.now()}>
                            <Item item={item}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}