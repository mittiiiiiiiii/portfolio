import { render, screen,waitFor } from "@testing-library/react";
import Header from "../Header";
import UserIcon from "@/public/MyIcon.jpg";

const mockedRouterPush = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: mockedRouterPush }),
}));

beforeEach(() => {
  mockedRouterPush.mockClear();
  render(<Header />);
});

describe("ヘッダーコンポーネントのテスト", () => {
  const twitterUrl = process.env.NEXT_PUBLIC_TWITTER_URL || "";

  test("ユーザーネームが表示されるか", () => {
    const userName = screen.getByText("Mittiii");
    expect(userName).toBeInTheDocument();
  });

  test("ヘッダーにユーザーアイコンがあるか", () => {
    const expectedImageSrc = UserIcon.src;
    const userIconImg = screen.getByAltText("ユーザーアイコン");
    expect(userIconImg).toBeInTheDocument();
    expect(userIconImg.getAttribute("src")).toContain(encodeURIComponent(expectedImageSrc));
  });

  test("Homeリンクがあるか", () => {
    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();
  });

  test("Homeリンクがクリックされたら/Homeに遷移するか", async () => {
    const homeLink = screen.getByText("Home");
    await homeLink.click();
    await waitFor(() => {
      expect(mockedRouterPush).toHaveBeenCalledWith("/Home");
    });
  });

  test("Twitterリンクが表示されるか", () => {
    const twitterLink = screen.getByText("X(Twitter)");
    expect(twitterLink).toBeInTheDocument();
  });

  test("Twitterリンクのhrefが正しいか", () => {
    const twitterLink = screen.getByText("X(Twitter)");
    expect(twitterLink).toHaveAttribute("href", twitterUrl);
  });

  test("Twitterリンクが新しいタブで開く設定になっているか", () => {
    const twitterLink = screen.getByText("X(Twitter)");
    expect(twitterLink).toHaveAttribute("target", "_blank");
    expect(twitterLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
