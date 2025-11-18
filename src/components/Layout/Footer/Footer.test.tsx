import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

const renderFooter = () => {
  return render(<Footer />);
};

describe("Footer TEST", () => {
  test("GitHub 링크가 올바른 URL을 가지고 있다.", () => {
    renderFooter();

    const githubLink = screen.getByLabelText("GitHub");
    expect(githubLink).toHaveAttribute("href", "https://github.com/KimSuro5773");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("Velog 링크가 올바른 URL을 가지고 있다.", () => {
    renderFooter();

    const velogLink = screen.getByLabelText("Velog");
    expect(velogLink).toHaveAttribute("href", "https://velog.io/@kimsuro/posts");
    expect(velogLink).toHaveAttribute("target", "_blank");
    expect(velogLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("GitHub 이미지가 렌더링 된다.", () => {
    renderFooter();

    const githubImage = screen.getByAltText("GitHub");
    expect(githubImage).toBeInTheDocument();
    expect(githubImage).toHaveAttribute("src", "./svg/github.svg");
  });

  test("Velog 이미지가 렌더링 된다.", () => {
    renderFooter();

    const velogImage = screen.getByAltText("Velog");
    expect(velogImage).toBeInTheDocument();
    expect(velogImage).toHaveAttribute("src", "./svg/velog.svg");
  });
});
