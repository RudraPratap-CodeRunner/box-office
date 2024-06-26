import React from "react";
import { Link } from "react-router-dom";

const ActorCard = ({ name, image, country, gender, birthday, deathday }) => {
  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>

      <p>{country ? `Comes from ${country}` : "No country known"}</p>

      {!!birthday && <p>Born {birthday}</p>}

      <p>{deathday ? `Died ${deathday}` : "Alive"}</p>
    </div>
  );
};

export default ActorCard;
