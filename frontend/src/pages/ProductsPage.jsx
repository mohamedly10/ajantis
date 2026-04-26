import React, { useEffect, useState } from 'react';
import ProductCard from '../components/common/ProductCard';
import { useBasket } from '../context/BasketContext';
import { fetchProducts } from '../utils/api';


const INITIAL_PRODUCTS = [
    // { id: 1, name: "طقم ذهب بتصميم عصري", price: 2500, weight: "24", type: "طقم كامل" },
    // { id: 2, name: "قلادة ذهب عيار 21", price: 1200, weight: "15", type: "قلادة" },
    // { id: 3, name: "خاتم زواج أنيق", price: 800, weight: "8", type: "خاتم" },
    // { id: 4, name: "سوار ذهبي كلاسيكي", price: 1800, weight: "20", type: "سوار" },
    // { id: 5, name: "أقراط ماسية", price: 3000, weight: "12", type: "أقراط" },
    // { id: 6, name: "طقم عيار 18 ذهب أبيض", price: 4500, weight: "35", type: "طقم كامل" },
];

const ProductsPage = () => {
    const { addToBasket } = useBasket();
    const [products, setProducts] = useState(INITIAL_PRODUCTS);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;
        fetchProducts()
            .then((data) => {
                if (cancelled) return;
                if (Array.isArray(data) && data.length) {
                    setProducts(data);
                }
            })
            .catch(() => {
                setError('تعذر تحميل المنتجات');
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <div className="container mx-auto px-4 py-12 mb-20 animate-fade-in">
            <h1 className="text-center text-4xl md:text-5xl font-heading text-primary mb-12">كل مجوهراتنا</h1>
            {loading && <p className="text-center text-text-muted mb-8">جاري تحميل المنتجات...</p>}
            {error && <p className="text-center text-red-400 mb-8">{error}</p>}

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">

                
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToBasket={() => addToBasket(product)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
