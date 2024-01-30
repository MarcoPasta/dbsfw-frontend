import { useState } from "react";
import CardsContainer from "./CardsContainer/CardsContainer";
import CheckboxBar from "./CheckboxBar/CheckBoxBar";
import { CheckboxState } from "../../services/interfaces";


export default function CardBox() {
    
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
            <CheckboxBar checkboxes={checkboxes} onCheckboxChange={handleChange}/>
            <CardsContainer checkboxes={checkboxes}/>
        </div>
        </>
    )
}