import React from "react";
import { render, screen } from "@testing-library/react";
import { Linkees } from "../Linkees";
import { CHANNEL_TYPES } from "../../types";

const mockCardItems = [
  {
    type: CHANNEL_TYPES.GITHUB,
    title: "GitHub",
    subtitle: "Check out my code",
    link: "https://github.com/johndoe",
  },
  {
    type: CHANNEL_TYPES.TWITTER,
    title: "Twitter",
    subtitle: "Follow me",
    link: "https://twitter.com/johndoe",
  },
];

describe("Linkees Component", () => {
  it("renders with required props", () => {
    render(<Linkees name="John Doe" cardItems={mockCardItems} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("Twitter")).toBeInTheDocument();
  });

  it("renders with avatar", () => {
    render(
      <Linkees
        name="John Doe"
        cardItems={mockCardItems}
        headerAvatar="https://example.com/avatar.jpg"
      />
    );

    const avatar = screen.getByAltText("John Doe's avatar");
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute("src", "https://example.com/avatar.jpg");
  });

  it("applies theme correctly", () => {
    const { container } = render(
      <Linkees name="John Doe" cardItems={mockCardItems} theme="dark" />
    );

    expect(container.firstChild).toHaveAttribute("data-theme", "dark");
  });

  it("shows footer by default", () => {
    render(<Linkees name="John Doe" cardItems={mockCardItems} />);

    expect(screen.getByText(/Made with/)).toBeInTheDocument();
  });

  it("hides footer when showFooter is false", () => {
    render(
      <Linkees name="John Doe" cardItems={mockCardItems} showFooter={false} />
    );

    expect(screen.queryByText(/Made with/)).not.toBeInTheDocument();
  });

  it("renders custom footer", () => {
    const customFooter = <div>Custom Footer Content</div>;

    render(
      <Linkees
        name="John Doe"
        cardItems={mockCardItems}
        customFooter={customFooter}
      />
    );

    expect(screen.getByText("Custom Footer Content")).toBeInTheDocument();
    expect(screen.queryByText(/Made with/)).not.toBeInTheDocument();
  });
});
