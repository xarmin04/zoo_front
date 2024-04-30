import "./HotelCard.css"
import HotelRoomS from "../../src/assets/HotelRoomS.jpg"

const HotelCard = ({ Price, Image, }) => {
    return (
        <div className="HotelCard">
            <img src={Image} className="HotelImage"></img>
            
            <div className="HotelDescribtion">   Aliquam porttitor lectus velit, at pulvinar nibh congue ut. Nunc facilisis justo et justo euismod pellentesque eu et dui. Vestibulum erat ligula, sodales mollis neque sit amet, fringilla sagittis arcu. Pellentesque in accumsan sapien, in iaculis mi. Praesent nunc dui, tincidunt vel neque nec, varius facilisis felis. Quisque sed blandit urna. Morbi augue ligula, varius et egestas ut, lobortis vitae lorem.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam est id scelerisque tempor. Donec interdum, eros tempor accumsan porta, orci nibh rutrum nisi, nec dapibus lacus odio eget purus. Aliquam porttitor lectus velit, at pulvinar nibh congue ut. Nunc facilisis justo et justo euismod pellentesque eu et dui. Vestibulum erat ligula, sodales mollis neque sit amet, fringilla sagittis arcu. Pellentesque in accumsan sapien, in iaculis mi. Praesent nunc dui, tincidunt vel neque nec, varius facilisis felis. Quisque sed blandit urna. Morbi augue ligula, varius et egestas ut, lobortis vitae lorem.</div>
            
            <div className="HotelPriceTag"> Price: {Price} </div>
           
        </div>
    )
}

export default HotelCard;