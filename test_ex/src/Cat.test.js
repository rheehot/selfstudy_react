import { render, screen } from "@testing-library/react";
import { Cat } from "./Cat";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Cat", () => {
  test("cat page 잘 뜨나요?", () => {
    render(
      <MemoryRouter>
        <Cat />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: "고양이 추가하기" });
    userEvent.click(button);

    screen.debug();

    expect(screen.getAllByText("고양이가 2 마리 있어요!")).toBeTruthy();
  });
});
