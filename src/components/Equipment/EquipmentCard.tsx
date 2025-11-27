import React from 'react';
import { Link } from 'react-router-dom';
import { EquipmentItem } from '../../data/equipmentData';

interface EquipmentCardProps {
  item: EquipmentItem;
}

const EquipmentCard: React.FC<EquipmentCardProps> = ({ item }) => {
  // Get the first image if available
  const firstImage = item.images && item.images.length > 0 ? item.images[0] : null;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 overflow-hidden">
      {/* Image Section */}
      {firstImage && (
        <div className="w-full h-48 bg-gray-100 overflow-hidden">
          <img
            src={`/img/equipment/${firstImage}`}
            alt={item.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
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
        
        {item.specifications && item.specifications.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Key Specifications:</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              {item.specifications.slice(0, 3).map((spec, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                  <span className="line-clamp-2">{spec}</span>
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
