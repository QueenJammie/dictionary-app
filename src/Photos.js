import React from "react";
import "./Photos.css";

export default function Photos(props)
{
  if (props.photos)
  {
    return (
      <div className="photos">
        <div className="row">
        {props.photos.map(function(photo, index) {
          return (
            <div className="photo col-4">
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img src={photo.src.landscape} alt={photo.alt} key={index} className="#" id="img-fluid photo" />
              </a>
              <strong>{photo.alt}</strong> by <a href={photo.photographer_url} alt="Photographer" key={index} target="_blank" rel="noreferrer" className="photographer">{photo.photographer}</a>
            </div>
          )
        })}
        </div>
      </div>
    );
  }
  else
  {
      return null;
  }
}