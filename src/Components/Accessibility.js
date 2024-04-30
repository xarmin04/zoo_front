import "./Accessibility.css"
import ThemeButton from "./ThemeToggleButton.js"
import { IoAccessibility } from "react-icons/io5";
import { useState } from "react"

const Accessibility = () => {

    const [isOpen, setIsOpen] = useState()

    const Navopen = () => {
        setIsOpen(!isOpen)
    }

    return (

            <div className={`Bar ${isOpen ? "Open" : ""}`} >
              

                <button className="Access_panel" onClick={Navopen}><IoAccessibility color="white" size={25}/> </button>
                  
                <ThemeButton/>
            </div>
         

    )
}

export default Accessibility;