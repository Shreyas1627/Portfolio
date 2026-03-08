import "./globals.css";

export const metadata = {
  title: "Shreyas Mirashi | Computer Engineering Student & Developer",
  description:
    "Personal portfolio of Shreyas Mirashi — Computer Engineering undergraduate at Xavier Institute of Engineering, specializing in AI, ML, and Full-Stack Development.",
  keywords: ["Shreyas Mirashi", "Portfolio", "Computer Engineering", "AI", "Machine Learning", "Software Developer"],
  authors: [{ name: "Shreyas Mirashi" }],
  openGraph: {
    title: "Shreyas Mirashi | Developer Portfolio",
    description: "AI & ML Enthusiast | Software Developer | CE Student",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#080c14] text-slate-200">
        {children}
      </body>
    </html>
  );
}
