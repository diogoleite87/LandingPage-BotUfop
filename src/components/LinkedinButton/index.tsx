import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './style.css'

export default function LinkedinButton() {
    return (
        <a href="https://www.linkedin.com/in/diogoleitelucas/" className='icon-linkedin' target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
    )
}