import React from 'react';
import JewelryScene from './JewelryScene';


const WorldSection = () => {
    return (
        <section id="world" className="py-20 md:py-32 bg-secondary relative">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-primary text-2xl block mb-2">♕</span>
                    <h2 className="text-3xl md:text-5xl font-heading text-text-light">عالم أجامتيس</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* 3D Model */}
                    <JewelryScene />
    
                    {/* Text Content */}
                    <div className="space-y-6 text-right">
                        <p className="text-text-muted leading-loose text-lg">
                            تجسد أجامتيس قمة الشغف والتميز في عالم المجوهرات الراقية. منذ البداية، كان هدفنا هو خلق قطع تتجاوز الزمن، تجمع بين بريق الذهب وندوة الألماس لتعكس شخصية من يرتديها.
                        </p>
                        <p className="text-text-muted leading-loose text-lg">
                            نحن نؤمن بأن كل قطعة هي تحفة فنية تروي حكاية من الأناقة والجمال. قام مصممينا باستلهام من التراث العريق مع لمسة عصرية لتواكب أرقى صيحات الموضة العالمية.
                        </p>

                        <div className="flex flex-col gap-3 mt-8">
                            <div className="flex items-center gap-3 text-primary">
                                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                <span className="text-text-light">حرفية يدوية مخلدة دائماً</span>
                            </div>
                            <div className="flex items-center gap-3 text-primary">
                                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                <span className="text-text-light">أكثر من ٣٠ عاماً من الخبرة</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorldSection;
