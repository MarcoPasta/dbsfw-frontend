import { useState } from "react";
import CardsContainer from "./CardsContainer/CardsContainer";
import CheckboxBar from "./CheckboxBar/CheckBoxBar";
import { Card, CheckboxState } from "../../services/interfaces";


type CardBoxProps = {
    handleCardHover: (item: Card) => void,
    handlePickedCard: (item: Card) => void
}

export default function CardBox({handlePickedCard, handleCardHover}: CardBoxProps) {
    
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
        <div>
            <div>
                <CheckboxBar checkboxes={checkboxes} onCheckboxChange={handleChange}/>
            </div>
            <CardsContainer checkboxes={checkboxes} handlePickedCard={handlePickedCard}handleCardHover={handleCardHover}/>
        </div>
        </>
    )
}