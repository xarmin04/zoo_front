import "./Education.css"
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import ImgEducational from "../../src/assets/EducationPageImg.jpg"
import Accessibility from "../Components/Accessibility";
import Card from "../Components/Card";

const Education = () => {
    return (
        <div>
            <NavBar />
            <img className="EducationPageImage" src={ImgEducational}/>
            <div className="EdArticlesTitle">
            Education Page
                </div>
                <p className="TxtEd" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor neque, consequat id nulla ac, ultricies
                volutpat lorem. In hac habitasse platea dictumst. Suspendisse pellentesque elementum ex, ut feugiat nulla
                sodales id. Etiam tincidunt vitae ipsum at tristique. Morbi hendrerit tellus ut faucibus luctus. Aliquam dictum
                imperdiet tellus non tincidunt. Vestibulum ipsum quam, rhoncus id ex vitae, porttitor aliquam quam</p>
            <div className="ArticleEd">
            <Card/>
            <Card/>
            <Card/>
            </div>
            
            <Accessibility/>
            <Footer />

            <footer />
        </div>
    )
}

export default Education;