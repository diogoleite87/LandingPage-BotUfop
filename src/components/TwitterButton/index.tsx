import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import './style.css'

export default function TwitterButton() {
    return (
        <a href="https://twitter.com/DiogoL87" className='icon-twitter' target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
    )
}