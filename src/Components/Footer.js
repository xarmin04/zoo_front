import "./Footer.css"

const Footer = () => {
    return(
        <div className="footer">
          

          <a href="/Terms&Condition"><button >Terms & Condition</button></a>
          <a href='/PrivacyPolicy'><button >Privacy Policy</button></a>
          <a href="/ContactUs"><button>Contact Us</button> </a>
          <a href="/AboutPage"><button>About Us</button> </a>
        </div>
    )
}

export default Footer;