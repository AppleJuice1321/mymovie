"use client"

export default function Sections(props) {
    return (
        <div>
            <div>
                <h1>{props.heading}</h1>
                <span>{props.expand}</span>
            </div>
        </div>
    )
}