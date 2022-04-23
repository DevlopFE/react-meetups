
export const MeetupReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NEW_MEETUP':
      return { ...state, meetup: action.payload }
      case 'ADD_NEW_MEETUP_ON_ALL_MEETUPS':
        return { ...state, allMeetups: [...state.allMeetups, action.payload] }
    case 'SET_ALL_MEETUPS':
      return { ...state, allMeetups: action.payload }
    case 'ADD_FAVORITE_MEETUPS':
      return { ...state, favoritesMeetups: [...state.favoritesMeetups, action.payload] }
    case 'REMOVE_FAVORITE_MEETUPS':
      const newList = state.favoritesMeetups.filter(meetup => meetup.id !== action.payload.id)
      return { ...state, favoritesMeetups: newList }
    case 'SET_TOTAL_FAV_MEETUPS':
      return { ...state, totalFavorites:  action.payload }
    case 'HANDLE_CHANGE_MEETUP_FORM':
      return { ...state, meetup:  {...state.meetup, [action.payload.id]:action.payload.value } }
    default:
      return state;
  }
}
