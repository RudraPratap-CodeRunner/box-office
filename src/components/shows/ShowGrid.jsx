import React, { useEffect } from "react";
import ShowCard from "./ShowCard";
import { useReducer } from "react";

// {type:'STAR',showId:''}
// {type:'UNSTAR',showId:''}

const usePersistedReducer = (reducer,initialState,localStoragekey)=>{
  const [state,dispatch] = useReducer(reducer,initialState,(initial)=>{
    const persisitedValue = localStorage.getItem(localStoragekey);

    return persisitedValue?JSON.parse(persisitedValue):initial;
  });
  useEffect(()=>{
    localStorage.setItem(localStoragekey,JSON.stringify(state));
  },[state,localStoragekey])
  return [state,dispatch];
}

const starredShowsreducer = (currentStarred, action) => {
  switch (action.type) {
    case "STAR":
      return currentStarred.concat(action.showId);
    case "UNSTAR":
      return currentStarred.filter((showId) => showId !== action.showId);
    default:
      return currentStarred;
  }
};

const ShowGrid = ({ shows }) => {
  const [starredShows, dispatchStarred] = usePersistedReducer(starredShowsreducer,[],'starredShows');
  
  const onStarMeClick = (showId) => {
    const isStarred = starredShows.includes(showId);
    if (isStarred) {
      dispatchStarred({ type: "UNSTAR", showId });
    } else {
      dispatchStarred({ type: "STAR", showId });
    }
  };
  console.log(starredShows);
  return (
    <div>
      {shows.map((data) => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={
            data.show.image ? data.show.image.medium : "/not-found-image.png"
          }
          summary={data.show.summary}
          onStarMeClick={onStarMeClick}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
