import React from 'react';
import Button from '../../../components/common/Button';

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 bg-secondary relative">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Details */}
                    <div className="order-2 md:order-1 text-right space-y-8">
                        <div>
                            <h2 className="text-3xl font-heading text-text-light mb-4">تواصل مع مستشارينا</h2>
                            <p className="text-text-muted">نحن هنا لمساعدتكم في اختيار القطعة المثالية أو البدء في تصميم رحلتك الخاصة في عالم المجوهرات.</p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 flex-row-reverse md:flex-row"> {/* Reversed on mobile for RTL if needed, but flex-row in RTL is correct order: Icon | Text */}
                                <div className="flex-1">
                                    <h4 className="text-white font-bold mb-1">الموقع</h4>
                                    <p className="text-text-muted text-sm">طرابلس ، جنزور ، سوق الذهب</p>
                                </div>
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-1">
                                    <h4 className="text-white font-bold mb-1">اتصل بنا</h4>
                                    <p className="text-text-muted text-sm" dir="ltr">+218 92 123 4567</p>
                                </div>
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                            </div>
                        </div>

                        <Button variant="primary" className="w-full sm:w-auto mt-4">
                            <span className="flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                تواصل عبر واتساب
                            </span>
                        </Button>
                    </div>

                    {/* Contact Form */}
                    <div className="order-1 md:order-2 bg-card p-8 rounded-xl border border-white/10 shadow-2xl relative overflow-hidden">
                        {/* Decorative circle */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>

                        <form className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-text-muted mb-2">الاسم الكريم</label>
                                    <input type="text" className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-text-light focus:border-primary focus:ring-1 focus:ring-primary outline-none transition" placeholder="ادخل اسمك الكامل" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-muted mb-2">رقمك</label>
                                    <input type="tel" className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-text-light focus:border-primary focus:ring-1 focus:ring-primary outline-none transition" placeholder="+218 ..." dir="ltr" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-text-muted mb-2">كيف يمكننا مساعدتك اليوم؟</label>
                                <textarea rows="4" className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-text-light focus:border-primary focus:ring-1 focus:ring-primary outline-none transition" placeholder="..."></textarea>
                            </div>

                            <Button variant="primary" className="w-full">إرسال الطلب</Button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;
