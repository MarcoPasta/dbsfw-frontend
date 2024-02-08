import { Card } from "../services/interfaces"


type DeckInfoProps = {
    deck: Card[]
}

const handleButtonClick = (deck: Card[]) => {
    console.log(deck);
    
}

export default function DeckInfo({deck}: DeckInfoProps) {

    // TODOS:
    // - import button: import a .json file
    // - download button: download a .json file
    // - name input: name a deck before saving
    // - save button: save a deck in the database
    // - load button: load a deck from database -? 
    //- search section? 

    return (
        <div>
           <div>
                <input type="button" value="Download" onClick={() => handleButtonClick(deck)}/>
           </div>
        </div>
    )
}