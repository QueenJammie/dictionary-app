import React from "react";
import "./meaning.css";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {
  return (
    <div className="meaning border rounded p-3 mb-1">
      <h3 className="text-capitalize">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="box meaning-box">
            <ul>
              <p className="mb-2">
                <strong>Definition:</strong> {definition.definition}
                <br />
                {definition.example && (
                  <em>
                    <strong>Examples:</strong> <span className="examples">{definition.example}</span>
                    <br />
                  </em>
                )}
                <Synonyms synonyms={definition.synonyms} />
                <Antonyms antonyms={definition.antonyms} />
              </p>
            </ul>
          </div>
        );
      })}
    </div>
  );
}