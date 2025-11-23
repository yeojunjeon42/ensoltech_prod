import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ENSOLTECH</h3>
            <p className="text-gray-300 text-sm">
              수직수평 웨트설비 <br />
              실시간 농도분석보충설비<br />
              디지털유량계압력계<br />
              스폰지롤러/특수액절롤러<br />
              스마트필터-슬러지배출장치 <br />
              불용성아노드/다채널펄스정류기<br />
              폐액금속회수장치 (Pd, Ni, Cu)<br />
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <div>
                <p className="font-medium text-white">Tel</p>
                <p>+82 (KR) 010-2674-6146</p>
                <p>+86 (CN) 151-0613-2824</p>
              </div>
              <div className="mt-3">
                <p className="font-medium text-white">Email</p>
                <a href="mailto:teiry@naver.com" className="hover:text-blue-400 transition-colors">
                  teiry@naver.com
                </a>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Location</h4>
            <address className="text-gray-300 text-sm not-italic">
              (15431) 안산시 단원구 풍전로 37-24,<br />
              317동 307호<br />
              (원곡동, 한신트리플렉스)
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Ensoltech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
