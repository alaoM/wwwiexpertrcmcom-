'use client';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-brand-bg relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-[8px] shadow-[0_4px_24px_rgba(8,37,91,0.05)] overflow-hidden border border-brand-light">
                    <div className="grid lg:grid-cols-5">

                        {/* Contact Info */}
                        <div className="lg:col-span-2 bg-brand-navy p-10 md:p-12 text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="font-bebas text-4xl mb-2">GET IN TOUCH</h3>
                                <p className="text-brand-light mb-10">
                                    Ready to optimize your revenue cycle? Our team of experts is here to help you achieve financial excellence.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                            <Phone className="w-5 h-5 text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-brand-light uppercase tracking-wider mb-1">Phone</p>
                                            <a href="tel:623-292-2356" className="font-medium text-white hover:text-brand-orange transition-colors">
                                                623-292-2356
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                            <Mail className="w-5 h-5 text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-brand-light uppercase tracking-wider mb-1">Email</p>
                                            <a href="mailto:opiea@iexpertrcm.com" className="font-medium text-white hover:text-brand-orange transition-colors">
                                                opiea@iexpertrcm.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                            <MapPin className="w-5 h-5 text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-brand-light uppercase tracking-wider mb-1">Headquarters</p>
                                            <p className="font-medium text-[13px] leading-relaxed">
                                                Integrity RCM LLC<br />
                                                22424 S. Ellsworth Loop Rd. #2032<br />
                                                Queen Creek, AZ 85142
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                            <Clock className="w-5 h-5 text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-brand-light uppercase tracking-wider mb-1">Business Hours</p>
                                            <p className="font-medium">Mon - Fri: 8:00 AM - 6:00 PM EST</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3 p-10 md:p-12">
                            <h3 className="font-bebas text-4xl text-brand-navy mb-2">REQUEST A CONSULTATION</h3>
                            <p className="text-brand-steel mb-8">Fill out the form below and a dedicated RCM specialist will contact you within 24 hours.</p>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[11px] font-bold text-brand-navy uppercase tracking-wider mb-2">Full Name <span className="text-brand-orange">*</span></label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 bg-brand-bg border border-brand-light rounded-[4px] focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[11px] font-bold text-brand-navy uppercase tracking-wider mb-2">Practice / Organization Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 bg-brand-bg border border-brand-light rounded-[4px] focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                                            placeholder="Medical Center LLC"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[11px] font-bold text-brand-navy uppercase tracking-wider mb-2">Email Address <span className="text-brand-orange">*</span></label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 bg-brand-bg border border-brand-light rounded-[4px] focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[11px] font-bold text-brand-navy uppercase tracking-wider mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            className="w-full px-4 py-3 bg-brand-bg border border-brand-light rounded-[4px] focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                                            placeholder="623-292-2356"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[11px] font-bold text-brand-navy uppercase tracking-wider mb-2">Medical Specialty</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 bg-brand-bg border border-brand-light rounded-[4px] focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                                            placeholder="e.g. Cardiology, Pediatrics"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[11px] font-bold text-brand-navy uppercase tracking-wider mb-2">Reason for Contacting <span className="text-brand-orange">*</span></label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 bg-brand-bg border border-brand-light rounded-[4px] focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                                            placeholder="e.g. iClaim info, Practice Analysis"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[11px] font-bold text-brand-navy uppercase tracking-wider mb-2">Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 bg-brand-bg border border-brand-light rounded-[4px] focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors resize-none"
                                        placeholder="Tell us about your current billing challenges..."
                                    ></textarea>
                                </div>

                                <div className="flex items-start gap-3 bg-brand-bg/50 p-4 rounded-[4px] border border-brand-light/60">
                                    <input
                                        type="checkbox"
                                        id="sms-consent"
                                        className="w-4 h-4 mt-0.5 border border-brand-light rounded focus:ring-brand-orange text-brand-orange shrink-0 cursor-pointer"
                                    />
                                    <label htmlFor="sms-consent" className="text-[11px] leading-relaxed text-brand-steel cursor-pointer select-none">
                                        By checking this box, I agree to receive text messages about Promotions or offers from Integrity RCM LLC at the phone number provided above. You can reply &quot;STOP&quot; at any time to opt-out. Message and data rates may apply. Message frequency may vary, text HELP to 623-292-2356 for assistance. For more information, please visit our <Link href="/privacy-policy" className="text-brand-orange underline">Privacy Policy</Link> and terms of service.
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-brand-orange text-white py-[12px] rounded-[4px] font-semibold text-[12px] uppercase tracking-wide hover:bg-[#a63d18] transition-colors border-none cursor-pointer"
                                >
                                    Submit Inquiry
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
