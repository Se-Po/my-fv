'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const menuItems = [
        { name: 'Acasă', href: '/' },
        { name: 'Despre', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Evenimente', href: '/evenimente' },
        { name: 'Parteneri', href: '/parteneri' },
    ];

    return (
        <nav className="bg-black shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold text-white">
                            Focul Viu
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        {menuItems.map((item) => (
                            <Link 
                                key={item.href}
                                href={item.href} 
                                className="text-white hover:text-gray-300"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;