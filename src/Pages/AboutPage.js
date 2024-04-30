import "./AboutPage.css"
import NavBar from "../Components/NavBar";
import Aboutpageimg from "../../src/assets/ZebraAboutPage.jpg"
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Accessibility from "../Components/Accessibility";

const AboutPage = () => {
    return (
        <div className="AboutPage">

            <NavBar />

            <img className="AboutPageImg" src={Aboutpageimg} />

            <div className="Title2">About us</div>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor neque, consequat id nulla ac, ultricies
                volutpat lorem. In hac habitasse platea dictumst. Suspendisse pellentesque elementum ex, ut feugiat nulla
                sodales id. Etiam tincidunt vitae ipsum at tristique. Morbi hendrerit tellus ut faucibus luctus. Aliquam dictum
                imperdiet tellus non tincidunt. Vestibulum ipsum quam, rhoncus id ex vitae, porttitor aliquam quam</p>

            <div className="CardPositionAboutPage">
                <Card />
                <Card />
                <Card />
            </div>
            <div className="MoreInfoArticlesTitle">
                More Information
                </div>
            <div className="MoreInfoArticles">
                <Card />
                <Card />
                <Card />
            </div>
            <Accessibility/>
            <Footer/>
        </div>
    )
}

export default AboutPage;