"use client"

import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

export default function Counter({ value, label }) {

    const { ref, inView } = useInView({
        triggerOnce: true,   // only run once
        threshold: 0.5       // 50% visible
    })

    return (
        <div ref={ref}>

            <h2 className="text-3xl font-bold text-yellow-400">
                {inView && <CountUp end={value} duration={3} />}+
            </h2>

            <p className="text-gray-300 text-sm">
                {label}
            </p>

        </div>
    )
}