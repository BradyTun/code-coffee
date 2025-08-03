import React, { useState, useRef, useEffect } from "react";
import { FiShoppingCart, FiX } from "react-icons/fi";

// Use the same coffeeProducts array as in Coffee.jsx
const coffeeProducts = [
    {
        name: "Espresso",
        description: "Rich and bold, a classic Italian favorite.",
        image:
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
        price: 3.5,
    },
    {
        name: "Cappuccino",
        description: "Creamy foam with a shot of espresso.",
        image:
            "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80",
        price: 4.0,
    },
    {
        name: "Latte",
        description: "Smooth blend of espresso and steamed milk.",
        image:
            "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
        price: 4.5,
    },
    {
        name: "Mocha",
        description: "Espresso with chocolate and steamed milk.",
        image:
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80",
        price: 5.0,
    },
];

function getCartFromStorage() {
    const cart = localStorage.getItem("coffeeCart");
    return cart ? JSON.parse(cart) : {};
}

function getCartItems() {
    const cart = getCartFromStorage();
    // Map cart object to array of items with details
    return Object.entries(cart).map(([name, qty]) => {
        const product = coffeeProducts.find((p) => p.name === name);
        if (!product) return null;
        return {
            name: product.name,
            price: product.price,
            qty,
            image: product.image,
        };
    }).filter(Boolean);
}

function Cart() {
    const [open, setOpen] = useState(false);
    const [cartItems, setCartItems] = useState(getCartItems());
    const cartRef = useRef(null);

    // Sync cart items when cart is opened
    useEffect(() => {
        if (open) {
            setCartItems(getCartItems());
        }
    }, [open]);

    // Optional: Listen for storage changes (multi-tab support)
    useEffect(() => {
        function handleStorage() {
            setCartItems(getCartItems());
        }
        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
    }, []);

    // Close cart when clicking outside
    useEffect(() => {
        function handleClickOutside(e) {
            if (cartRef.current && !cartRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <>
            {/* Cart Icon */}
            <button
                className="fixed z-40 bottom-6 right-6 bg-accent text-bg p-3 rounded-full shadow-lg hover:bg-hover transition-colors md:bottom-8 md:right-10"
                onClick={() => setOpen(true)}
                aria-label="Open cart"
            >
                <FiShoppingCart size={24} />
                {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white rounded-full px-1.5 py-0.5">
                        {cartItems.reduce((sum, item) => sum + item.qty, 0)}
                    </span>
                )}
            </button>

            {/* Overlay */}
            {open && (
                <div className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm transition-opacity" />
            )}

            {/* Cart Drawer */}
            <aside
                ref={cartRef}
                className={`fixed z-50 top-0 right-0 h-full w-full max-w-md bg-bg shadow-2xl transform transition-transform duration-300 ${
                    open ? "translate-x-0" : "translate-x-full"
                } flex flex-col`}
                style={{ transitionProperty: "transform" }}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-accent">Your Cart</h2>
                    <button
                        className="text-2xl text-accent hover:text-hover transition-colors"
                        onClick={() => setOpen(false)}
                        aria-label="Close cart"
                    >
                        <FiX />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {cartItems.length === 0 ? (
                        <div className="text-center text-text text-lg">Your cart is empty.</div>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.name} className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                                />
                                <div className="flex-1">
                                    <div className="font-semibold text-accent">{item.name}</div>
                                    <div className="text-sm text-text">
                                        ${item.price.toFixed(2)} &times; {item.qty}
                                    </div>
                                </div>
                                <div className="font-bold text-accent">
                                    ${(item.price * item.qty).toFixed(2)}
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200 bg-bg">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold text-accent">Total</span>
                        <span className="text-xl font-bold text-accent">${total.toFixed(2)}</span>
                    </div>
                    <button
                        className="w-full py-3 rounded-lg bg-accent text-bg font-semibold text-lg hover:bg-hover transition-colors shadow-md"
                        disabled={cartItems.length === 0}
                    >
                        Checkout
                    </button>
                </div>
            </aside>
        </>
    );
}

export default Cart;