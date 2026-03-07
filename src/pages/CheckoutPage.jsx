import React, { useState } from 'react';
import { useBasket } from '../context/BasketContext';
import { Trash2, Plus, Minus } from 'lucide-react';

const CheckoutPage = () => {
    const { basket, removeFromBasket, updateQuantity, getBasketTotal, clearBasket } = useBasket();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckout = (e) => {
        e.preventDefault();

        let message = `مرحباً، أود طلب المجوهرات التالية:\n\n`;
        basket.forEach(item => {
            message += `- ${item.name} (الكمية: ${item.quantity})\n`;
        });
        message += `\nالإجمالي التقريبي: ${getBasketTotal()} دينار\n\n`;
        message += `الاسم: ${formData.name}\n`;
        message += `رقم الهاتف: ${formData.phone}\n`;
        message += `العنوان: ${formData.address}`;

        const whatsappUrl = `https://wa.me/218910000000?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        // Optional: clearBasket() after sending order
    };

    if (basket.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 flex flex-col items-center animate-fade-in mb-32">
                <h1 className="text-3xl text-primary font-heading mb-6">سلة المشتريات فارغة</h1>
                <p className="text-text-muted mb-8 text-center text-lg">لم تقم بإضافة أي مجوهرات للسلة بعد.</p>
                <a href="/products" className="px-8 py-3 bg-primary text-secondary rounded hover:bg-primary-dark transition font-bold">
                    تصفح المنتجات
                </a>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12 mb-20 animate-fade-in" dir="rtl">
            <h1 className="text-center text-4xl font-heading text-primary mb-12">إتمام الطلب</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Basket Items Summary */}
                <div className="bg-card p-6 rounded-xl border border-white/10 shadow-lg h-fit">
                    <h2 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4">مراجعة السلة</h2>
                    <div className="flex flex-col gap-6">
                        {basket.map(item => (
                            <div key={item.id} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                <div>
                                    <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                                    <p className="text-sm text-text-muted">{item.price} دينار</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2 bg-secondary rounded-lg px-2 py-1">
                                        <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-primary transition"><Minus size={16} /></button>
                                        <span className="w-6 text-center">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-primary transition"><Plus size={16} /></button>
                                    </div>
                                    <button
                                        onClick={() => removeFromBasket(item.id)}
                                        className="text-red-400 hover:text-red-500 transition p-2"
                                        aria-label="Remove item"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/20 flex justify-between items-center">
                        <span className="text-xl">الإجمالي:</span>
                        <span className="text-2xl font-bold text-primary">{getBasketTotal()} دينار</span>
                    </div>
                </div>

                {/* Contact Information Form */}
                <div className="bg-card p-6 rounded-xl border border-white/10 shadow-lg h-fit">
                    <h2 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4">بيانات التواصل</h2>
                    <form onSubmit={handleCheckout} className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm">الاسم بالكامل</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                                className="bg-secondary border border-white/20 rounded-lg p-3 text-text-light focus:outline-none focus:border-primary transition"
                                placeholder="أدخل اسمك الكريم"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone" className="text-sm">رقم الهاتف</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="bg-secondary border border-white/20 rounded-lg p-3 text-text-light focus:outline-none focus:border-primary transition"
                                placeholder="09X0000000"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="address" className="text-sm">العنوان للإستلام (اختياري)</label>
                            <textarea
                                id="address"
                                name="address"
                                rows="3"
                                value={formData.address}
                                onChange={handleInputChange}
                                className="bg-secondary border border-white/20 rounded-lg p-3 text-text-light focus:outline-none focus:border-primary transition resize-none"
                                placeholder="المدينة، المنطقة، أقرب نقطة دالة"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="mt-4 w-full bg-primary text-secondary hover:bg-primary-dark transition font-bold text-lg py-4 rounded-lg flex items-center justify-center gap-2 group"
                        >
                            تأكيد الطلب عبر واتساب
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
