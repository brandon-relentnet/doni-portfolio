import '@/css/globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { ThemeProvider } from 'next-themes';
import SEO from '@/components/SEO';

/* Set the title and description for the website */
export const metadata = {
  title: 'Website Template',
  description: 'Created by Doni',
};

export default function RootLayout({ children }) {
  return (
    /* suppressHydrationWarning is used to prevent a warning in the console from next-themes*/
    <html lang="en" suppressHydrationWarning>

      {/* Set the title and description */}
      <SEO title={metadata.title} description={metadata.description} />
      <body className='h-full'>

        {/* ThemeProvider is used to manage the theme */}
        <ThemeProvider
          attribute="class" defaultTheme="dark">

          {/* Render the Navbar, main content, and Footer */}
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}