import './CardPreview.css'
import { Card } from "../../services/interfaces"


type CardPreviewProps = {
    hoveredCard?: Card
}

function DisplayCard({hoveredCard}: CardPreviewProps) {
    if (hoveredCard != undefined)
        return (
            <div className='image-container'>
                <img src={hoveredCard.image} alt={hoveredCard.name} className='preview-image'/>
            </div>
        )
}

export default function CardPreview({hoveredCard}: CardPreviewProps) {

    return (
        <div className='cardpreview'>
            <DisplayCard hoveredCard={hoveredCard}/> 
        </div>
    )
}