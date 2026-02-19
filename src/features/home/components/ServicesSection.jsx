import React from 'react';

const ServicesSection = () => {
    const services = [
        {
            title: 'المبيعات الحصرية',
            description: 'الوصول المباشر إلى أرقى مجموعات المجوهرات الحصرية التي لا تتوفر إلا لنخبة مختارة.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            ),
            details: ['طقم زفاف ملكية', 'أحجار كريمة نادرة']
        },
        {
            title: 'العناية والصيانة',
            description: 'خدمات ترميم وتنظيف احترافية على أيدي خبراء لضمان بقاء بريق قطعك الثمينة للأبد.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
            ),
            details: ['تلميع فائق العناية', 'إعادة ترصيع الأحجار']
        },
        {
            title: 'تصميم مخصص',
            description: 'ابتكار قطع مجوهرات فريدة مصممة خصيصاً لتناسب ذوقك الشخصي وتعبر عن رؤيتك الخاصة.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            ),
            details: ['نمذجة ثلاثية الأبعاد', 'أحجار بجميع الأحجام']
        }
    ];

    return (
        <section id="services" className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h3 className="text-primary font-bold tracking-widest uppercase mb-2 text-sm">خدمات حصرية</h3>
                    <h2 className="text-3xl md:text-4xl font-heading text-text-light">ما نقدمه لعملائنا</h2>
                    <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-card p-8 rounded-xl border border-white/5 hover:border-primary/50 transition duration-300 group hover:-translate-y-2">
                            {/* Icon */}
                            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-transparent rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition duration-300 mx-auto">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold text-text-light mb-4 text-center">{service.title}</h3>
                            <p className="text-text-muted text-sm leading-relaxed mb-8 text-center min-h-[80px]">
                                {service.description}
                            </p>

                            <div className="space-y-2 border-t border-white/10 pt-6">
                                {service.details.map((detail, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-xs text-text-muted justify-center">
                                        <span className="text-primary">•</span>
                                        <span>{detail}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;
