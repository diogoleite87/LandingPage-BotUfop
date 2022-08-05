import './style.css'
import { ReactNode } from "react";

interface IProps {
    children?: ReactNode
    title: string
}

export default function Container(props: IProps) {

    const { children, title } = props

    return (
        <>
            <h2 className='title'>{title}</h2>
            <div className="container">
                <div className='text'>
                    {children}
                </div>
            </div>
        </>
    )
}