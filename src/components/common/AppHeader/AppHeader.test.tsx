import { render, screen } from "@testing-library/react";
import { AppHeader } from "./AppHeader";
import { MemoryRouter } from "react-router-dom";
import { userEvent } from "@testing-library/user-event";
import AppSlider from "./AppSlider";
import type { Mock } from "vitest";

const renderAppHeader = () => {
  return render(
    <MemoryRouter>
      <AppHeader />
    </MemoryRouter>,
  );
};

const renderAppSlider = (
  props: { isSliderOpen: boolean; onClose: () => void },
  initialRoute = "/",
) => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppSlider {...props} />
    </MemoryRouter>,
  );
};

describe("AppHeader TEST", () => {
  test("AppHeader에 로고 이미지가 랜더링 된다.", () => {
    renderAppHeader();
    const image = screen.getByAltText("LOGO");

    expect(image).toHaveAttribute("src", "./svg/react.svg");
    expect(image).toHaveAttribute("alt", "LOGO");
  });
});

describe("AppSlider TEST", () => {
  let mockOnClose: Mock<() => void>;

  beforeEach(() => {
    mockOnClose = vi.fn();
  });

  test("슬라이더 안에 모든 네비게이션 아이템이 랜더링 된다.", () => {
    renderAppSlider({ isSliderOpen: true, onClose: mockOnClose });

    expect(screen.getByText("카테고리")).toBeInTheDocument();
  });

  test("오버레이 클릭 시 onClose가 호출된다", async () => {
    const user = userEvent.setup();
    const { container } = renderAppSlider({ isSliderOpen: true, onClose: mockOnClose });

    const overlay = container.querySelector(".bg-black\\/40");
    expect(overlay).toBeInTheDocument();

    await user.click(overlay!);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test("닫기 버튼(X) 클릭 시 onClose가 호출된다", async () => {
    const user = userEvent.setup();
    renderAppSlider({ isSliderOpen: true, onClose: mockOnClose });

    const closeButton = screen.getByRole("button", { name: /close/i });

    await user.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test("네비게이션 링크를 클릭해도 각 onClose가 호출된다.", async () => {
    const user = userEvent.setup();
    renderAppSlider({ isSliderOpen: true, onClose: mockOnClose });

    // 홈 링크 클릭
    await user.click(screen.getByText("홈"));
    expect(mockOnClose).toHaveBeenCalledTimes(1);

    // 인기 링크 클릭
    await user.click(screen.getByText("인기"));
    expect(mockOnClose).toHaveBeenCalledTimes(2);
  });

  test("/popular 경로에서 '인기' 링크 스타일이 활성화 된다.", async () => {
    renderAppSlider({ isSliderOpen: true, onClose: mockOnClose }, "/popular");

    const popularLink = screen.getByText("인기").closest("a");
    expect(popularLink).toHaveClass("text-white");

    const homeLink = screen.getByText("홈").closest("a");
    expect(homeLink).toHaveClass("text-muted-foreground");
  });
});
