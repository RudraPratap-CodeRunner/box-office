import React from 'react'
import { useStarredShows } from '../lib/useStarredShows';
import { useQuery } from '@tanstack/react-query';
import { getShowById, getShowByIds } from '../api/tvmaze';
import ShowGrid from '../components/shows/ShowGrid';

const Starred = () => {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows,error:starredShowsError } = useQuery({
    queryKey:  ["starred", starredShowsIds],
    queryFn:async () =>getShowByIds(starredShowsIds).then(result=>result.map(show =>({show }))),
      

    refetchOnWindowFocus:false
  });

  if(starredShows?.length===0){
    return <div>No shows were starred</div>
  }

  if(starredShows){
    return <ShowGrid shows={starredShows}/>
  }
  if(starredShowsError){
    return <div>Error occured:{starredShowsError.message}</div>
  }

  return (
    <div>Data still loading</div>
  )
}

export default Starred