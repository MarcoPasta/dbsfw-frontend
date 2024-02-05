import { useState } from "react";
import CardsContainer from "./CardsContainer/CardsContainer";
import CheckboxBar from "./CheckboxBar/CheckBoxBar";
import { Card, CheckboxState } from "../../services/interfaces";


type CardBoxProps = {
    cards: Card[],
    handleCardHover: (item: Card) => void
}

export default function CardBox({cards, handleCardHover}: CardBoxProps) {
    
    const [checkboxes, setCheckboxes] = useState<CheckboxState>({
        red: false, 
        blue: false,
        green: false, 
        yellow: false
    })
    
    const handleChange = (checkboxName: keyof CheckboxState) => {
        setCheckboxes((prevCheckboxes) => ({
            ...prevCheckboxes,
            [checkboxName]: !prevCheckboxes[checkboxName],
        }));
    };

    return(
        <>
        <div className="container">
            <CheckboxBar checkboxes={checkboxes} onCheckboxChange={handleChange}/>
            <CardsContainer cards={cards} checkboxes={checkboxes} handleCardHover={handleCardHover}/>
        </div>
        </>
    )
}