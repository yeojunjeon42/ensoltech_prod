import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getSolutionItem } from '../data/solutionData';
import { useLanguage } from '../contexts/LanguageContext';

const CATEGORY_LABELS: Record<string, { en: string; ko: string }> = {
    equipment:    { en: 'Equipment',    ko: '생산장비 솔루션' },
    enproductive: { en: 'EnProductive', ko: '부속설비 솔루션' },
    encycle:      { en: 'EnSave',       ko: '자재 솔루션' },
};

const SolutionCards: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const { language } = useLanguage();
    const item = id ? getSolutionItem(id) : undefined;

    const getImageCategory = (): string => {
        const pathname = location.pathname;
        if (pathname.startsWith('/equipment/')) return 'equipment';
        if (pathname.startsWith('/enproductive/')) return 'enproductive';
        if (pathname.startsWith('/encycle/')) return 'encycle';
        return 'equipment';
    };

    const imageCategory = getImageCategory();
    const categoryLabel = CATEGORY_LABELS[imageCategory];

    if (!item) {
        return (
            <div className="pt-24 px-4 sm:px-6 lg:px-32 py-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Equipment Not Found</h1>
                    <p className="text-base sm:text-lg text-gray-600">The requested equipment could not be found.</p>
                </div>
            </div>
        );
    }

    const specs = language === 'en' ? item.specifications : item.specificationsKorean;
    const primaryName = language === 'en' ? item.name : item.nameKorean;
    const secondaryName = language === 'en' ? item.nameKorean : item.name;

    return (
        <article className="pt-20 sm:pt-24 px-4 sm:px-6 lg:px-32 pb-12 sm:pb-16">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-sm sm:shadow-lg p-5 sm:p-8 lg:p-10 border border-gray-100">
                    <span className="eyebrow-num block text-[11px] uppercase text-gray-400 mb-3">
                        {language === 'en' ? categoryLabel?.en : categoryLabel?.ko}
                    </span>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
                        {primaryName}
                    </h1>
                    {secondaryName && primaryName !== secondaryName && (
                        <p className="text-base sm:text-lg lg:text-xl text-gray-500 mt-2 leading-snug">
                            {secondaryName}
                        </p>
                    )}

                    <div className="mt-6 sm:mt-8">
                        {specs && specs.length > 0 && (
                            <div className="mb-8">
                                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-4">Specifications</h2>
                                <ul className="space-y-2.5">
                                    {specs.map((spec, index) => (
                                        <li key={index} className="flex items-start text-gray-700 text-sm sm:text-base leading-relaxed">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                                            <span>{spec}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {item.images && item.images.length > 0 && (
                            <div className="mb-8 -mx-5 sm:mx-0 space-y-3 sm:space-y-4">
                                {item.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={`/img/${imageCategory}/${image}`}
                                        alt={`${item.name} — ${index + 1}`}
                                        loading={index === 0 ? 'eager' : 'lazy'}
                                        decoding="async"
                                        className="w-full h-auto sm:rounded-xl shadow-sm"
                                    />
                                ))}
                            </div>
                        )}

                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <p className="text-sm text-gray-500">
                                {language === 'en'
                                    ? 'For more information about this equipment, please do not hesitate to contact us.'
                                    : '본 설비에 대한 자세한 정보가 필요하시면 언제든지 문의해 주세요.'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default SolutionCards;
