import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/navbar";
import "@testing-library/jest-dom";

describe("Navbar", () => {
  const renderNavbar = (initialEntry: string = "/") => {
    return render(
      <MemoryRouter initialEntries={[initialEntry]}>
        <Navbar />
      </MemoryRouter>
    );
  };

  test("renders all nav links with labels", () => {
    renderNavbar();

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(4);
    expect(
      screen.getByRole("link", {
        name: /about/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /resume/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /contact/i })).toBeInTheDocument();
  });

  test("highlights the active route", () => {
    renderNavbar("/projects");

    const activeLink = screen.getByRole("link", { name: /projects/i });
    const inactiveLink = screen.getByRole("link", { name: /about/i });

    expect(activeLink).toHaveClass("bg-red-300");
    expect(inactiveLink).not.toHaveClass("bg-red-300");
  });

  test("links point to correct paths", () => {
    renderNavbar();

    expect(screen.getByRole("link", { name: /about/i })).toHaveAttribute(
      "href",
      "/"
    );
    expect(screen.getByRole("link", { name: /resume/i })).toHaveAttribute(
      "href",
      "/resume"
    );
    expect(screen.getByRole("link", { name: /projects/i })).toHaveAttribute(
      "href",
      "/projects"
    );
    expect(screen.getByRole("link", { name: /contact/i })).toHaveAttribute(
      "href",
      "/contact"
    );
  });
});
