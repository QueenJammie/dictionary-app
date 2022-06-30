import React from "react";

export default function Antonyms(props)
{
  if (props.antonyms)
  {
    return (
      <div>
        <strong>Antonyms: </strong>
        <ul className="Antonyms ps-3">
          {props.antonyms.map(function(antonym, index) {
            return (
              <li key={index}>
                {antonym}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
  else
  {
    return null;
  }
}