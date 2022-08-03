import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'

import Container from "../components/Container"

export default function BotUfop () {
    return(
        <Container title="bot ufop">
                <>
                    <>
                        <h2>Em qual linguagem de programação foi feito?</h2>
                        <p>Feito inteiro em JavaScript <FontAwesomeIcon icon={faNodeJs} />, utiliza API do Twitter e uma de data, mais precisamente o Moment.JS, já que usando a nativa do JavaScript ocorriam muitos bugs.</p>
                    </>
                    <>
                        <h2>Como funciona?</h2>
                        <p>Explicando de forma que todos possam entender, ele simplesmente verifica a data do evento em questão e compara com o dia da postagem, retornando os dias que faltam junto com a frase pré definida. Se a data for o mesmo do dia da postagem, ele sinaliza que finalmente chegou o evento em questão.</p>
                    </>
                    <>
                        <h2>Por que ele não posta todos os dias?</h2>
                        <p>Imagina todo dia ele postar a mesma coisa, causaria um spam desnecessário na timeline de seus seguidores. Pensando nisso, se faltar mais de 50 dias a postagem é feita a cada 5 dias. Se faltar entre 30 e 50 dias é feito a cada 3 dias. Se faltar entre 7 e 30 dias a postagem é feita a cada 2 dias. Por fim, nos últimos 7 dias é feito postagens diárias.</p>
                    </>
                    <>
                        <h2>Legal, mas onde eu vejo a estrutura dele?</h2>
                        <p>O código inteiro esta disponível no meu GitHub, basta copiar ou clicar no link: <a href="https://github.com/diogoleite87/BOT-TWITTER-UFOP" target="_blank">github.com/diogoleite87/BOT-TWITTER-UFOP</a></p>
                    </>
                </>
        </Container>
    )
}