import React from "react";

export default function Phonetic(props)
{
    return (
        console.log(props),
        <div className="Phonetic">
            <p><a href={props.phonetic.audio} target="_blank" rel="noreferrer"><span className="speakerIcon">🔉</span>Listen to phonetic</a><br />
            {props.phonetic.text}<br />
            <a href={props.phonetic.sourceUrl} target="_blank" rel="noreferrer" className="text-smaller text-italic">{props.phonetic.sourceUrl}</a></p>
        </div>
    );
}