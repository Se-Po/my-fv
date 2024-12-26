'use client';

import Link from 'next/link';
import Image from 'next/image';
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
        <nav className="bg-gradient-to-r from-red-900 to-red-950 shadow-lg border-b border-red-800/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                            <Image 
                                src="/logo_fv.png" 
                                alt="Focul Viu Logo" 
                                width={40} 
                                height={40}
                            />
                            <span className="text-xl font-bold text-red-100">
                                Focul Viu
                            </span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-6">
                        {menuItems.map((item) => (
                            <Link 
                                key={item.href}
                                href={item.href} 
                                className="text-red-100 hover:text-red-400 transition-colors duration-200"
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