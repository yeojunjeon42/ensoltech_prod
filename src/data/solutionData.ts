export interface SolutionItem { //defines the type SolutionItem
  id: string;
  shortname: string;
  name: string;
  nameKorean: string;
  description: string;
  specifications?: string[];
  specificationsKorean?: string[];
  images?: string[];
}

export const equipmentData: SolutionItem[] = [
  {
    id: 'horizontal-inline-desmear-pth-flash-cu',
    shortname: 'Horizontal Inline Desmear-PTH-Flash Cu Line',
    name: 'Horizontal Inline Desmear-PTH-Flash Cu Line',
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
    images: ['1.png']
  },
  {
    id: 'steel-belt-vcp',
    shortname: 'Steel belt type VCP',
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
      '2.png'
    ]
  },
  {
    id: 'carrier-type-plating-line',
    shortname: 'Carrier type plating line',
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
    shortname: 'Horizontal Wet process',
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
      '4.png'
    ]
  },
  {
    id: 'horizontal-vacuum-hole-plugging',
    shortname: 'Horizontal Vacuum Hole Plugging',
    name: 'Horizontal Vacuum Hole Plugging',
    nameKorean: '수평 진공 홀플러깅 설비',
    description: 'Advanced horizontal vacuum hole plugging system (SUUS CTV-800) designed for high-precision PCB manufacturing. Features automated workflow from robot loading through vacuum alignment, printing chamber movement, and robot unloading with oven transfer. Capable of perfect hole plugging for high aspect ratio blind holes and through-holes.',
    specifications: [
      '5:1 AR BVH, 30:1 perfect through-hole plugging',
      'Vacuum degree up to 20 Pa',
      '1.5~3.5 panels/minute production capacity',
      '4CCD camera alignment',
      'Automatic ink supply device and automatic mesh cleaning device',
      'Work flow: PCB robot loader - front input vacuum and alignment - printing chamber movement (vacuum) - printing and rear output (vacuum-vacuum release) - robot unloader and oven movement',
      'Brand: SUUS',
      'Model: CTV-800'
    ],
    specificationsKorean: [
      '5:1 AR BVH, 30:1 관통홀 완벽 홀플러깅',
      '20 Pa 이르는 진공도',
      '1.5~3.5 판넬/분 생산성능',
      '4CCD 카메라 얼라인먼트',
      '자동잉크공급장치 및 자동 망사 세척장치',
      '작업 흐름: 기판 로봇 로더-전면투입구진공 및 정렬- 인쇄실이동 (진공)-인쇄 및 후면배출구 (진공- 진공해제) – 로봇 언로더 및 오븐이동',
      '브랜드: SUUS',
      '모델: CTV-800'
    ],
    images: [
      '5-1.png',
      '5-2.png'
    ]
  },
  {
    id: 'vertical-vacuum-hole-plugging',
    shortname: 'Vertical Vacuum Hole Plugging',
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
    shortname: 'Automatic Double Side PSR Screen Printer',
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
    shortname: 'IC Package Board Ceramic Brush Line',
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
    shortname: 'VCP Type Barrel Plating Line',
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

export const enproductiveData: SolutionItem[] = [
  {
    id: 'topway-online-chemical-analyzer',
    shortname: 'Online Chemical Analyzer',
    name: 'TOPWAY - Real time Online Chemical Analyzer & Dosing System',
    nameKorean: '실시간 온라인 약품 분석 및 보충설비',
    description: '',
    specifications: [
      'The top seller of online chemical analysis system in China',
      'Online etching controller (Cu, H2O2, H2SO4 Etching controller)',
      'Desmear-Electroless Cu- Viafill-',
      'Pd Controller (XRF, Colorimeter)',
      'Electroless Nickel controller for ENIG',
      'Electroless Cu colorimeter type controller (Titration method)',
      'Automatic calibration / Automatic cleaning',
      'Dosing Cup & accurate Tube pump'
    ],
    specificationsKorean: [
      '중국자동분석/공급장치 1위공급사',
      '온라인 에칭콘트롤러 (Cu, H2O2, H2SO4 Etching controller)',
      'Desmear-Electroless Cu- Viafill-',
      '팔라듐 Pd Controller (XRF, Colorimeter)',
      '무전해니켈 Electroless Nickel controller for ENIG',
      '무전해화학동 Electroless Cu colorimeter type controller (적정방식)',
      '자동 캘리브레이션/자동청소',
      'Dosing Cup & accurate Tube pump'
    ],
    images: ['1-1.png', '1-2.png', '1-3.png']
  },
  {
    id: 'smart-filter-particle-sludgy-auto-discharger',
    shortname: 'Particle/Sludgy Auto-discharger',
    name: 'Smart filter – Desmear sludgy/particle automatic discharge system',
    nameKorean: '스마트 필터 - 디스미어 슬러지/파티클 자동 배출',
    description: '',
    specifications: [],
    specificationsKorean: [],
    images: ['2-1.png', '2-2.png', '2-3.png', '2-4.png']
  },
  {
    id: 'multi-channel-ppr-dc-rectifier',
    shortname: 'Multi-channel PPR/DC Rectifier',
    name: 'Multi-channel PPR/DC Rectifier',
    nameKorean: '다채널 PPR/DC 정류기',
    description: '',
    specifications: [
      'Top Pulse/DC rectifier supplier in China, affordable & high performance compared to German/US/Japanese products',
      'Various Multistage Waveform and different settings possible',
      'PPR plating, THF plating application, DC setting possible',
      'Small rectifier space occupation with 4~8 outputs, (Water-cooled, Air-cooled), Individual setting for each Waveform',
      'IGBT + Mosfet method for high-speed switching, 30% power cost saving compared to SCR',
      'RS485 communication support',
      'Demo PPR rectifier free test available',
      'High-speed plating and copper consumption reduction DC -> PPR conversion engineering',
      'Top PCB customers include WUS, TTM, SCC, Founder, Mflex, KingWong'
    ],
    specificationsKorean: [
      '중국 1위 펄스/DC 정류기공급사 독일/미국/일본산 대비 저렴&고성능',
      '다양한 Multistage Waveform 및 상이동 설정가능',
      'PPR 도금, THF 도금 적용, DC 설정 가능',
      '4~8개의 아웃풋으로 적은 정류기 공간 차지, (수냉식, 공냉식), 각 Waveform 개별적으로 설정 가능',
      'IGBT + Mosfet 방식으로 초고속 전환, SCR 대비 30% 전력비 절감',
      'RS485통신지원',
      '데모용 PPR 정류기 무상 테스트 가능',
      '고속도금 및 동소모량감소 DC -> PPR 전환 엔지니어링',
      'WUS, TTM, SCC, Founder, Mflex, KingWong 등 상위 PCB 고객'
    ],
    images: ['3-1.png', '3-2.png', '3-3.png']
  },
  {
    id: 'lab-scale-nano-dip-coater',
    shortname: 'Lab Scale Nano-dip Coater',
    name: 'Lab Scale Nano-dip Coater',
    nameKorean: '소형 딥코터',
    description: '',
    specifications: [
      'Pulling speed: 1 ~ 8000µm/s, resolution: 1µm/s',
      'Stroke length: MAX 260 mm, resolution: 1mm',
      'Substrate size: MIN 10×10mm, MAX 200×200mm',
      'MAX thickness 10mm',
      'Dipping time: 1 ~ 3600s, resolution: 1s',
      'Dipping-Coating cycle times: 1 ~ 1000 times',
      'Cycle interval: 1 ~ 3600s, resolution: 1s',
      'Dimensions (L×W×H): 440×300×780mm',
      'Servo motor and high-precision operation module used for smooth and stable coating speed',
      '100% chemical resistant material used',
      'Various parameters, fully automatic control (dipping/pulling speed adjustment, immersion time, stroke distance, coating cycles, coating intervals, etc.)',
      '4.3 inch touch screen HMI used. All steps and parameters displayed',
      'Specially designed clamping - easy to break products usable',
      'Various shape coating possible (sheets, blocks, cylindrical)'
    ],
    specificationsKorean: [
      '풀링 속도 : 1 ~ 8000µm/s/ resolution:1µm/s',
      'Stroke length: MAX 260 mm , resolution:1mm',
      'Substrate size: MIN 10×10mm, MAX 200×200mm',
      'MAX thickness 10mm',
      'Dipping time: 1 ~ 3600s , resolution:1s',
      'Dipping-Coating cycle times: 1 ~ 1000 times',
      'Cycle interval: 1 ~ 3600s , resolution:1s',
      'Dimensions (L×W×H): 440×300×780mm',
      '서보모터와 고정밀 작동모듈사용 부드럽고 안정적인 코팅속도',
      '100% 윤활불필요하며 약품에 견디는 재질 채용',
      '다양한 파라미터, 전자동 제어 (디핑/풀링속도조절, 침적시간, 스트로크거리, 코팅사이클, 코팅간격등)',
      '4.3인치 터치스크린 HMI 사용. 모든 steps 와 parameters 디스플레이됨',
      '특수설계된 클램핑- 깨지기 쉬운제품 사용가능',
      'sheets, blocks, cylindrical 등 다양한 형상 코팅 가능함'
    ],
    images: ['4.png']
  },
  {
    id: 'colloidal-pd-recovery-system',
    shortname: 'Colloidal Pd recovery',
    name: 'Colloidal Pd Recovery System',
    nameKorean: '콜로이드 팔라듐 회수장치',
    description: '',
    specifications: [
      'Generally, ion type palladium can be recovered by ion exchange equipment, but colloidal palladium is very difficult to recover by ion exchange resin method.',
      'Uses new recovery method through chemical reaction',
      'High recovery rate compared to existing ion exchange method (over 90~95%)',
      'No resin replacement needed, no risk of resin contamination',
      'Reduction of TOC, COD in wastewater',
      'Accurate recovery value assessment as recovery process takes place at palladium usage production site'
    ],
    specificationsKorean: [
      '일반적으로 이온타입 팔라듐은 이온교환장치등으로 회수가능. 하지만 콜로이드형 팔라듐은 이온교환수지방법으로 회수가 매우 어려움.',
      '약품반응을 통한 신규 회수 방법사용 기존 이온교환방식에 비해 높은 회수율 (90~95% 이상)',
      '레진교환이 필요없으며, 레진 오염발생위험이 없음.',
      '폐수의 TOC, COD 감소.',
      '회수공정이 팔라듐사용 생산현장에서 이뤄지므로 정확하게 회수 가치 평가.'
    ],
    images: ['5-1.png', '5-2.png']
  },
  {
    id: 'tin-recovery-system',
    shortname: 'TinCycle',
    name: 'Pattern Plating Tin Stripper Tin Recovery System – TinCycle',
    nameKorean: '패턴도금 Tin Stripper Tin 회수장치– TinCycle',
    description: '',
    specifications: [],
    specificationsKorean: [],
    images: ['6.png']
  },
  {
    id: 'smart-water-supply-control-enflow',
    shortname: 'ENflow',
    name: 'Smart Water supply control - ENflow',
    nameKorean: '스마트 물공급조절장치',
    description: '',
    specifications: [
      'AI water supply control device through pH, conductivity meter data',
      'Cloud-based pH, conductivity meter real-time monitoring and control',
      'MES integration management',
      'Adopted by leading PCB companies such as SCC, Fastprint, AVARY',
      '15~50% water supply saving & wastewater treatment volume saving'
    ],
    specificationsKorean: [
      'pH, 전도도미터의 데이터를 통한 인공지능 물공급 제어 장치',
      '클라우드 기반 pH, 전도도미터 실시간 모니터링 및 제어',
      'MES 연동 관리',
      'SCC, Fastprint, AVARY 등 선도 PCB 기업에서 채용중.',
      '15~50% 물공급량 절약 & 폐수처리량 절약'
    ],
    images: ['7.png']
  }
];

export const encycleData: SolutionItem[] = [
  {
    id: 'sponge-roller-sheet',
    shortname: 'Sponge Roller & Sheets',
    name: 'Sponge Roller & Sheets',
    nameKorean: '고흡수성 스폰지롤러',
    description: '',
    specifications: [],
    specificationsKorean: [],
    images: ['1-1.png', '1-2.png']
  },
  {
    id: 'ensave-spiral-weight-roller',
    shortname: 'EnSave Spiral Weight Roller',
    name: 'Spiral Weight Roller (특허등록)',
    nameKorean: '액절강화롤러',
    description: '',
    specifications: [],
    specificationsKorean: [],
    images: ['2-1.png', '2-2.png', '2-3.png']
  },
  {
    id: 'ceramic-non-woven-brush',
    shortname: 'High Cut Ceramic & Non-woven Brush',
    name: 'High Cut Ceramic & Non-woven Brush',
    nameKorean: '세라믹/고절삭 부직포 브러시',
    description: '',
    specifications: [],
    specificationsKorean: [],
    images: ['3-1.png', '3-2.png']
  },
  {
    id: 'dual-cu-al-film',
    shortname: 'Dual Cu-Al Film',
    name: 'Dual Cu-Al Film',
    nameKorean: 'Cu-Aluminum 복합듀얼박',
    description: '',
    specifications: [],
    specificationsKorean: [
      '고온, 고압, 무산소 조건 하에서 구리층과 알루미늄층 사이의 금속학적 접합 실현',
      '구리-알루미늄 간 산화층 또는 기타 물질 없음',
      '20N/mm 구리/알루미늄간 계면 접합강도',
      '10~30% 동박 두께 비율',
      '국제적으로 인증받은 이중 금속 복합 공정 (반용융 알루미늄 접합공정)',
      '배터리, EMI, 캐리어 필름 응용, 무게 및 비용감소',
      'CATL, Huawei 등 중국 유수전기전자업체 고객확보',
      '단면/양면 복합동박'
    ],
    images: ['4-1.png', '4-2.png']
  },
  {
    id: 'insoluble-anode',
    shortname: 'Insoluble anode',
    name: 'Insoluble Anode',
    nameKorean: '불용성 양극',
    description: '',
    specifications: [],
    specificationsKorean: [
      '이탈리아 CNT 사와 기술제휴.',
      '최저 광택제 소모량.',
      '긴수명과 신뢰성.',
      '수평, 수직 적용.',
      '메쉬 와 평판 타입 선택',
      '고객사 디자인에 맞추어 제작.',
      'DC Cu plating',
      'PPR Cu plating',
      'Platinum Anode for Gold plating',
      'Decorative coating',
      'Fouling 방지 냉가수 소독 (IMO / USCG 규제)',
      'Cu foil production (ED)',
      '폐수처리 킬레이트 분해'
    ],
    images: ['5-1.png', '5-2.png']
  },
  {
    id: 'non-contact-digital-flowmeter',
    shortname: 'Non-contact Digital Flowmeter',
    name: 'Non-contact Digital Flowmeter',
    nameKorean: '비접촉 디지털 유량계',
    description: '',
    specifications: [],
    specificationsKorean: [],
    images: ['6.png']
  },
  {
    id: 'activated-carbon-filter',
    shortname: 'Activated carbon filter',
    name: 'Activated carbon filter',
    nameKorean: '고정밀 카본필터',
    description: '',
    specifications: [],
    specificationsKorean: [],
    images: ['7-1.png', '7-2.png']
  },
  {
    id: 'nano-cuprum-filter',
    shortname: 'Nano-CuPrum', 
    name: 'Nano-CuPrum',
    nameKorean: '항균필터',
    description: 'PP 필터에 항균물질 함침 가공, 필터성능변화없이 99% 박테리아, 곰팡이제거',
    specifications: [],
    specificationsKorean: [],
    images: ['8.png']
  }
];

export const getSolutionItem = (id: string): SolutionItem | undefined => {
  return [...equipmentData, ...enproductiveData, ...encycleData].find(item => item.id === id);
};