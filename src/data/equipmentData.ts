export interface EquipmentItem { //defines the type EquipmentItem
  id: string;
  name: string;
  nameKorean: string;
  description: string;
  specifications?: string[];
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
    images: []
  },
  {
    id: 'horizontal-wet-process',
    name: 'Horizontal Wet process',
    nameKorean: '수평 웨트 설비',
    description: 'Comprehensive horizontal wet process equipment line for various PCB surface treatment and processing applications.',
    specifications: [
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
    images: []
  }
];

export const getEquipmentItem = (id: string): EquipmentItem | undefined => {
  return equipmentData.find(item => item.id === id);
};
