import React from "react";
import "./meaning.css";

export default function Meaning(props)
{
  return (
    <div className="meaning border p-3 mb-1">
      <h3 className="text-capitalize">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function(definition, index) {
        return (
          <div key={index}>
            <ul>
              <li className="mb-2">{definition.definition}</li>
              <li>{definition.exemple}</li>
            </ul>
          </div>
        )
      })}
      
      
    </div>
  );
}