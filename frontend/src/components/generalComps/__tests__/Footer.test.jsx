import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Footer from "../Footer"
describe("Footer", () => {
  test("renders the footer element", () => {
    render(<Footer />)
    const footerElement = screen.getByRole("contentinfo")
    expect(footerElement).toBeInTheDocument()
  })
  test("renders the correct social media links", () => {
    render(<Footer />)
    const twitterLink = screen.getByRole("link", { name: /twitter/i })
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i })
    const githubLink = screen.getByRole("link", { name: /github/i })
    expect(twitterLink).toBeInTheDocument()
    expect(twitterLink).toHaveAttribute("href", "https://twitter.com/TFuray")
    expect(linkedinLink).toBeInTheDocument()
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/tfuray/"
    )
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute("href", "https://github.com/TFuray")
  })
  test("renders the copyright text", () => {
    render(<Footer />)
    const copyrightText = screen.getByText(/copyright © 2023 - @TFuray/i)
    expect(copyrightText).toBeInTheDocument()
  })
  test("navigates to the correct social media links when clicked", () => {
    render(<Footer />)
    const twitterLink = screen.getByRole("link", { name: /twitter/i })
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i })
    const githubLink = screen.getByRole("link", { name: /github/i })
    userEvent.click(twitterLink)
    expect(window.location.href).toBe("http://localhost:3000/")
    userEvent.click(linkedinLink)
    expect(window.location.href).toBe("http://localhost:3000/")
    userEvent.click(githubLink)
    expect(window.location.href).toBe("http://localhost:3000/")
  })
})
