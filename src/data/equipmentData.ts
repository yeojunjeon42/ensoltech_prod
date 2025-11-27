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
    images: []
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
    images: []
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
    images: []
  }
];

export const getEquipmentItem = (id: string): EquipmentItem | undefined => {
  return equipmentData.find(item => item.id === id);
};
