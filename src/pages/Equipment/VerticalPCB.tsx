import React from 'react';
import EquipmentGrid from '../../components/Equipment/EquipmentGrid';
import { getEquipmentByCategory } from '../../data/equipmentData';

const VerticalPCB: React.FC = () => {
  const verticalPCBItems = getEquipmentByCategory('vertical-pcb');

  return (
    <EquipmentGrid
      items={verticalPCBItems}
      title="Vertical PCB/IC Equipment"
      subtitle="수직 PCB/IC 장비 - High-precision vertical continuous plating systems for PCB and IC package manufacturing"
    />
  );
};

export default VerticalPCB;
