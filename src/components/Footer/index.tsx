import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import './style.css'

import GitHubButton from '../GitHubButton'
import InstagramButton from '../InstragamButton'
import LinkedinButton from '../LinkedinButton'
import TwitterButton from '../TwitterButton'

export default function Footer() {
    return (

        <>
            <div>
                <p>Site construído em React <FontAwesomeIcon icon={faReact} /> e TypeScript!</p>
            </div>
            <div className='icons'>
                <TwitterButton/>
                <GitHubButton/>
                <InstagramButton/>
                <LinkedinButton/>
            </div>
            <div className='footer'>
                <p>**Não possui vínculos com a instituição</p>
                <p>Desenvolvido e mantido por
                    <a href="https://github.com/diogoleite87" target="_blank"> Diogo Leite.</a>
                </p>
            </div>
        </>
    )
}