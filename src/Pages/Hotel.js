import "./Hotel.css"
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import HotelCard from "../Components/HotelCard";
import HotelRoomS from "../../src/assets/HotelRoomS.jpg"
import HotelRoomP from "../../src/assets/HotelRoomP.jpg"
import HotelRoomF from "../../src/assets/HotelRoomF.jpg"
import Accessibility from "../Components/Accessibility";

const Hotel = () => {
    return (
        <div>
            <NavBar />
            <div className="Hotel-title"> Hotels
                <p className="HotelText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor neque, consequat id nulla ac, ultricies
                    volutpat lorem. In hac habitasse platea dictumst. Suspendisse pellentesque elementum ex, ut feugiat nulla
                    sodales id. Etiam tincidunt vitae ipsum at tristique. Morbi hendrerit tellus ut faucibus luctus. Aliquam dictum
                    imperdiet tellus non tincidunt. Vestibulum ipsum quam, rhoncus id ex vitae, porttitor aliquam quam</p>
            </div>

            <div className="HotelCardPosition">

                <HotelCard Price={""} Image={HotelRoomS} />
                <HotelCard Price={""} Image={HotelRoomP} />
                <HotelCard Price={""} Image={HotelRoomF} />

            </div>
            <Accessibility />
            <Footer  />
        </div>
    )
}

export default Hotel;