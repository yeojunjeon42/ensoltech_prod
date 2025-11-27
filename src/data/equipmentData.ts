export interface EquipmentItem { //defines the type EquipmentItem
  id: string;
  name: string;
  nameKorean: string;
  description: string;
  specifications?: string[];
  specificationsKorean?: string[];
  images?: string[];
}

export const equipmentData: EquipmentItem[] = [
  {
    id: 'horizontal-inline-desmear-pth-flash-cu',
    name: 'Horizontal Inline Desmear+PTH(DM)+Flash Cu line',
    nameKorean: '수평 인라인 디스미어-화학동(블랙홀)-플래시 도금',
    description: 'Horizontal inline desmear, PTH (Black Hole), and flash copper plating system for PCB manufacturing.',
    specifications: [
      'Inline Desmear-PTH-Flash Cu Plating',
      'Module length changes according to electro-copper plating thickness',
      'PPR, DC stable current supply',
      'Stable steel belt clamp (5t production possible)',
      '2-story structure, PPR insoluble anode applied',
      'Lower oxygen bubble removal anode design',
      'Long-term durable material',
      'Sheet, RTR type PCB applicable',
      'MLB, HDI, FPCB, IC sub applications'
    ],
    specificationsKorean: [
      'Inline Desmear-PTH-Flash Cu Plating',
      '전기 동도금두께에 따른 모듈 길이 변경.',
      'PPR, DC 안정적인 전류 공급',
      '안정적인 스틸벨트 클램프 (5t 생산 가능)',
      '2 층구조  PPR 인솔루블 아노드 적용',
      '하부 산소 기포 제거 아노드 설계',
      '장기적 내구성 있는 재질',
      'Sheet, RTR 타입 PCB 적용가능.',
      'MLB, HDI, FPCB, IC sub 응용'
    ],
    images: []
  },
  {
    id: 'steel-belt-vcp',
    name: 'Steel belt type VCP',
    nameKorean: '스틸밸트형 VCP',
    description: 'Steel belt type Vertical Continuous Plating (VCP) system with innovative conveyor technology for high-precision PCB manufacturing.',
    specifications: [
      'Innovative steel belt conveyor applied',
      'DC, PPR, soluble, insoluble copper plating applied',
      'Panel/Pattern plating',
      'Clamp interval 50mm, improved response to high load and thin plates',
      'PPR productivity for high-layer boards (AR 25:1)',
      'Minimized product spacing (3~5mm)',
      'Minimized plating deviation',
      'Automatic loading/unloading of high-layer products realized',
      'Easy PM management and production operation'
    ],
    specificationsKorean: [
      '혁신적인 스틸벨트 컨베이어 적용',
      'DC, PPR, 솔루블, 인솔루블 동도금 적용',
      'Panel/Pattern plating.',
      '클램프 간격 50mm , 고하중 및 박판대응력향상',
      '고다층용 PPR 생산성 (AR 25:1)',
      '제품간 간격 최소화 (3~5mm)',
      '도금 편차 최소화.',
      '고다층제품 자동 로딩/언로딩 실현',
      'PM 관리 및 생산 조작 용이'
    ],
    images: [
      '2-1.png',
      '2-2.png',
      '2-3.png'
    ]
  },
  {
    id: 'carrier-type-plating-line',
    name: 'Carrier type plating line',
    nameKorean: '캐리어 도금 설비',
    description: 'Carrier type plating line system for high aspect ratio PCB manufacturing with advanced agitation and anode technology.',
    specifications: [
      'DC/PPR plating line',
      'MLB, IC sub, FPCB, High AR PCB',
      'Max 45:1 AR copper plating implementation',
      'Soluble/Insoluble anode',
      'Left/right moving panel agitation / Eductor moving agitation',
      'Side eductor (50mm/100mm pitch)',
      'High flow design for multi-layer',
      'Long-life MMO coating anode',
      'DMS (Data management system)',
      'Fully sealed cabinet type'
    ],
    specificationsKorean: [
      'DC/PPR 도금라인',
      'MLB, IC sub, FPCB, High AR PCB',
      'Max 45:1 AR 동도금 구현',
      '솔루블/인솔루블 아노드',
      '좌우이동판넬교반 / 이덕터이동교반',
      '사이드이덕터 Side eductor (50mm/100mm pitch)',
      '고다층용 고유량 설계',
      '장기수명 MMO 코팅 아노드',
      'DMS (Data management system)',
      '전체 캐비닛 밀봉형태.'
    ],
    images: [
      '3.png'
    ]
  },
  {
    id: 'horizontal-wet-process',
    name: 'Horizontal Wet process',
    nameKorean: '수평 웨트 설비',
    description: 'Comprehensive horizontal wet process equipment line for various PCB surface treatment and processing applications.',
    specifications: [
      'Horizontal desmear-copper',
      'Horizontal Immersion Tin',
      'High AR RPCB, ultra thin FPCB, RF, HDI, MSAP, RTR',
      'Custom-designed wet process equipment for various applications.',
      'Blackhole, Shadow, DMSE',
      'Horizontal pretreatment, Polisher',
      'Soft etching',
      'Horizontal Tin stripper',
      'Horizontal DES',
      'Horizontal Super Roughness treatment line',
      'PSR pretreatment',
      'OSP, Immersion Silver',
      'Vertical developer',
      'High-pressure washer',
      'Copper powder filter'
    ],
    specificationsKorean: [
      '수평 디스미어-화학동',
      '수평 Immersion Tin',
      'High AR RPCB, ultra thin FPCB , RF, HDI, MSAP, RTR',
      '각종 웨트 공정 주문형 설계 설비 공급.',
      '블랙홀, 쉐도우, DMSE',
      '수평 전처리, 연마기',
      '소프트에칭',
      '수평 Tin stripper',
      '수평 DES',
      '수평 Super Roughness 처리 라인',
      'PSR 전처리',
      'OSP, Immersion Silver',
      '수직 현상기',
      '고압 수세기',
      '동분 여과기'
    ],
    images: [
      '4-1.png',
      '4-2.png',
      '4-3.png',
      '4-4.png'
    ]
  },
  {
    id: 'horizontal-vacuum-hole-plugging',
    name: 'Horizontal Vacuum Hole Plugging',
    nameKorean: '수평 진공 홀플러깅 설비',
    description: 'Advanced horizontal vacuum hole plugging system (SUUS CTV-800) designed for high-precision PCB manufacturing. Features automated workflow from robot loading through vacuum alignment, printing chamber movement, and robot unloading with oven transfer. Capable of perfect hole plugging for high aspect ratio blind holes and through-holes.',
    specifications: [
      '5:1 AR BVH, 30:1 perfect through-hole plugging',
      'Vacuum degree up to 20pa',
      '1.5~3.5 panels/minute production capacity',
      '4CCD camera alignment',
      'Automatic ink supply device and automatic mesh cleaning device',
      'Work flow: PCB robot loader - front input vacuum and alignment - printing chamber movement (vacuum) - printing and rear output (vacuum-vacuum release) - robot unloader and oven movement',
      'Brand: SUUS',
      'Model: CTV-800'
    ],
    specificationsKorean: [
      '5:1 AR BVH, 30:1 관통홀 완벽 홀플러깅',
      '20pa 이르는 진공도',
      '1.5~3.5 판넬/분 생산성능',
      '4CCD 카메라 얼라인먼트',
      '자동잉크공급장치 및 자동 망사 세척장치',
      '작업 흐름: 기판 로봇 로더-전면투입구진공 및 정렬- 인쇄실이동 (진공)-인쇄 및 후면배출구 (진공- 진공해제) – 로봇 언로더 및 오븐이동',
      '브랜드: SUUS',
      '모델: CTV-800'
    ],
    images: [
      '5-1.png',
      '5-2.png',
      '5-3.png'
    ]
  },
  {
    id: 'vertical-vacuum-hole-plugging',
    name: 'Vertical Vacuum Hole Plugging',
    nameKorean: '수직 진공 홀플러깅 설비',
    description: 'Vertical vacuum hole-plugging system (SUUS VPV900) featuring modular design with separate loading/unloading station and main processing unit. Constructed with robust stainless steel for industrial environments, equipped with multiple vacuum chambers, digital control screens, and integrated piping for vacuum and fluid management.',
    specifications: [
      'Vertical vacuum hole-plugging equipment',
      'Modular design with separate loading/unloading station and main processing unit',
      'Features multiple stainless steel vacuum chambers with circular viewing windows',
      'Equipped with digital control screens and operational indicator lights (stack light)',
      'Robust stainless steel construction for industrial environments',
      'Integrated with extensive piping for vacuum and potential fluid management',
      'Designed for automated material handling (visible rollers/transport system)',
      'Brand: SUUS',
      'Model: VPV900'
    ],
    specificationsKorean: [
      '수직 진공 홀플러깅 장비',
      '별도의 로딩/언로딩 스테이션과 주 처리 장치로 구성된 모듈식 설계',
      '원형 관찰창이 있는 여러 개의 스테인리스 스틸 진공 챔버 포함',
      '디지털 제어 화면 및 작동 표시등 (스택 라이트) 장착',
      '산업 환경에 적합한 견고한 스테인리스 스틸 구조',
      '진공 및 유체 관리를 위한 광범위한 배관 시스템 통합',
      '자동화된 재료 핸들링 시스템 (롤러/이송 시스템 확인 가능) 설계',
      '브랜드: SUUS',
      '모델: VPV900'
    ],
    images: [
      '6.png'
    ]
  },
  {
    id: 'automatic-double-side-psr-screen-printer',
    name: 'Automatic Double Side PSR Screen Printer',
    nameKorean: '전자동 양면 수평 PSR 인쇄기',
    description: 'Fully automatic double-sided horizontal PSR screen printer featuring integrated sequence of input alignment, A-side printing, flipping, B-side printing, and unloading with automatic connection to vertical oven. High-strength aluminum frame ensures precision and long-term stability.',
    specifications: [
      'Integrated sequence of input alignment, A-side printing, flipping, B-side printing, and unloading, with automatic connection to a vertical oven',
      'High-strength aluminum frame ensures high precision and long-term stability',
      'CCD alignment and laser positioning, servo motor precise adjustment',
      'Panel size 350*350~630*760 (mm)',
      'Speed 180~300 panels/hr',
      'Brand: ATMA'
    ],
    specificationsKorean: [
      '투입정렬-A면인쇄-플립-B면인쇄-언로더- 수직 오븐 자동연결가능',
      '고강도 알루미늄 프레임 고정밀도 및 장기적안정성확보',
      'CCD 얼라인먼트 및 레이저 포지셔닝, 서보모터 정밀 조정',
      '판넬사이즈 350*350~630*760',
      '속도 180~300 판넬/hr',
      '브랜드: ATMA'
    ],
    images: [
      '7.png'
    ]
  },
  {
    id: 'ic-package-ceramic-brush-line',
    name: 'IC Package Board Ceramic Brush Line',
    nameKorean: 'IC/반도체 기판/패키지 EMC 세라믹 브러시 설비',
    description: 'Mechanical ceramic brush line for IC package boards designed to remove mold flash efficiently. Achieves higher yield and shorter process time compared to chemical de-flash methods. Effective for QFN packages, exposed thermo pads, and pre-molding lead frames. Suitable for various mold flash types with superior performance on Level B and C flash.',
    specifications: [
      'Mechanical de-flash process for IC package boards',
      'Can shorten the process of removing mold flash and achieve higher yield (remove rate of mold flash)',
      'Effective for QFN packages, exposed thermo pads, and pre-molding lead frames',
      'Suitable for Level B (Mold flash 10-20 µm) and Level C (Mold flash < 10 µm)',
      'Risky but better than chemical for Level A (Resin bleed > 25 µm)',
      'Eliminates need for manual de-flash, chemical soaking, and water jet steps',
      'Compatible with molding, post mold cure, grinding, and plating processes',
      'Model: HGT-420-1, HGT-430-1'
    ],
    specificationsKorean: [
      'IC 패키지 기판용 기계식 세라믹 브러시 공정',
      '몰드 플래시 제거 공정을 단축하고 더 높은 수율(몰드 플래시 제거율) 달성 가능',
      'QFN 패키지, 노출된 서모 패드 및 사전 몰딩 리드 프레임에 효과적',
      '레벨 B (몰드 플래시 10-20 µm) 및 레벨 C (몰드 플래시 < 10 µm)에 적합',
      '레벨 A (레진 블리드 > 25 µm)의 경우 위험하지만 화학적 방법보다 우수',
      '수동 디플래시, 화학적 침지 및 워터 제트 단계 불필요',
      '몰딩, 포스트 몰드 큐어, 그라인딩 및 도금 공정과 호환',
      '모델: HGT-420-1, HGT-430-1'
    ],
    images: [
      '8.png'
    ]
  },
  {
    id: 'vcp-type-barrel-plating-line',
    name: 'VCP Type Barrel Plating Line',
    nameKorean: 'VCP 형 바렐도금 설비',
    description: 'Vertical continuous movement type barrel plating system for efficient and continuous electroplating of small parts. Features continuous horizontal movement with barrel rotation, automatically controlled by PLC/PC at 0-20rpm. Optimized for uniform coating thickness with reduced product wear and hydrogen embrittlement issues.',
    specifications: [
      'Vertical continuous movement type barrel plating',
      'Barrel rotation plating that moves continuously and is automatically controlled by PLC/PC at 0-20rpm',
      'Continuous horizontal movement with barrel rotation (continuous agitation), without vertical displacement',
      'Plating thickness of 5-8µm, requiring 18-30 minutes',
      'Reduced product wear',
      'Reduced hydrogen embrittlement issues',
      'No barrel window, ensuring no temperature difference between the inside and outside of the barrel',
      'Multi-stage tank system with controlled liquid flow',
      'Robust gear and chain drive mechanism for stable operation'
    ],
    specificationsKorean: [
      '수직연속이동형 바렐도금',
      '연속으로 이동하면서 0~20rpm에서 PLC/PC에 의해 자동으로 제어되는 바렐회전도금',
      '상하이동없이 연속이동하며 바랠회전 (연속교반)',
      '5-8um 두께 도금에 18~30분 소요',
      '제품 마모 현상 감소',
      '수소 취성 문제 감소',
      '바렐 윈도우가 없어 바렐 내부외부 온도차 없음',
      '제어된 액체 흐름을 갖춘 다단계 탱크 시스템',
      '안정적인 작동을 위한 견고한 기어 및 체인 구동 메커니즘'
    ],
    images: [
      '9-1.png',
      '9-2.png'
    ]
  }
];

export const getEquipmentItem = (id: string): EquipmentItem | undefined => {
  return equipmentData.find(item => item.id === id);
};
