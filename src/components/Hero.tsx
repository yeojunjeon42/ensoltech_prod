import React from 'react';

function Hero() {
    return (
        <div>
            <h1 className="text-black text-6xl font-bold leading-tight" style={{ fontFamily: 'Inter, Arial, Helvetica, sans-serif' }}>
                ENSOLTECH
            </h1>
            <p className="text-gray-700 text-lg mt-6 max-w-4xl leading-relaxed">
                엔솔테크는 PCB, IC Package, GMF, PV, 베터리 등의
                산업분야에 필요한 최적의 설비와 부품, 원자재
                등을 공급하고, 약품절감 및 물 사용 최적화, 폐수
                리사이클 솔루션을 통해 생산성향상 및 원가절감
                솔루션을 제공하고 환경을 보호함으로써 고객의
                수익과 사회적 가치를 높이는데 기여하겠습니다.
            </p>
        </div>
    );
}

export default Hero;
