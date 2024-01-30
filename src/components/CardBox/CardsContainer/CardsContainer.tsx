import React, { useEffect, useState } from "react"
import { FetchCards } from '../../../services/api.ts'
import { Card, CheckboxState } from "../../../services/interfaces.ts"

type CardsContainerProps = {
    checkboxes: CheckboxState
}

export default function CardsContainer({checkboxes}: CardsContainerProps) {
    
    const[url, setUrl] = useState("http://localhost:3000/api/cards/")

    const collor = "red"
    console.log(url + collor)

    // Arrays with retrieved cards
    const[cards, setCards] = useState<Card[]>([])

    const[cardBuffer, setCardBuffer] = useState<Card[]>([])
    const[redCards, setRedCards] = useState<Card[]>([])
    const[blueCards, setBlueCards] = useState<Card[]>([])
    const[greenCards, setGreenCards] = useState<Card[]>([])
    const[yellowCards, setYellowCards] = useState<Card[]>([])
    
    async function fetchDataFromApi(color: string) {
        try {
            const result = await FetchCards(url + color)
            setCardBuffer(result)
        } catch (error) {
            console.error
        }
    }
    
    useEffect(() => {
        if(checkboxes.red === true){
            fetchDataFromApi('red')
        }
        if(checkboxes.blue === true) {
            fetchDataFromApi('blue')
        }
        if(checkboxes.green === true) {
            fetchDataFromApi('green')
        }
        if(checkboxes.yellow === true) {
            fetchDataFromApi('yellow')
        }
    }, [checkboxes, url])

    useEffect(() => {
        setRedCards((prevRedCards) => [...prevRedCards, ...cardBuffer])
        setBlueCards((prevBlueCards) => [...prevBlueCards, ...cardBuffer])
        setGreenCards((prevGreenCards) => [...prevGreenCards, ...cardBuffer])
        setYellowCards((prevYellowCards) => [...prevYellowCards, ...cardBuffer])

        setCardBuffer([])
    }, [cardBuffer, checkboxes])

    useEffect(() => {
        setCards([])
        const fillCards = () => {
            setCards([...redCards, ...blueCards, ...greenCards, ...yellowCards])
        }
        fillCards()
    }, [redCards, blueCards, greenCards, yellowCards])

    return(
        <>
            <div>
                <p>CardContainer Component</p> 
                <ul style={{display: "flex", listStyleType: "none", padding: 0}}>
                    {cards.map( item => (
                        <li key={item.id}>
                            <p>{item.name}</p>
                            <img src={item.image} alt={item.type} width={250} style={{margin: "0 10px"}}/>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}