import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import './style.css'

export default function GitHubButton() {
    return (
        <a href="https://github.com/diogoleite87" className='icon-github' target="_blank"><FontAwesomeIcon icon={faGithubAlt} /></a>
    )
}