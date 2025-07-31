import "@testing-library/jest-dom";

jest.mock("framer-motion", () => ({
  motion: {
    div: "div",
  },
}));

Object.defineProperty(window, "open", {
  writable: true,
  value: jest.fn(),
});
