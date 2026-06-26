'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { servicesData } from '../data/servicesData';

const Navbar = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services', isDropdown: true },
        { name: 'Contact', href: '/contact' },
    ];

    const isActiveLink = (href: string, isDropdown?: boolean) => {
        if (href === '/') {
            return pathname === '/';
        }
        if (isDropdown) {
            return pathname.startsWith(href);
        }
        return pathname === href;
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 bg-white/70 backdrop-blur-md border-b border-brand-light/30 ${isScrolled ? 'shadow-md py-3' : 'py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="Integrity RCM LLC Logo"
                                width={400}
                                height={250}
                                className="h-24 md:h-32 w-auto object-contain"
                                style={{ width: 'auto' }}
                                priority
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => {
                            if (link.isDropdown) {
                                return (
                                    <div key={link.name} className="relative group py-2">
                                        <Link
                                            href={link.href}
                                            className={`relative py-1 text-[12px] font-bold uppercase tracking-[0.5px] transition-all duration-200 flex items-center gap-1 hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:origin-left after:bg-brand-orange after:duration-300 ${isActiveLink(link.href, true) ? 'text-brand-orange after:scale-x-100' : 'text-brand-navy hover:text-brand-orange'
                                                }`}
                                        >
                                            {link.name}
                                            <ChevronDown size={14} className="opacity-75 group-hover:rotate-180 transition-transform duration-200" />
                                        </Link>

                                        {/* Dropdown Menu */}
                                        <div className="absolute left-0 top-full hidden group-hover:block w-72 bg-white/95 backdrop-blur-lg border border-brand-light/30 rounded-[4px] shadow-xl py-2 mt-1 z-50 max-h-[400px] overflow-y-auto scrollbar-thin">
                                            {servicesData.map((svc) => (
                                                <Link
                                                    key={svc.slug}
                                                    href={`/services/${svc.slug}`}
                                                    className="block px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.5px] text-brand-navy hover:text-brand-orange hover:bg-brand-light/10 hover:pl-6 transition-all duration-200 border-b border-brand-light/20 last:border-b-0"
                                                >
                                                    {svc.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative py-1 text-[12px] font-bold uppercase tracking-[0.5px] transition-all duration-200 hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:bg-brand-orange after:duration-300 ${isActiveLink(link.href) ? 'text-brand-orange after:scale-x-100' : 'text-brand-navy hover:text-brand-orange'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                        <Link href="/contact" className="bg-brand-orange text-white px-[24px] py-[10px] rounded-[4px] font-semibold text-[12px] uppercase tracking-wide hover:bg-[#a63d18] transition-colors border-none">
                            Free Analysis
                        </Link>
                        <a href="tel:623-292-2356" className="text-[12px] font-bold text-brand-navy hover:text-brand-orange transition-all duration-200 hover:scale-105">
                            623-292-2356
                        </a>
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <a href="tel:623-292-2356" className="text-[12px] font-bold text-brand-navy">
                            623-292-2356
                        </a>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-brand-navy cursor-pointer"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-lg absolute top-full left-0 w-full shadow-lg border-t border-brand-light/30 z-50">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => {
                            if (link.isDropdown) {
                                return (
                                    <div key={link.name} className="block">
                                        <button
                                            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                            className="w-full flex justify-between items-center px-3 py-3 text-base font-bold text-brand-navy hover:text-brand-orange text-left uppercase tracking-wide"
                                        >
                                            <span>{link.name}</span>
                                            <ChevronDown size={18} className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        {isMobileServicesOpen && (
                                            <div className="pl-6 bg-brand-light/10 border-l-2 border-brand-orange my-1 py-1 space-y-1 max-h-[200px] overflow-y-auto">
                                                <Link
                                                    href="/services"
                                                    className="block px-3 py-2 text-sm font-semibold text-brand-steel hover:text-brand-orange uppercase"
                                                    onClick={() => {
                                                        setIsMobileMenuOpen(false);
                                                        setIsMobileServicesOpen(false);
                                                    }}
                                                >
                                                    ALL SERVICES OVERVIEW
                                                </Link>
                                                {servicesData.map((svc) => (
                                                    <Link
                                                        key={svc.slug}
                                                        href={`/services/${svc.slug}`}
                                                        className="block px-3 py-2 text-sm font-semibold text-brand-steel hover:text-brand-orange uppercase tracking-wide"
                                                        onClick={() => {
                                                            setIsMobileMenuOpen(false);
                                                            setIsMobileServicesOpen(false);
                                                        }}
                                                    >
                                                        {svc.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`block px-3 py-3 text-base font-bold uppercase tracking-wide ${isActiveLink(link.href) ? 'text-brand-orange' : 'text-brand-navy hover:text-brand-orange'
                                        }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                        <div className="pt-4 px-3">
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full text-center bg-brand-orange text-white px-6 py-3 rounded-sm font-semibold hover:bg-[#a63d18] transition-colors uppercase tracking-wider text-sm border-none"
                            >
                                Free Practice Analysis
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
