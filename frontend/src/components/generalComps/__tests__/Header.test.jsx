import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import { store } from "../../../app/store"
import Header from "../Header"
// Test rendering of Header component when the user is logged in
test("renders Header component with user logged in", () => {
  render(
    <Router>
      <Provider store={store}>
        <Header />
      </Provider>
    </Router>
  )
  const linkElement = screen.getByText(/What's for Dinner?/i)
  expect(linkElement).toBeInTheDocument()
})
// Test rendering of Header component when the user is not logged in
test("renders Header component with user not logged in", () => {
  render(
    <Router>
      <Provider store={store}>
        <Header />
      </Provider>
    </Router>
  )
  const loginLink = screen.getByText(/Login/i)
  expect(loginLink).toBeInTheDocument()
  const registerLink = screen.getByText(/Register/i)
  expect(registerLink).toBeInTheDocument()
})
// Test clicking on the Login link/
test("clicking the Login link", () => {
  render(
    <Router>
      <Provider store={store}>
        <Header />
      </Provider>
    </Router>
  )
  const loginLink = screen.getByText(/Login/i)
  fireEvent.click(loginLink)
})
