import { ReactNode, useEffect, useState } from "react"
import './CardsContainer.css'

import { FetchCards } from '../../../services/api.ts'
import { Card, CheckboxState } from "../../../services/interfaces.ts"

type CardsContainerProps = {
    checkboxes: CheckboxState,
}

interface ItemProps {
    item: Card,
    checkboxes: CheckboxState
}

function Item({item, checkboxes}: ItemProps): ReactNode {
    let key: keyof typeof checkboxes
    for ( key in checkboxes) {
        if (item.color === key && checkboxes[key]) {
            return <img src={item.image} alt={item.name} width={250}/> // 120
        }
    }
}

export default function CardsContainer({checkboxes}: CardsContainerProps) {
    const[url, setUrl] = useState("http://localhost:3000/api/cards/")
    // Arrays with retrieved cards
    const[cards, setCards] = useState<Card[]>([])
    
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
            <div style={{backgroundColor: 'red'}}>
                <ul>
                    {cards.map( item => (
                        <li key={item.id}>
                            <Item item={item} checkboxes={checkboxes} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}