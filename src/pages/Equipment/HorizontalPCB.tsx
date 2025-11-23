import React from 'react';
import EquipmentGrid from '../../components/Equipment/EquipmentGrid';
import { getEquipmentByCategory } from '../../data/equipmentData';

const HorizontalPCB: React.FC = () => {
  const horizontalPCBItems = getEquipmentByCategory('horizontal-pcb');

  return (
    <EquipmentGrid
      items={horizontalPCBItems}
      title="Horizontal PCB Equipment"
      subtitle="수평 PCB 장비 - Advanced horizontal processing systems for PCB manufacturing including desmear, plating, and surface treatment"
    />
  );
};

export default HorizontalPCB;
