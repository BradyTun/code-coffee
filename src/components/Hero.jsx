import React, { useEffect, useState } from "react";

function Hero() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setShow(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div
            className={`relative min-h-screen bg-gradient-to-br from-[#2d1e13] via-[#4e342e] to-[#a1887f] flex flex-col items-center justify-center px-2 sm:px-4 transition-opacity duration-1000 ${
                show ? "opacity-100" : "opacity-0"
            }`}
        >
            {/* Decorative Coffee Beans */}
            <img
                src="https://img.icons8.com/ios-filled/100/ffffff/coffee-beans.png"
                alt=""
                className="absolute top-8 left-8 w-16 opacity-20 rotate-12 pointer-events-none"
            />
            <img
                src="https://img.icons8.com/ios-filled/100/ffffff/coffee-beans.png"
                alt=""
                className="absolute bottom-8 right-8 w-20 opacity-20 -rotate-12 pointer-events-none"
            />

            {/* Hero Content */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-5 sm:p-10 md:p-16 flex flex-col items-center">
                <h1
                    className={`text-3xl sm:text-5xl md:text-7xl font-serif font-bold text-[#fff8f0] text-center leading-snug sm:leading-tight mb-4 sm:mb-6 drop-shadow-lg tracking-tight transform transition-all duration-1000 ${
                        show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                >
                    <span className="block text-bg drop-shadow-lg">Code with Coffee</span>
                    <span className="block text-base sm:text-lg md:text-2xl font-light text-bg mt-1 sm:mt-2">
                        with the Code Coffee
                    </span>
                </h1>
                <p
                    className={`text-base sm:text-lg md:text-2xl text-[#f5e9e0] text-center max-w-xs sm:max-w-2xl mb-6 sm:mb-10 transition-all duration-1000 delay-200 ${
                        show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                >
                    Join our vibrant community of <span className="font-semibold text-bg">coffee lovers</span> and <span className="font-semibold text-bg">coders</span>,<br />
                    where every cup sparks <span className="italic">creativity</span> and <span className="italic">connection</span>.
                </p>
                <a
                    href="#coffee"
                    className={`flex items-center gap-3 bg-accent/90 hover:bg-accent text-white px-6 sm:px-10 py-4 sm:py-5 rounded-full font-serif text-base sm:text-lg md:text-2xl shadow-lg transition-all duration-1000 delay-400 ${
                        show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                    style={{ boxShadow: "0 8px 32px 0 rgba(44, 29, 18, 0.25)" }}
                >
                    <span className="tracking-widest font-bold">BROWSE MENU</span>
                    <span className="text-2xl">&#8594;</span>
                </a>
            </div>
        </div>
    );
}

export default Hero;