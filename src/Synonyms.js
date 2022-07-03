import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length === 1) {
    return (
      <div>
        <strong>Synonym: </strong>
        <ul className="Synonyms ps-3">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  }
  if (props.synonyms && props.synonyms.length > 1) {
    return (
      <div>
        <strong>Synonyms: </strong>
        <ul className="Synonyms ps-3">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  }
  else {
    return null;
  }
}