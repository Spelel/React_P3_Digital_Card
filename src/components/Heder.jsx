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
                <button><img src={Icon} /> Email</button>
            </div>
    </section>
    </>
}