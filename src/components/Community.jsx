import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";

const stats = [
    {
        label: "Networking Events",
        value: 24,
    },
    {
        label: "Community Members",
        value: 350,
    },
];

const Community = () => (
    <section id="community" className="bg-hover py-12 px-4 mx-auto mt-10">
        <h2 className="text-3xl font-bold text-bg mb-6 w-fit mx-auto"><FaPeopleGroup className="inline mr-4" />Our Community</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            {stats.map((stat) => (
                <div
                    key={stat.label}
                    className="flex flex-col items-center bg-white rounded-lg p-6 shadow transition-colors duration-200 w-64"
                >
                    <span className="text-5xl font-extrabold text-accent mb-2">{stat.value}</span>
                    <span className="text-lg font-medium text-text">{stat.label}</span>
                </div>
            ))}
        </div>
    </section>
);

export default Community;