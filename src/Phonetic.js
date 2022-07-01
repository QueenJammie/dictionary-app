import React from "react";
import "./Phonetic.css";

export default function Phonetic(props)
{
    return (
        console.log(props),
        <div className="Phonetic">
            <p><a href={props.phonetic.audio} target="_blank" rel="noreferrer" className="a-btn me-2"><span className="speakerIcon">🔉</span>Listen to phonetic</a>
            <span className="text">{props.phonetic.text}</span><br />
            <a href={props.phonetic.sourceUrl} target="_blank" rel="noreferrer" className="sourceUrl">{props.phonetic.sourceUrl}</a></p>
        </div>
    );
}