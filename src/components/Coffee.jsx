import React, { useState, useEffect } from "react";

export const coffeeProducts = [
    {
        name: "Espresso",
        description: "Rich and bold, a classic Italian favorite.",
        image:
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
        price: "$3.50",
    },
    {
        name: "Cappuccino",
        description: "Creamy foam with a shot of espresso.",
        image:
            "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80",
        price: "$4.00",
    },
    {
        name: "Latte",
        description: "Smooth blend of espresso and steamed milk.",
        image:
            "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
        price: "$4.50",
    },
    {
        name: "Mocha",
        description: "Espresso with chocolate and steamed milk.",
        image:
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80",
        price: "$5.00",
    },
];

export function getCartFromStorage() {
    try {
        const cart = JSON.parse(localStorage.getItem("coffeeCart"));
        return Array.isArray(cart) ? cart : [];
    } catch {
        return [];
    }
}

const setCartToStorage = (cart) => {
    localStorage.setItem("coffeeCart", JSON.stringify(cart));
};

const Coffee = () => {
    const [cart, setCart] = useState(getCartFromStorage());

    useEffect(() => {
        setCartToStorage(cart);
    }, [cart]);

    const addToCart = (name) => {
        setCart((prev) => ({
            ...prev,
            [name]: prev[name] ? prev[name] + 1 : 1,
        }));
    };

    const removeFromCart = (name) => {
        setCart((prev) => {
            const updated = { ...prev };
            if (updated[name] > 1) {
                updated[name] -= 1;
            } else {
                delete updated[name];
            }
            return updated;
        });
    };

    const clearFromCart = (name)=>{
        setCart((prev) => {
            const updated = { ...prev };
            delete updated[name];
            return updated;
        });
    }

    const getCartCount = (name) => cart[name] || 0;

    return (
        <section id="coffee" className="bg-bg py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-accent mb-4 text-center">Take Coffee</h2>
                <p className="text-text mb-12 text-center max-w-2xl mx-auto">
                    Discover our handpicked selection of specialty coffees, crafted to perfection for every taste.
                </p>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {coffeeProducts.map((coffee) => {
                        const count = getCartCount(coffee.name);
                        return (
                            <div
                                key={coffee.name}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                            >
                                <img
                                    src={coffee.image}
                                    alt={coffee.name}
                                    className="h-48 w-full object-cover"
                                />
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-2xl font-semibold text-accent mb-2">{coffee.name}</h3>
                                    <p className="text-text mb-4 flex-1">{coffee.description}</p>
                                    <span className="text-lg font-bold text-accent">{coffee.price}</span>
                                    <div className="flex items-center mt-4 gap-2 min-h-[40px] transition-all duration-300">
                                        {count === 0 ? (
                                            <button
                                                className="bg-accent text-white px-4 py-2 rounded hover:bg-hover transition-colors w-full"
                                                onClick={() => addToCart(coffee.name)}
                                            >
                                                Add to Cart
                                            </button>
                                        ) : (
                                            <div className="flex items-center gap-2 w-full animate-fade-in">
                                                <button
                                                    className="bg-accent text-white px-3 py-2 rounded hover:bg-hover transition-colors"
                                                    onClick={() => setCart((prev) => ({
                                                        ...prev,
                                                        [coffee.name]: prev[coffee.name] > 1 ? prev[coffee.name] - 1 : 1,
                                                    }))}
                                                >
                                                    -
                                                </button>
                                                <span className="text-accent font-bold px-2">{count}</span>
                                                <button
                                                    className="bg-accent text-white px-3 py-2 rounded hover:bg-hover transition-colors"
                                                    onClick={() => setCart((prev) => ({
                                                        ...prev,
                                                        [coffee.name]: prev[coffee.name] + 1,
                                                    }))}
                                                >
                                                    +
                                                </button>
                                                <button
                                                    className="ml-2 text-red-500 hover:text-red-700 transition-colors"
                                                    onClick={() => clearFromCart(coffee.name)}
                                                    title="Remove from cart"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
                                                    </svg>
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Coffee;