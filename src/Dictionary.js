import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary()
{
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function updateKeywordChange(event)
  {
    setKeyword(event.target.value);
  }

  function handleResponse(response)
  {
    console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }

  function search(event)
  {
    event.preventDefault();

    // Documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary-box mt-5 p-3 border">
      <form onSubmit={search}>
        <div className="row">
          <div className="col-9 mb-3">
            <input type="search" placeholder="What do you have in mind?" autofocus="on" className="form-control" onChange={updateKeywordChange} />
          </div>
          <div className="col-3 mb-2">
            <input type="submit" value="Search" className="btn btn-success ms-2" />
          </div>
        </div>
      </form>
      <Results results={results} />
      <div className="col">
      <h3><span className="speakerIcon">🔉</span> Pronunciation</h3>
      </div>
    </div>
  )
}