import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/styled-components/registry";

export const metadata: Metadata = {
  title: "vercel-Test",
};

const RootLayout = async ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="ja">
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </html>
  );
};

export default RootLayout;
