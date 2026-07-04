import "./globals.css";

export const metadata = {
  title: "PLT Tower | Business Bay, Dubai — by PLT Properties",
  description:
    "A standard set in Europe, built in Dubai. Discover PLT Tower, Business Bay's new landmark residence by PLT Properties.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#0b0b0c] text-white overflow-x-hidden ">{children}</body>
    </html>
  );
}
