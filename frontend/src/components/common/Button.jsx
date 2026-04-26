import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-2 rounded-lg font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50";

    const variants = {
        primary: "bg-primary text-secondary hover:bg-primary-dark",
        outline: "border border-primary text-primary hover:bg-primary hover:text-secondary",
        link: "text-primary hover:text-white underline-offset-4 hover:underline p-0",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
