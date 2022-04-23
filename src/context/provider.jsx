import React, { useReducer } from 'react'
import { MeetupContext } from './context';
import { MeetupReducer } from './reducer';

export const initialMeetup =  {id:'', title: '', image:'', address: '', description:''}

const init = {
  meetup: initialMeetup,
  allMeetups: [],
  favoritesMeetups: [],
  totalFavorites: 0,
};

export const MeetupProvider = ({ children }) => {
  const [MeetupState, dispatch] = useReducer(MeetupReducer, init);

  const setNewMeetup = (newMeetup) => {
    // const newId = init.allMeetups.length + 1;
    const newMeetupWithId = {...newMeetup, id: 4}
    dispatch({ type: 'SET_NEW_MEETUP', payload: newMeetupWithId })
  }

  const addNewMeetupOnList = (newMeetup) => {
    dispatch({ type: 'ADD_NEW_MEETUP_ON_ALL_MEETUPS', payload: newMeetup })
  }

  const setAllMeetups = (allMeetups) => {
    dispatch({ type: 'SET_ALL_MEETUPS', payload: allMeetups })
  }

  const addFavoriteMeetups = (newFavMeetup) => {
    dispatch({ type: 'ADD_FAVORITE_MEETUPS', payload: newFavMeetup })
  }

  const removeFavoriteMeetups = (oldFavMeetup) => {
    dispatch({ type: 'REMOVE_FAVORITE_MEETUPS', payload: oldFavMeetup })
  }

  const setTotalFavs = (allTotalFavs) => {
    dispatch({ type: 'SET_TOTAL_FAV_MEETUPS', payload: allTotalFavs })
  }

  const handleChange = (id, value) => {
    dispatch({ type: 'HANDLE_CHANGE_MEETUP_FORM', payload: { id, value } })
  }

  return (
    <MeetupContext.Provider
      value={{
        MeetupState,
        setNewMeetup,
        addNewMeetupOnList,
        setAllMeetups,
        addFavoriteMeetups,
        removeFavoriteMeetups,
        setTotalFavs,
        handleChange
      }}>
      {children}
    </MeetupContext.Provider>
  )
}
