import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython } from '@fortawesome/free-brands-svg-icons'

import Container from "../components/Container"

export default function BotUfopRU () {
    return(
        <Container title="bot ufop ru">
                <>
                    <>
                        <h2><span className="quest"> P. </span>Em qual linguagem de programação foi feito?</h2>
                        <p><span className="answer">R. </span>Feito inteiro em Python <FontAwesomeIcon icon={faPython} />, utiliza API do Twitter e faz Web Scraping com BeautifulSoup.</p>
                    </>
                    <>
                        <h2><span className="quest"> P. </span>Como funciona?</h2>
                        <p><span className="answer">R. </span>Explicando de forma que todos possam entender, ele faz um Web Scraping, basicamente ele abre o navegador e extrai todo o HTML (textos) do site do cardápio na UFOP, logo após obter esses dados, ele filtra e formata bonitinho para ser postado, respeitando o limite de 280 caracteres do twitter.</p>
                    </>
                    <>
                        <h2><span className="quest"> P. </span>Hoje ele não postou, o que pode ter acontecido?</h2>
                        <p><span className="answer">R. </span>A UFOP nem sempre atualiza o site do cardápio e mesmo quando atualiza, as vezes não atualizam "certo" e/ou não atualiza os 2 cardápios no dia.</p>
                    </>
                    <>
                        <h2><span className="quest"> P. </span>Cardápio aparente esta repetido, o que pode ter acontecido?</h2>
                        <p><span className="answer">R. </span>Mesmo motivo apresentado acima, por mais que eu tenha tentado fazer varias funções que evitasse a pastagem do cardápio desatualizado, algumas poucas vezes podem acontecer de passar batido.</p>
                    </>
                    <>
                        <h2><span className="quest"> P. </span>Legal, mas onde eu vejo a estrutura dele?</h2>
                        <p><span className="answer">R. </span>O código inteiro esta disponível no meu GitHub, basta copiar ou clicar no link: <a href="https://github.com/diogoleite87/BOT-TWITTER-UFOP-RU" target="_blank">github.com/diogoleite87/BOT-TWITTER-UFOP-RU</a></p>
                    </>
                </>
        </Container>
    )
}