import { useContext } from 'react';
import { MeetupContext } from '../context/context';


export const useMeetup = () => {

    const { 
      MeetupState,
      setNewMeetup,
      setAllMeetups,
      addFavoriteMeetups,
      removeFavoriteMeetups,
      setTotalFavs,
      handleChange,
      addNewMeetupOnList } = useContext( MeetupContext );

    return {
      MeetupState,
      setNewMeetup,
      setAllMeetups,
      addFavoriteMeetups,
      removeFavoriteMeetups,
      setTotalFavs,
      handleChange,
      addNewMeetupOnList
    }
}
