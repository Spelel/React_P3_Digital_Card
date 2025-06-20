import Pic from "../assets/IMG_3857.jpg"
import Icon from '../assets/black-envelope.png'
export default function Heder() {
    return <>
    <section className="hederSection">
            <img src={Pic} alt="Profile Img" />
            <div className="sectionInfo">
                <h2>Arkadiusz K.</h2>
                <h4>Pending Frontend Developer</h4>
                <p>later</p>
                <a href="https://external-preview.redd.it/Ka4CNgYfh8xkCZ0Oy_KPxFqeRDdw6_qY9cwgwk2rGx4.gif?width=300&format=mp4&s=1cda16ca59bad647bf22e62af2b149574a8eff1f"><img src={Icon} /> Email</a>
            </div>
    </section>
    </>
}