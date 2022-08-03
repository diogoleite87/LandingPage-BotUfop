import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import './style.css'

export default function InstagramButton() {
    return (
        <a href="https://www.instagram.com/diogo.leiite" className='icon-instagram' target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
    )
}