import "./Card.css"



const Card = ({link,name }) => {
    return (
        <div>
            <a href={link}>
        <div className="Card1" >
          <div className="cardName">{name}</div>
          
        </div>
        </a>
         </div>
    )
}

export default Card;