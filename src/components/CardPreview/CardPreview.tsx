import { Card } from "../../services/interfaces"


type CardPreviewProps = {
    hoveredCard?: Card
}

function DisplayCard({hoveredCard}: CardPreviewProps) {
    if (hoveredCard != undefined)
        return <img src={hoveredCard.image} width={400} alt={hoveredCard.name} />
}

export default function CardPreview({hoveredCard}: CardPreviewProps) {

    return (
        <div>
            <div style={{position: "absolute"}}>CardPreview</div>
            <DisplayCard hoveredCard={hoveredCard}/> 
        </div>
    )
}