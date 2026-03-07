import React, { createContext, useContext, useState, useEffect } from 'react';

const BasketContext = createContext();

export const useBasket = () => {
    return useContext(BasketContext);
};

export const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState(() => {
        try {
            const savedBasket = localStorage.getItem('ajantis_basket');
            return savedBasket ? JSON.parse(savedBasket) : [];
        } catch (error) {
            console.error("Failed to load basket from localStorage:", error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('ajantis_basket', JSON.stringify(basket));
        } catch (error) {
            console.error("Failed to save basket to localStorage:", error);
        }
    }, [basket]);

    const addToBasket = (product) => {
        setBasket((prev) => {
            const existingItem = prev.find(item => item.id === product.id);
            if (existingItem) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromBasket = (productId) => {
        setBasket((prev) => prev.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, amount) => {
        setBasket((prev) => prev.map(item => {
            if (item.id === productId) {
                const newQuantity = Math.max(1, item.quantity + amount);
                return { ...item, quantity: newQuantity }
            }
            return item;
        }));
    }

    const clearBasket = () => {
        setBasket([]);
    };

    const getBasketTotal = () => {
        return basket.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const value = {
        basket,
        addToBasket,
        removeFromBasket,
        updateQuantity,
        clearBasket,
        getBasketTotal
    };

    return (
        <BasketContext.Provider value={value}>
            {children}
        </BasketContext.Provider>
    );
};
