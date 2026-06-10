import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voyagio",
  description: "Discover your next journey with AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
