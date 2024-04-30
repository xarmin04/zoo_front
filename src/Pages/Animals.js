import Card from "../Components/Card"
import "./Animals.css"


const Animals = () => {
    return(
        <div>
            <h1 className="Animals-title">Animals</h1>
        <div className="CardAnimals">
        <Card/>
        <Card/>
        <Card/>
        </div>
        <div className="CardAnimals1">
        <Card/>
        <Card/>
        <Card/>
        </div>
        </div>
    )
}

export default Animals;