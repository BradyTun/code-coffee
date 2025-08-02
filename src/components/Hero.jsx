import React, { useEffect, useState } from "react";

function Hero() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setShow(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div
            className={`min-h-screen bg-bg flex flex-col items-center justify-center px-4 transition-opacity duration-1000 ${
                show ? "opacity-100" : "opacity-0"
            }`}
        >
            <h1
                className={`text-4xl md:text-5xl font-serif font-semibold text-hover text-center leading-tight mb-6 transform transition-all duration-1000 ${
                    show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
            >
                Code with Coffee<br /><span>with the Code Coffee</span>
            </h1>
            <p
                className={`text-base md:text-lg text-text text-center max-w-xl mb-8 transition-all duration-1000 delay-200 ${
                    show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
            >
                Join our vibrant community of coffee lovers and coders,<br />
                where every cup sparks creativity and connection.
            </p>
            <button
                className={`flex items-center gap-3 bg-accent text-white px-8 py-4 rounded-[1.5rem_0.5rem_1.5rem_0.5rem] font-serif text-base md:text-lg shadow hover:bg-hover transition transition-all duration-1000 delay-400 ${
                    show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
            >
                BROWSE MENU
                <span className="text-xl">&#8594;</span>
            </button>
        </div>
    );
}

export default Hero;