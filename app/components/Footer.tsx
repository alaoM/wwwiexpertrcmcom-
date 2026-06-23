import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white/75 backdrop-blur-md text-brand-navy pt-16 pb-8 border-t border-brand-light/30 mt-auto relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left Widget: Logos */}
                    <div className="space-y-6">
                        <Link href="/">
                            <img src="/logo.png" alt="Integrity RCM LLC Logo" className="h-8 md:h-10 w-auto object-contain cursor-pointer" />
                        </Link>
                        <div className="pt-2">
                            <img 
                                src="/mrmaa.png" 
                                alt="MRMAA Accredited" 
                                className="h-14 w-auto opacity-85 hover:opacity-100 transition-opacity bg-brand-light/20 p-2 rounded-[4px]"
                            />
                        </div>
                    </div>

                    {/* Contact Widget */}
                    <div className="space-y-4">
                        <h5 className="font-bebas text-2xl uppercase tracking-wide text-brand-orange">Contact Us</h5>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="text-brand-orange shrink-0 mt-0.5" />
                                <div className="text-[12px] text-brand-steel leading-relaxed">
                                    <strong className="text-brand-navy">Integrity RCM LLC</strong><br />
                                    22424 S. Ellsworth Loop Rd. #2032<br />
                                    Queen Creek, AZ 85142
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={16} className="text-brand-orange shrink-0" />
                                <a href="tel:623-292-2356" className="text-[12px] text-brand-steel hover:text-brand-orange hover:scale-105 transition-all duration-200">
                                    623-292-2356
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-brand-orange shrink-0" />
                                <a href="mailto:opiea@iexpertrcm.com" className="text-[12px] text-brand-steel hover:text-brand-orange hover:scale-105 transition-all duration-200">
                                    opiea@iexpertrcm.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-brand-light/40 pt-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[11px] text-brand-steel/80 text-center md:text-left">
                        &copy; {new Date().getFullYear()} Integrity RCM LLC. All Rights Reserved.
                    </p>
                    <div className="flex gap-6 text-[11px]">
                        <Link href="/privacy-policy" className="text-brand-steel hover:text-brand-orange hover:scale-105 transition-all duration-200">
                            Privacy Policy
                        </Link>
                        <Link href="/privacy-policy" className="text-brand-steel hover:text-brand-orange hover:scale-105 transition-all duration-200">
                            Terms of Service
                        </Link>
                        <Link href="/privacy-policy" className="text-brand-steel hover:text-brand-orange hover:scale-105 transition-all duration-200">
                            Compliance Statement
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

