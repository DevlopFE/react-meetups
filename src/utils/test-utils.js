import React from 'react'
import {render} from '@testing-library/react'
import { MeetupProvider } from '../context/provider'
import { BrowserRouter } from 'react-router-dom';

const AllTheProviders = ({children}) => {
  return (
    <MeetupProvider>
          <BrowserRouter>
        {children}
          </BrowserRouter>
    </MeetupProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}