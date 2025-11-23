import React from 'react';
import { EquipmentItem } from '../../data/equipmentData';
import EquipmentCard from './EquipmentCard';

interface EquipmentGridProps {
  items: EquipmentItem[];
  title: string;
  subtitle?: string;
}

const EquipmentGrid: React.FC<EquipmentGridProps> = ({ items, title, subtitle }) => {
  return (
    <div className="pt-24 px-4 lg:px-32 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <EquipmentCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EquipmentGrid;
