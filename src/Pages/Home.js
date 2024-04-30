import "./Home.css"
import NavBar from "../Components/NavBar";
import Imagelion from "../../src/assets/LionHomepage.jpg";
import Footer from "../../src/Components/Footer.js";
import Accessibility from "../Components/Accessibility.js";
import Card from "../Components/Card.js";

const Home = () => {
    return (
        <div>
            <NavBar />
            <img className="Image1" src={Imagelion} />

            <div className="NavbuttonHome">
                <a href="/Hotel"><button>book a Hotel</button></a>
                <a href="/ZooTickets"><button>Zoo tickets</button></a></div>


            <div className="Title1">
                <div className="TitleFont"> Our Zoo </div>

                <div className="CardPostionHome">
                    <Card link={"/Animals"} name="Animals"/>
                    <Card link={"/Maps"} name="Map" />
                    <Card link={"/Education"} name="Education" />
                </div>
            </div>
            <div className="CostumerReviewCard">
                <div className="ReviewFont">What others say</div>
                <div className="ReviewBox"><text className="ReviewTxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tortor neque, consequat id nulla ac, ultricies volutpat lorem.
                    In hac habitasse platea dictumst.luctus. Aliquam dictum
                    imperdiet tellus non tincidunt. Vestibulum ipsum quam,
                    rhoncus id ex vitae, porttitor aliquam quam.</text> </div>
                <div className="ReviewBox2"><text className="ReviewTxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tortor neque, consequat id nulla ac, ultricies volutpat lorem.
                    In hac habitasse platea dictumst.luctus. Aliquam dictum
                    imperdiet tellus non tincidunt. Vestibulum ipsum quam,
                    rhoncus id ex vitae, porttitor aliquam quam.</text> </div>
                <div className="ReviewBox3"><text className="ReviewTxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tortor neque, consequat id nulla ac, ultricies volutpat lorem.
                    In hac habitasse platea dictumst.luctus. Aliquam dictum
                    imperdiet tellus non tincidunt. Vestibulum ipsum quam,
                    rhoncus id ex vitae, porttitor aliquam quam.</text> </div>
                <div className="ReviewBox4"><text className="ReviewTxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tortor neque, consequat id nulla ac, ultricies volutpat lorem.
                    In hac habitasse platea dictumst.luctus. Aliquam dictum
                    imperdiet tellus non tincidunt. Vestibulum ipsum quam,
                    rhoncus id ex vitae, porttitor aliquam quam.</text> </div>
            </div>




            <Accessibility />
            <Footer />
        </div>
    )
}

export default Home;