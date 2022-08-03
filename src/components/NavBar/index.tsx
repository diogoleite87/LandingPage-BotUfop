import SelectBotButton from "../SelectBotButton"
import './style.css'

export default function NavBar() {
    return (
        <div className="navbar">
            <SelectBotButton name="INÍCIO" href="/"></SelectBotButton>
            <SelectBotButton name="BOT UFOP" href="/botufop"></SelectBotButton>
            <SelectBotButton name="BOT UFOP RU" href="/botufopru"></SelectBotButton>
        </div>
    )
}