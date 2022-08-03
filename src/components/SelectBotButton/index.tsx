import { NavLink } from "react-router-dom";
import './style.css'

interface IProps {
    name: string;
    href: string;
}

export default function SelectBotButton(props: IProps) {

    const { name, href } = props

    return (
        <>
            <NavLink to={href}>
                <a className="buttonSelect">{name}</a>
            </NavLink>
        </>
    )
}