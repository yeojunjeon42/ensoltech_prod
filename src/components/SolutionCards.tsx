import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getSolutionItem } from '../data/solutionData';
import { useLanguage } from '../contexts/LanguageContext';

const EquipmentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const { language } = useLanguage();
  const item = id ? getSolutionItem(id) : undefined;
  
  // Extract category from pathname (equipment, enproductive, or encycle)
  const getImageCategory = (): string => {
    const pathname = location.pathname;
    if (pathname.startsWith('/equipment/')) return 'equipment';
    if (pathname.startsWith('/enproductive/')) return 'enproductive';
    if (pathname.startsWith('/encycle/')) return 'encycle';
    return 'equipment'; // default fallback
  };
  
  const imageCategory = getImageCategory();

  if (!item) {
    return (
      <div className="pt-24 px-4 lg:px-32 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Equipment Not Found</h1>
          <p className="text-lg text-gray-600">The requested equipment could not be found.</p>
        </div>
      </div>
    );
  }

  return ( //equipment card part
    <div className="pt-24 px-4 lg:px-32 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? item.name : item.nameKorean}
          </h1>
          {language === 'en' && item.nameKorean && (
            <p className="text-xl text-gray-600 mb-6">
              {item.nameKorean}
            </p>
          )}
          {language === 'ko' && item.name && (
            <p className="text-xl text-gray-600 mb-6">
              {item.name}
            </p>
          )}
          
          <div className="prose max-w-none">
            {/* <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description</h2>
            <p className="text-gray-700 mb-8">
              {item.description}
            </p> */}

            {language === 'en' && item.specifications && item.specifications.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Specifications</h2>
                <ul className="space-y-2">
                  {item.specifications.map((spec, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {language === 'ko' && item.specificationsKorean && item.specificationsKorean.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Specifications</h2>
                <ul className="space-y-2">
                  {item.specificationsKorean.map((spec, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Equipment Images */}
            {item.images && item.images.length > 0 && (
              <div className="mb-8 space-y-4">
                {item.images.map((image, index) => (
                  <div key={index}>
                    <img 
                      src={`/img/${imageCategory}/${image}`} 
                      alt={`${item.name} - Image ${index + 1}`}
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                For more information about this equipment, please do not hesitate to contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDetail;
