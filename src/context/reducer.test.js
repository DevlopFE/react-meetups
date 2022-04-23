import '@testing-library/jest-dom/extend-expect'
import { MeetupReducer } from './reducer';

describe('MeetupReducer />', () => {

  const initialMeetup =  {id:'', title: '', image:'', address: '', description:''}
  const mockMeetup = {id:'m5', title: 'mock title', image:'mock.jpg', address: 'mock Address', description:'mock description'}
  const mockAllMeetups = [{id:'m1', title: 'mock title1', image:'mock1.jpg', address: 'mock Address1', description:'mock description1'}]
  
  const initialValue = {
    meetup: initialMeetup,
    allMeetups: [],
    favoritesMeetups: [],
    totalFavorites: 0,
  };

  const initialValueLoaded = { ...initialValue, favoritesMeetups: mockAllMeetups, totalFavorites: 1};

  test('Default value is on state', () => {
    const state = MeetupReducer(initialValue, {type: '@@INIT'});
    expect(state).toEqual(initialValue)
  })

  test('Should set a Meetup', () => {
    const action =  {
      type: 'SET_NEW_MEETUP',
      payload: mockMeetup
    };
    const state = MeetupReducer(initialValue, action);
    expect(state.meetup.id).toEqual(mockMeetup.id)
    expect(state.meetup.title).toEqual(mockMeetup.title)
    expect(state.meetup.image).toEqual(mockMeetup.image)
    expect(state.meetup.address).toEqual(mockMeetup.address)
    expect(state.meetup.description).toEqual(mockMeetup.description)
  })

  test('Should add a new Meetup on allmeetups list', () => {
    const action =  {
      type: 'ADD_NEW_MEETUP_ON_ALL_MEETUPS',
      payload: mockMeetup
    };
    const state = MeetupReducer(initialValue, action);
    expect(state.allMeetups.length).toBe(1)
  })

  test('Should add a new Meetup on favs list', () => {
    const action =  {
      type: 'ADD_FAVORITE_MEETUPS',
      payload: mockMeetup
    };
    const state = MeetupReducer(initialValueLoaded, action);
    expect(state.favoritesMeetups.length).toBe(2)
  })

  test('Should remove a new Meetup on favs list', () => {
    const action =  {
      type: 'REMOVE_FAVORITE_MEETUPS',
      payload: mockMeetup
    };
    const state = MeetupReducer(initialValueLoaded, action);
    expect(state.favoritesMeetups.length).toBe(1)
  })
})

