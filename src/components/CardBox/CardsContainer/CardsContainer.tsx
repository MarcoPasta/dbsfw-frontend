import { ReactNode } from "react"
import './CardsContainer.css'
import { Card, CheckboxState } from "../../../services/interfaces.ts"

type CardsContainerProps = {
    checkboxes: CheckboxState,
    cards: Card[],
    handleCardHover: (item: Card) => void
}

type ItemProps = {
    item: Card,
    checkboxes: CheckboxState
}

function Item({item, checkboxes}: ItemProps): ReactNode {
    let key: keyof typeof checkboxes
    for ( key in checkboxes) {
        if (item.color === key && checkboxes[key]) {
            return <img src={item.image} alt={item.name} width={120}/>
        }
    }
}

export default function CardsContainer({checkboxes, cards, handleCardHover}: CardsContainerProps) {

    const emptyCard: Card = {
        id: 0,
        name: "",
        color: "", 
        number: "",
        type: "",
        image: ""

    }

    return(
        <>
            <div style={{backgroundColor: 'red'}}>
                <ul>
                    {cards.map( item => (
                        <li key={item.id} onMouseOver={() => handleCardHover(item)} onMouseLeave={() => handleCardHover(emptyCard)}>
                            <Item item={item} checkboxes={checkboxes}/>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}