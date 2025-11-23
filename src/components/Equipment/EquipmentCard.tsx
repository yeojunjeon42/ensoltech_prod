import React from 'react';
import { Link } from 'react-router-dom';
import { EquipmentItem } from '../../data/equipmentData';

interface EquipmentCardProps {
  item: EquipmentItem;
}

const EquipmentCard: React.FC<EquipmentCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {item.name}
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          {item.nameKorean}
        </p>
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">
          {item.description}
        </p>
        
        {item.features && item.features.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              {item.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Link
          to={`/equipment/${item.id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
        >
          Learn More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default EquipmentCard;
