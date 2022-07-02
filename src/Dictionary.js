import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props)
{
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function updateKeywordChange(event)
  {
    setKeyword(event.target.value);
  }

  function handleDictionaryResponse(response)
  {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response)
  {
    setPhotos(response.data.photos);
  }

  function search()
  {
    // Documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = "563492ad6f91700001000001376d79217ad04e7896eb2d1f8bff6ff8";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = {"Authorization" : `Bearer ${pexelsApiKey}`}
    axios.get(pexelsApiUrl, { headers: headers,}).then(handlePexelsResponse);
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
        <Photos photos={photos} />
      </div>
    )
  }
  else
  {
    load();
    return "Loading for results...";
  }

}