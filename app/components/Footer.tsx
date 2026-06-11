import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white/75 backdrop-blur-md text-brand-navy pt-16 pb-8 border-t border-brand-light/30 mt-auto relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* About Widget */}
                    <div className="md:col-span-5 space-y-4">
                        <Link href="/">
                            <img src="/logo.png" alt="Integrity RCM LLC Logo" className="h-8 md:h-10 w-auto object-contain mb-2 cursor-pointer" />
                        </Link>
                        <h5 className="font-bebas text-2xl uppercase tracking-wide text-brand-orange">About Us</h5>
                        <p className="text-[12px] leading-relaxed text-brand-steel max-w-sm">
                            {"Welcome to Integrity RCM LLC. We know you're committed to taking excellent care of your patients, but when was the last time you took a close look at your business? We're part of the nation's largest network of Medical Revenue Management offices, and we specialize in practice management, revenue cycle optimization, and private practice business support."}
                        </p>
                        <div className="pt-2">
                            <img 
                                src="https://cascadia-consultive.s3.us-west-2.amazonaws.com/abs/img/mrmaa.png" 
                                alt="MRMAA Accredited" 
                                className="h-12 w-auto opacity-85 hover:opacity-100 transition-opacity bg-brand-light/20 p-1.5 rounded-[4px]"
                            />
                        </div>
                    </div>

                    {/* Spacer */}
                    <div className="md:col-span-2 hidden md:block"></div>

                    {/* Contact Widget */}
                    <div className="md:col-span-5 space-y-4">
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

