import "./Maps.css"
import NavBar from "../Components/NavBar";

const Maps = () => {
    return(     
        <div>
            <NavBar/>
           <iframe className="ZooMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.796759638947!2d-0.15600522281902268!3d51.53528747181967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad73297f857%3A0xb1723f26e03c12a8!2sLondon%20Zoo!5e0!3m2!1sen!2suk!4v1713868318595!5m2!1sen!2suk"></iframe>
        </div>
    )
}

export default Maps;