import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props)
{
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function updateKeywordChange(event)
  {
    setKeyword(event.target.value);
  }

  function handleResponse(response)
  {
    setResults(response.data[0]);
  }

  function search()
  {
    // Documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event)
  {
    event.preventDefault();
    search();
  }

  function load()
  {
    setLoaded(true);
    search();
  }

  if (loaded)
  {
    return (
      <div className="Dictionary-box mt-5 p-3 border">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9 mb-3">
              <input type="search" placeholder="What do you have in mind?" autofocus="on" 
              defaultValue={props.defaultKeyword} className="form-control" onChange={updateKeywordChange} />
            </div>
            <div className="col-3 mb-2">
              <input type="submit" value="Search" className="btn btn-success ms-2" />
            </div>
          </div>
        </form>
        <Results results={results} />
      </div>
    )
  }
  else
  {
    load();
    return "Loading for results...";
  }

}