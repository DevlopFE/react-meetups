import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '../../utils/test-utils'
import NewMeetupForm from './NewMeetupForm';

describe('Component <NewMeetupForm />', () => {

  test('it renders', () => {
    const { getByLabelText } = render(<NewMeetupForm />);
    const title = getByLabelText(/Meetup Title/i);
    expect(title).toBeInTheDocument();
  })

})
