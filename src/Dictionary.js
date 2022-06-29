import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary()
{
  let [keyword, setKeyword] = useState("");

  function updateKeywordChange(event)
  {
    setKeyword(event.target.value);
  }

  function handleResponse(response)
  {
    // console.log(response.data[0]);
  }

  function search(event)
  {
    event.preventDefault();

    // Documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary mt-5 p-3 border">
      <form onSubmit={search}>
        <div className="row">
          <div className="col-6 mb-3">
            <input type="search" placeholder="What do you have in mind?" autofocus="on" className="form-control" onChange={updateKeywordChange} />
          </div>
          <div className="col-3 mb-2">
            <input type="submit" value="Search" className="btn btn-success ms-2" />
          </div>
        </div>
      </form>
      
      <div className="col">
      <h3><span className="speakerIcon">🔉</span> Pronunciation</h3>
        <div className="ms-3">
          <h4>Apple</h4>
          <ul>
            <li>ap·ple</li>
            <li className="phonetic">/'apəl/</li>
          </ul>
         
        </div>
      </div>
      <h3>Noun</h3>
      <ul className="nounUl">
        <li>the round fruit of a tree of the rose family, which typically has thin red 
        or green skin and crisp flesh. Many varieties have been developed 
        as dessert or cooking fruit or for making cider.</li>
        <li>the tree which bears apples.</li>
      </ul>
      <img src="https://i5.walmartimages.ca/images/Enlarge/094/514/6000200094514.jpg" alt="Walmart apple" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple.inc" />
      <img src="https://www.jardiner-malin.fr/wp-content/uploads/2021/09/pommier.jpg" alt="Pommier" />
      <img src="http://4.bp.blogspot.com/-o6g58a6fRG0/U1Pxya3QbiI/AAAAAAAAJMw/FAvqau4WTpQ/s1600/P4205939.JPG" alt="Apple pie" />
      
      
    </div>
  )
}