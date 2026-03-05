"use client"

import CountUp from "react-countup"

export default function Counter({ value, label }) {

    return (
        <div>

            <h2 className="text-3xl font-bold text-yellow-400">
                <CountUp end={value} duration={3} />+
            </h2>

            <p className="text-gray-300 text-sm">
                {label}
            </p>

        </div>
    )
}