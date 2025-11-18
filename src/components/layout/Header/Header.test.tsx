import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { userEvent } from "@testing-library/user-event";
import type { Mock } from "vitest";
import { Header } from "./Header";
import Slider from "./Slider";

const renderHeader = () => {
  return render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );
};

const renderSlider = (
  props: { isSliderOpen: boolean; onClose: () => void },
  initialRoute = "/",
) => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <Slider {...props} />
    </MemoryRouter>,
  );
};

describe("Header TEST", () => {
  test("Header에 로고 이미지가 랜더링 된다.", () => {
    renderHeader();
    const image = screen.getByAltText("LOGO");

    expect(image).toHaveAttribute("src", "./svg/react.svg");
    expect(image).toHaveAttribute("alt", "LOGO");
  });
});

describe("Slider TEST", () => {
  let mockOnClose: Mock<() => void>;

  beforeEach(() => {
    mockOnClose = vi.fn();
  });

  test("슬라이더 안에 모든 네비게이션 아이템이 랜더링 된다.", () => {
    renderSlider({ isSliderOpen: true, onClose: mockOnClose });

    expect(screen.getByText("카테고리")).toBeInTheDocument();
  });

  test("오버레이 클릭 시 onClose가 호출된다", async () => {
    const user = userEvent.setup();
    const { container } = renderSlider({ isSliderOpen: true, onClose: mockOnClose });

    const overlay = container.querySelector(".bg-black\\/40");
    expect(overlay).toBeInTheDocument();

    await user.click(overlay!);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test("닫기 버튼(X) 클릭 시 onClose가 호출된다", async () => {
    const user = userEvent.setup();
    renderSlider({ isSliderOpen: true, onClose: mockOnClose });

    const closeButton = screen.getByRole("button", { name: /close/i });

    await user.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test("네비게이션 링크를 클릭해도 각 onClose가 호출된다.", async () => {
    const user = userEvent.setup();
    renderSlider({ isSliderOpen: true, onClose: mockOnClose });

    // 홈 링크 클릭
    await user.click(screen.getByText("홈"));
    expect(mockOnClose).toHaveBeenCalledTimes(1);

    // 인기 링크 클릭
    await user.click(screen.getByText("인기"));
    expect(mockOnClose).toHaveBeenCalledTimes(2);
  });

  test("/popular 경로에서 '인기' 링크 스타일이 활성화 된다.", async () => {
    renderSlider({ isSliderOpen: true, onClose: mockOnClose }, "/popular");

    const popularLink = screen.getByText("인기").closest("a");
    expect(popularLink).toHaveClass("text-white");

    const homeLink = screen.getByText("홈").closest("a");
    expect(homeLink).toHaveClass("text-muted-foreground");
  });
});
