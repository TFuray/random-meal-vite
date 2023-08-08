import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import configureStore from "redux-mock-store"
import thunk from 'redux-thunk'
import Header from "../Header"

describe("Header Component", () => {
  const middlewares = [thunk]
  const mockStore = configureStore(middlewares)


  it("renders properly when a user is logged in", () => {
    const initialState = {
      auth: {
        user: {
          /* mock user object */
        },
      },
    }
    const store = mockStore(initialState)

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    )

    // Add assertions to test if the header elements are rendered properly for a logged-in user.
    expect(screen.getByText("What's for Dinner?")).toBeInTheDocument()
    // ... add more assertions as needed
  })

  it("renders properly when no user is logged in", () => {
    const initialState = {
      auth: {
        user: null,
      },
    }
    const store = mockStore(initialState)

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    )

    // Add assertions to test if the header elements are rendered properly for a logged-out user.
    expect(screen.getByText("What's for Dinner?")).toBeInTheDocument()
    // ... add more assertions as needed
  })

  it("calls logout function when Logout button is clicked", () => {
    const initialState = {
      auth: {
        user: {
          /* mock user object */
        },
      },
    }
    const store = mockStore(initialState)

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    )

    const logoutButton = screen.getByText("Logout")
    fireEvent.click(logoutButton)

    // Add assertions to check if the logout function is called and the user is navigated.
    // You might need to mock useDispatch and useNavigate.
    // ... add more assertions as needed
  })
})
