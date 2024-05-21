import { useReducer,useEffect } from "react";
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

 export const useStarredShows = ()=>{
    return usePersistedReducer(starredShowsreducer,[],'starredShows');
  }