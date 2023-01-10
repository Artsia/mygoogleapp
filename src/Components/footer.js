
import "./footer.css";

const link = "https://www.freecodecamp.org/news/entry-level-tech-job-guide/";

function Footer() {

    return (
        <div className="container-main">

            <div className="spaceClass">

            </div>

            <div className="Container-one">
                <p>Canada</p>
            </div>

            <div className="container-two">
                <div className="three-items">
                    <p><a href={link}>Advertsing</a></p>
                    <p><a href={link}>Bussiness</a></p>
                    <p><a href={link}>How Search Works</a></p>
                </div>

                <div>
                    <p><a href={link}>Privacy</a></p>
                    <p><a href={link}>Terms</a></p>
                    <p><a href={link}>Settings</a></p>
                </div>
            </div>
        </div>

    )
}



export default Footer;