'use client';

import { useState } from 'react';
import HamburgerButton from './HamburgerButton';
import NavLinks from './NavLinks';

export default function ClientNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>
            {/* Hamburger Menu */}
            <HamburgerButton menuOpen={menuOpen} toggleMenu={toggleMenu} />

            {/* Navigation Links */}
            <NavLinks menuOpen={menuOpen} />
        </>
    );
}