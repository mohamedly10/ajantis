import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from "../../../components/common/ProductCard";
import { useBasket } from '../../../context/BasketContext';

// Mock data matching the ProductsPage
const FEATURED_PRODUCTS = [
    { id: 1, name: "طقم ذهب بتصميم عصري", price: 2500, weight: "24", type: "طقم كامل" },
    { id: 2, name: "قلادة ذهب عيار 21", price: 1200, weight: "15", type: "قلادة" },
    { id: 3, name: "خاتم زواج أنيق", price: 800, weight: "8", type: "خاتم" }
];

const ProductSection = () => {
    const { addToBasket } = useBasket();

    return (
        <section id='product' className='flex items-center justify-center overflow-hidden py-16 mb-25'>
            <div className='container mx-auto px-4 flex flex-col items-center'>
                <h2 className='text-center m-12 text-3xl md:text-4xl lg:text-5xl font-heading text-primary'>مجوهراتنا</h2>
                <div className='product-wrapper flex flex-row gap-10 overflow-x-auto lg:overflow-x-visible scrollbar-hide shrink-0 pb-8 w-full justify-start lg:justify-center'>
                    {FEATURED_PRODUCTS.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToBasket={() => addToBasket(product)}
                        />
                    ))}
                </div>
                <Link to="/products" className="mt-12 px-10 py-4 bg-primary text-secondary hover:bg-primary-dark transition-colors rounded font-bold text-lg">
                    عرض جميع المنتجات
                </Link>
            </div>
        </section>
    );
};
export default ProductSection