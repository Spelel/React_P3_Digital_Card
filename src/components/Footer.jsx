import Twitter from '../assets/twitter-sign.png'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Github from '../assets/github.png'
export default function Foote() {
    return<>
    <section className='icons'>
        <img src={Twitter} alt="twitter"/>
        <img src={Facebook} alt="facebok"/>
        <img src={Instagram} alt="instagram"/>
        <img src={Github} alt="github"/>
    </section>
    </>
}