'use client';
import { Building2, Stethoscope, Users, Microchip, Network, Cross } from 'lucide-react';

const industries = [
    { icon: <Building2 />, name: 'Hospitals' },
    { icon: <Stethoscope />, name: 'Clinics' },
    { icon: <Users />, name: 'Physician Groups' },
    { icon: <Microchip />, name: 'Specialty Practices' },
    { icon: <Network />, name: 'Healthcare Networks' },
    { icon: <Cross />, name: 'Ambulatory Centers' },
];

const Industries = () => {
    return (
        <section className="py-24 bg-brand-navy text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-bebas text-5xl md:text-6xl mb-4">
                        INDUSTRIES WE SERVE
                    </h2>
                    <p className="text-brand-light text-lg max-w-2xl mx-auto">
                        Providing tailored Revenue Cycle Management strategies across the healthcare spectrum.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {industries.map((ind, idx) => (
                        <div
                            key={idx}
                            className="bg-white/5 border border-white/10 rounded-[4px] p-6 text-center hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 cursor-pointer"
                        >
                            <div className="w-10 h-10 mx-auto bg-white/10 rounded-[4px] flex items-center justify-center mb-4 text-white">
                                {ind.icon}
                            </div>
                            <h4 className="font-bold text-[12px] uppercase tracking-wider">{ind.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
