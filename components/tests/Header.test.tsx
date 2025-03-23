import { render, screen } from "@testing-library/react";
import Header from "../Header";
import UserIcon from "@/public/MyIcon.jpg";

describe("ヘッダーコンポーネントのテスト", () => {
  render(<Header />);

  test("ヘッダーにユーザーアイコンがあるか", () => {
    const expectedImageSrc = UserIcon.src;
    const userIconImg = screen.getByAltText("ユーザーアイコン");
    expect(userIconImg).toBeInTheDocument();
    expect(userIconImg.getAttribute("src")).toContain(encodeURIComponent(expectedImageSrc));
  });
});
