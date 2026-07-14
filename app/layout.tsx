import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kmate · AI科研写作与绘图助手",
  description:
    "Kmate（科研小棉袄）是一款面向科研写作、文献整理、图表方案与参考文献生成的AI科研效率工具。支持资料库问答、文稿创作、科研绘图方案、规范引用整理。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
