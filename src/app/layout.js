import '@/css/globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { ThemeProvider } from 'next-themes';

/* Set the title and description for the website */
export const metadata = {
  title: "Responsive Template",
  description: "Created by Doni",
};

export default function RootLayout({ children }) {
  return (
    /* suppressHydrationWarning is used to prevent a warning in the console from next-themes*/
    <html lang="en" suppressHydrationWarning>
      <body className="h-full">
        {/* ThemeProvider is used to manage the theme */}
        <ThemeProvider attribute="class" defaultTheme="dark">
          {/* Render the Navbar, main content, and Footer */}
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
