import React from "react";
import productImage from '../../assets/image/product.png'
import weightIcon from '../../assets/icon/weight.png'
import sun from '../../assets/icon/sun.png'
import { ShoppingBasket } from 'lucide-react';

const ProductCard = ({ product, onAddToBasket }) => {
    // Fallbacks if no product prop is passed directly (to prevent crashes in other sections if unmounted)
    const p = product || {
        name: "طقم ذهب",
        price: 2500,
        weight: "24",
    };

    return (
        <div className='w-full max-w-[320px] sm:w-[320px] shrink-0 mx-auto h-85 aspect-4/4 order-1 md:order-2 bg-card rounded-xl border border-white/10 shadow-2xl relative overflow-hidden hover:border-primary/50 transition duration-300 group hover:-translate-y-2'>
            <img src={productImage} alt={p.name} className='w-full h-40 object-contain' />
            <div className='product-info flex flex-col'>
                <p className='mb-3 text-xs md:text-base lg:text-lg font-bold mr-3'>{p.name}</p>
                <span className='flex flex-row justify-around lg:justify-center gap-10 lg:gap-18 pb-2.5'>
                    <span className='flex flex-row-reverse gap-2 flex-nowrap'><p className="text-xs md:text-base lg:text-sm">عيار {p.type || "21"}</p> <img src={sun} alt="" className='w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6' /></span>
                    <span className='flex flex-row-reverse gap-2'><p className="text-xs md:text-base lg:text-sm">{p.weight} جرام</p> <img src={weightIcon} alt="" className='w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6' /></span>
                </span>
                <div className="flex flex-row justify-between items-center border-t border-white/10 pt-4 m-5">
                    <div className="flex flex-col">
                        <p className='text-xs md:text-sm text-text-muted mb-1'>السعر</p>
                        <p className='text-primary font-bold text-sm md:text-base lg:text-lg'>{p.price} دينار</p>
                    </div>
                    {onAddToBasket && (
                        <button
                            onClick={onAddToBasket}
                            className="bg-primary/20 hover:bg-primary text-primary hover:text-secondary rounded-full p-3 flex items-center justify-center transition-colors shadow-sm cursor-pointer z-10"
                            aria-label="أضف إلى السلة"
                        >
                            <ShoppingBasket size={20} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard