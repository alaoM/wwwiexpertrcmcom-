'use client';

import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const stats = [
    { label: 'Years of Experience', value: 25, suffix: '+' },
    { label: 'Claims Processed', value: 50, suffix: 'M+' },
    { label: 'Collection Success Rate', value: 98, suffix: '%' },
    { label: 'Healthcare Clients Served', value: 500, suffix: '+' },
];

const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const inView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const end = value;
            const incrementTime = (duration * 1000) / end;

            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === end) clearInterval(timer);
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [inView, value, duration]);

    return <span ref={nodeRef}>{count}</span>;
};

const TrustIndicators = () => {
    return (
        <div className="bg-white border-b border-brand-light relative z-20 w-full py-6 md:h-[100px] flex flex-wrap items-center justify-around px-4 md:px-16 gap-y-6">
            {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                    <span className="font-bebas text-[32px] font-bold text-brand-navy block leading-none mb-1 text-center flex items-center justify-center">
                        <Counter value={stat.value} />
                        <span>{stat.suffix}</span>
                    </span>
                    <span className="text-[11px] text-brand-accent uppercase tracking-[1px]">{stat.label}</span>
                </div>
            ))}
        </div>
    );
};

export default TrustIndicators;
