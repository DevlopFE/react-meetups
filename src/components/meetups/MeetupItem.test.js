/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import MeetupItem from "./MeetupItem";

test("<MeetupItem/> renders without crashing", () => {
  const image = 'https://images.freeimages.com/images/large-previews/a31/colorful-umbrella-1176220.jpg'
  const mockMeetup = {id:'m5', title: 'mock title', image: image, address: 'mock Address', description:'mock description'}
  const wrapper = shallow(<MeetupItem meetup={mockMeetup} key={mockMeetup.id} />);
  expect(wrapper.exists()).toBe(true);
});
