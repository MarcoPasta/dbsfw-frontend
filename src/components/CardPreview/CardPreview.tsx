import { Card } from "../../services/interfaces"


type CardPreviewProps = {
    hoveredCard?: Card
}

function DisplayCard({hoveredCard}: CardPreviewProps) {
    if (hoveredCard != undefined)
        return <img src={hoveredCard.image} width={400} alt={hoveredCard.name} />
}

export default function CardPreview({hoveredCard}: CardPreviewProps) {

    if(hoveredCard != undefined)
        console.log("CardPreview: ", hoveredCard.name)

    return (
        <div style={{backgroundColor: 'green'}}>
            <DisplayCard hoveredCard={hoveredCard} /> 
        </div>
    )
}