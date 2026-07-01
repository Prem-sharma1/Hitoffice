import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Hitoffice | Complete Construction ERP & Project Management Software",
  description: "Streamline operations, manage budgets, track projects, and scale your construction business with Hitoffice—the all-in-one ERP software for contractors, subcontractors, and home builders.",
  keywords: ["construction ERP", "project management software", "construction software", "contractor ERP", "snagging list app", "construction cost tracking"],
  openGraph: {
    title: "Hitoffice | Complete Construction ERP & Project Management Software",
    description: "Streamline operations, manage budgets, track projects, and scale your construction business with Hitoffice.",
    url: "https://hitoffice.com",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col font-sans text-brand-blue bg-white"
        suppressHydrationWarning
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KNVH21QBG6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KNVH21QBG6');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
