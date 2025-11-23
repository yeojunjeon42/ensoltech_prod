export interface EquipmentItem {
  id: string;
  name: string;
  nameKorean: string;
  category: string;
  description: string;
  descriptionKorean: string;
  specifications?: string[];
  features?: string[];
  image?: string;
}

export const equipmentData: EquipmentItem[] = [
  // Vertical PCB/IC Equipment
  {
    id: 'dc-vcp',
    name: 'DC VCP',
    nameKorean: 'DC VCP',
    category: 'vertical-pcb',
    description: 'Direct Current Vertical Continuous Plating system for high-precision PCB manufacturing.',
    descriptionKorean: '고정밀 PCB 제조를 위한 직류 수직 연속 도금 시스템',
    specifications: ['Voltage: 0-12V', 'Current: 0-1000A', 'Tank Capacity: 2000L'],
    features: ['Precision control', 'High efficiency', 'Automated operation'],
    image: 'INSERT FILE NAME HERE.png'
  },
  {
    id: 'ppr-vcp',
    name: 'PPR VCP',
    nameKorean: 'PPR VCP',
    category: 'vertical-pcb',
    description: 'Pulse Periodic Reverse Vertical Continuous Plating system.',
    descriptionKorean: '펄스 주기 역방향 수직 연속 도금 시스템',
    specifications: ['Voltage: 0-15V', 'Current: 0-1200A', 'Tank Capacity: 2500L'],
    features: ['Pulse technology', 'Enhanced uniformity', 'Reduced defects'],
    image: 'PCB equipment solution  KSDW VCP - Steel Belt VCP.png'
  },
  {
    id: 'carrier-cu-plating',
    name: 'Carrier Type CU Plating',
    nameKorean: '캐리어타입 CU plating',
    category: 'vertical-pcb',
    description: 'Carrier-based copper plating system for consistent thickness distribution.',
    descriptionKorean: '일관된 두께 분포를 위한 캐리어 기반 구리 도금 시스템',
    specifications: ['Carrier Size: 600x600mm', 'Thickness: 5-50μm', 'Speed: 2-8m/min'],
    features: ['Carrier system', 'Uniform plating', 'High throughput'],
    image: 'INSERT FILE NAME HERE.png'
  },
  {
    id: 'horizontal-electric-cu-plating',
    name: 'Horizontal Electric CU Plating',
    nameKorean: '수평전기동 CU plating',
    category: 'vertical-pcb',
    description: 'Horizontal electric copper plating system for large format PCBs.',
    descriptionKorean: '대형 PCB용 수평 전기 구리 도금 시스템',
    specifications: ['Panel Size: 610x610mm', 'Current Density: 2-5ASD', 'Speed: 1-5m/min'],
    features: ['Horizontal design', 'Large format', 'Electric drive'],
    image: 'OEM Equipment., Ltd. Horizontal Wet process.png'
  },
  {
    id: 'ic-plating',
    name: 'IC Plating Equipment',
    nameKorean: 'IC 도금 장비',
    category: 'vertical-pcb',
    description: 'Specialized plating equipment for IC package manufacturing.',
    descriptionKorean: 'IC 패키지 제조를 위한 전문 도금 장비',
    specifications: ['Package Size: 2-50mm', 'Precision: ±1μm', 'Throughput: 1000pcs/hr'],
    features: ['IC specialized', 'High precision', 'Automated handling'],
    image: 'INSERT FILE NAME HERE.png'
  },

  // Horizontal PCB Equipment
  {
    id: 'desmear',
    name: 'Desmear',
    nameKorean: 'Desmear',
    category: 'horizontal-pcb',
    description: 'Desmear process equipment for removing resin smear from drilled holes.',
    descriptionKorean: '드릴링된 구멍에서 수지 스미어를 제거하는 데스미어 공정 장비',
    specifications: ['Panel Size: 610x610mm', 'Process Time: 3-8min', 'Temperature: 60-80°C'],
    features: ['Resin removal', 'Hole cleaning', 'Process control'],
    image: '수평인라인 Desmear+PTH(DM)+Flash Cu line.png'
  },
  {
    id: 'electroless-cu',
    name: 'Electroless Cu',
    nameKorean: 'Electroless Cu',
    category: 'horizontal-pcb',
    description: 'Electroless copper deposition system for through-hole metallization.',
    descriptionKorean: '스루홀 금속화를 위한 무전해 구리 증착 시스템',
    specifications: ['Deposition Rate: 0.5-2μm/hr', 'Temperature: 70-85°C', 'pH: 12-13'],
    features: ['Electroless process', 'Through-hole coverage', 'Uniform deposition'],
    image: 'INSERT FILE NAME HERE.png'
  },
  {
    id: 'blackhole',
    name: 'Blackhole',
    nameKorean: 'Blackhole',
    category: 'horizontal-pcb',
    description: 'Blackhole process equipment for carbon-based hole metallization.',
    descriptionKorean: '탄소 기반 구멍 금속화를 위한 블랙홀 공정 장비',
    specifications: ['Carbon Content: 15-25%', 'Process Time: 5-15min', 'Temperature: 40-60°C'],
    features: ['Carbon coating', 'Hole metallization', 'Process stability'],
    image: 'INSERT FILE NAME HERE.png'
  },
  {
    id: 'shadow',
    name: 'Shadow',
    nameKorean: 'Shadow',
    category: 'horizontal-pcb',
    description: 'Shadow process equipment for selective hole metallization.',
    descriptionKorean: '선택적 구멍 금속화를 위한 섀도우 공정 장비',
    specifications: ['Selective Coverage: 80-95%', 'Process Time: 3-10min', 'Temperature: 50-70°C'],
    features: ['Selective process', 'Precision control', 'Cost effective'],
    image: 'INSERT FILE NAME HERE.png'
  },
  {
    id: 'flash-cu-plating',
    name: 'Flash Cu Plating',
    nameKorean: 'Flash Cu plating',
    category: 'horizontal-pcb',
    description: 'Flash copper plating system for thin copper deposition.',
    descriptionKorean: '얇은 구리 증착을 위한 플래시 구리 도금 시스템',
    specifications: ['Thickness: 0.5-2μm', 'Current Density: 1-3ASD', 'Speed: 2-6m/min'],
    features: ['Thin deposition', 'High speed', 'Uniform coverage'],
    image: 'INSERT FILE NAME HERE.png'
  },
  {
    id: 'brownoxide',
    name: 'Brown Oxide',
    nameKorean: 'BrownOxide',
    category: 'horizontal-pcb',
    description: 'Brown oxide treatment system for improved adhesion.',
    descriptionKorean: '향상된 접착력을 위한 브라운 옥사이드 처리 시스템',
    specifications: ['Oxide Weight: 0.3-0.8mg/cm²', 'Process Time: 2-5min', 'Temperature: 70-90°C'],
    features: ['Adhesion improvement', 'Surface treatment', 'Process control'],
    image: 'INSERT FILE NAME HERE.png'
  },
  {
    id: 'immersion-tin',
    name: 'Immersion Tin',
    nameKorean: 'Immersion Tin',
    category: 'horizontal-pcb',
    description: 'Immersion tin plating system for surface finish.',
    descriptionKorean: '표면 마감을 위한 이머전 주석 도금 시스템',
    specifications: ['Thickness: 0.8-1.2μm', 'Process Time: 3-8min', 'Temperature: 50-70°C'],
    features: ['Surface finish', 'Corrosion resistance', 'Solderability'],
    image: 'INSERT FILE NAME HERE.png'
  },

  // Vacuum Hole Plugging
  {
    id: 'vacuum-hole-plugging',
    name: 'Vacuum Hole Plugging Equipment',
    nameKorean: 'Vacuum Hole Plugging Equipment',
    category: 'vacuum-hole-plugging',
    description: 'Vacuum-assisted hole plugging system for PCB manufacturing.',
    descriptionKorean: 'PCB 제조를 위한 진공 보조 구멍 플러깅 시스템',
    specifications: ['Vacuum: 0.1-0.8 bar', 'Hole Size: 0.1-2.0mm', 'Throughput: 500 panels/hr'],
    features: ['Vacuum technology', 'Precision plugging', 'High throughput'],
    image: 'SUNUS 수평 진공 홀플러깅 설비.png'
  },

  // Double-sided Automatic Printer
  {
    id: 'double-sided-printer',
    name: 'Double-sided Automatic Printer',
    nameKorean: 'Double-sided Automatic Printer',
    category: 'double-sided-printer',
    description: 'Automatic double-sided printing system for PCB manufacturing.',
    descriptionKorean: 'PCB 제조를 위한 자동 양면 인쇄 시스템',
    specifications: ['Panel Size: 610x610mm', 'Print Speed: 10-30m/min', 'Resolution: 25μm'],
    features: ['Double-sided', 'Automatic operation', 'High precision'],
    image: 'INSERT FILE NAME HERE.png'
  }
];

export const getEquipmentByCategory = (category: string): EquipmentItem[] => {
  return equipmentData.filter(item => item.category === category);
};

export const getEquipmentItem = (id: string): EquipmentItem | undefined => {
  return equipmentData.find(item => item.id === id);
};
