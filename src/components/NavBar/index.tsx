import SelectBotButton from "../SelectBotButton"
import './style.css'

export default function NavBar() {
    return (
        <>
            <h1 className="title-page">Bem Vindos,</h1>
            <p className="title-description">/* selecione uma opção abaixo */</p>
            <div className="navbar">
                <SelectBotButton name="INÍCIO" href="/"></SelectBotButton>
                <SelectBotButton name="BOT UFOP" href="/botufop"></SelectBotButton>
                <SelectBotButton name="BOT UFOP RU" href="/botufopru"></SelectBotButton>
            </div>
        </>
    )
}