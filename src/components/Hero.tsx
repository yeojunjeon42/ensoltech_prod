import { useLanguage } from '../contexts/LanguageContext';

const KOREAN_TEXT =
    '엔솔테크는 PCB, IC Package, GMF, PV, 베터리 등의 산업분야에 필요한 최적의 설비와 부품, 원자재 등을 공급하고, 약품절감 및 물 사용 최적화, 폐수 리사이클 솔루션을 통해 생산성향상 및 원가절감 솔루션을 제공하고 환경을 보호함으로써 고객의 수익과 사회적 가치를 높이는데 기여하겠습니다.';

const ENGLISH_TEXT =
    'ENSOLTECH supplies optimal equipment, components, and raw materials needed for industrial fields such as PCB, IC Package, GMF, PV, and batteries. Through chemical reduction and water usage optimization, wastewater recycling solutions, we contribute to improving customer profitability and social value by providing productivity improvement and cost reduction solutions while protecting the environment.';

function Hero() {
    const { language } = useLanguage();

    return (
        <section aria-labelledby="hero-heading" className="relative">
            <span className="eyebrow-num block text-[11px] uppercase text-gray-400 mb-2 sm:mb-3">
                Est. 2015 — Ansan, Korea
            </span>
            <h1
                id="hero-heading"
                className="text-black font-bold leading-[0.95] tracking-tight text-[clamp(2.5rem,8vw,4.5rem)] lg:text-6xl"
                style={{ fontFamily: 'Inter, Arial, Helvetica, sans-serif' }}
            >
                ENSOLTECH
            </h1>
            <p className="text-gray-700 text-base sm:text-lg mt-5 sm:mt-6 max-w-4xl leading-relaxed">
                {language === 'en' ? ENGLISH_TEXT : KOREAN_TEXT}
            </p>
        </section>
    );
}

export default Hero;
