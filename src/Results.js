import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic"; 

export default function Results(props)
{
  if (props.results)
  {
    return (
      <div className="Results">
        <h2 className="text-capitalize">{props.results.word}</h2>
        {props.results.phonetics.map(function(phonetic, index) {
          return (
            <div key={index} className="mb-3">
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
        {props.results.meanings.map(function(meaning, index) {
          return (
          <div key={index}>
            <Meaning meaning={meaning} />
          </div>
          );
        })}
        <div className="col">
      </div>
      </div>
    );
  }
  else
  {
    return null;
  } 
}