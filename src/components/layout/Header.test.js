import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '../../utils/test-utils'
import { Header } from './Header';

describe('Component <Header />', () => {

  test('it renders', () => {
    const { getByText } = render(<Header />);
    const title = getByText(/React Meetups/i);
    expect(title).toBeInTheDocument();
  })

})
