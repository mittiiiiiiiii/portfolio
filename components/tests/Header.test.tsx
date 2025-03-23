import { render, screen } from "@testing-library/react";
import Header from "../Header";
import UserIcon from "@/public/MyIcon.jpg";

beforeEach(() => {
  render(<Header />);
});

describe("ヘッダーコンポーネントのテスト", () => {
  test("ユーザーネームが表示されるか",()=>{
    const userName = screen.getByText("Mittiii");
    expect(userName).toBeInTheDocument();
  });

  test("ヘッダーにユーザーアイコンがあるか", () => {
    const expectedImageSrc = UserIcon.src;
    const userIconImg = screen.getByAltText("ユーザーアイコン");
    expect(userIconImg).toBeInTheDocument();
    expect(userIconImg.getAttribute("src")).toContain(encodeURIComponent(expectedImageSrc));
  });
});
