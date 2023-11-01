

const Card = ({name,type,frameType,desc,race,archetype,card_sets, card_images}) => {
    return (
        <div >
            
           <h2>name:{name}</h2>
           <h2>type: {type}</h2>
           <h2>frametype: {frameType}</h2>
           <h2>description: {desc}</h2>
           <h2>race: {race}</h2>
           <h2>archetype: {archetype}</h2>
           <h2>card_sets: {card_sets}</h2>
           <img src={card_images} alt="" />
        </div>
    )

}

export default Card;