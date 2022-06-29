import React from "react";
import Meaning from "./Meaning";

export default function Results(props)
{
  if (props.results)
  {
    return (
      <div className="Results">
        <h2 className="text-capitalize">{props.results.word}</h2>
        {props.results.meanings.map(function(meaning, index) {
          return (
          <div key={index}>
            <Meaning meaning={meaning} />
          </div>
          );
        })}
        <div className="col">
      <h3><span className="speakerIcon">🔉</span> Pronunciation</h3>
      </div>
      </div>
    );
  }
  else
  {
    return null;
  } 
}