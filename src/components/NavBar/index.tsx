import React, { useContext } from 'react'
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import SelectBotButton from "../SelectBotButton"
import './style.css'

interface IProps {
    toggleTheme(): void;
}

export default function NavBar(props: IProps) {

    const { toggleTheme } = props

    const { colors, title } = useContext(ThemeContext);

    return (
        <>
            <h1 className="title-page">Bem Vindos,</h1>

            <div className="dark-mode">
                <p>Dark Mode: </p>
                <Switch
                    onChange={toggleTheme}
                    checked={title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    // height={20}
                    // width={40}
                    // handleDiameter={50}
                    offColor={colors.primary}
                    onColor={colors.secundary}
                />
            </div>
            <p className="title-description">/* selecione uma opção abaixo */</p>
            <div className="navbar">
                <SelectBotButton name="INÍCIO" href="/"></SelectBotButton>
                <SelectBotButton name="BOT UFOP" href="/botufop"></SelectBotButton>
                <SelectBotButton name="BOT UFOP RU" href="/botufopru"></SelectBotButton>
            </div>
        </>
    )
}