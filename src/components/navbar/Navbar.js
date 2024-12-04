import Socials from './Socials';
import ThemeSwitch from './ThemeSwitch';
import ClientNavbar from './ClientNavbar';
import ScrollProgressBar from './ScrollProgressBar';

export default function Navbar() {
    return (
        <nav className="flex fixed w-screen top-0 h-20 px-8 bg-mantle shadow items-center justify-between z-50">
            {/* Socials */}
            <div className="flex items-center justify-center h-6 w-6">
                <Socials />
            </div>

            {/* Client Navbar (contains HamburgerButton and NavLinks) */}
            <ClientNavbar />

            {/* Theme Switch */}
            <div className="flex items-center justify-center h-6 w-6">
                <ThemeSwitch />
            </div>

            {/* Scroll Progress Bar */}
            <ScrollProgressBar />
        </nav>
    );
}