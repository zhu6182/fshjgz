import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Sun, Eye, ArrowRight } from 'lucide-react';

const Window = () => {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20window%20tinting%20service%20residential%20glass%20film%20application&image_size=landscape_16_9"
          alt="Window Film"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">门窗隔热防爆膜</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            隔热节能、安全防爆、隐私保护，全方位守护您的家
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sun className="w-10 h-10 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4">高效隔热节能</h3>
            <p className="text-gray-600 leading-relaxed">
              阻隔高达80%的太阳热能，夏季降低室内温度3-5℃，冬季减少热量流失。
              有效阻隔99%的紫外线，防止家具、地板褪色老化。
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">安全防爆防护</h3>
            <p className="text-gray-600 leading-relaxed">
              增加玻璃强度，防止意外撞击导致的玻璃破碎飞溅。
              即使玻璃破碎，碎片也会粘附在膜上，保护家人免受伤害。
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-10 h-10 text-purple-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4">单向透视隐私</h3>
            <p className="text-gray-600 leading-relaxed">
              白天从室内看室外清晰自然，从室外看室内如同镜面。
              有效保护家庭隐私，同时不影响采光和视野。
            </p>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=window%20film%20comparison%20clear%20view%20vs%20tinted%20heat%20reduction&image_size=landscape_4_3"
                alt="Effect Comparison"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-primary mb-6">为什么需要贴膜？</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-secondary mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">节省空调电费</h4>
                    <p className="text-gray-600">显著降低空调负荷，为您节省高达30%的制冷费用。</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-secondary mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">提升居住舒适度</h4>
                    <p className="text-gray-600">减少眩光，让室内光线更加柔和，提升视觉舒适度。</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-secondary mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">美化建筑外观</h4>
                    <p className="text-gray-600">统一玻璃颜色，提升建筑外观整体质感。</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  获取报价方案 <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Scenarios */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">适用场景</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative group overflow-hidden rounded-xl">
            <img
              src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=sunroom%20glass%20roof%20window%20film&image_size=square"
              alt="Sunroom"
              className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
              <span className="text-white font-bold text-lg">阳光房</span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl">
            <img
              src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=balcony%20sliding%20glass%20door%20window%20film&image_size=square"
              alt="Balcony"
              className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
              <span className="text-white font-bold text-lg">阳台移门</span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl">
            <img
              src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=bedroom%20window%20privacy%20film&image_size=square"
              alt="Bedroom"
              className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
              <span className="text-white font-bold text-lg">卧室飘窗</span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl">
            <img
              src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=office%20glass%20partition%20frosted%20film&image_size=square"
              alt="Office"
              className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
              <span className="text-white font-bold text-lg">办公隔断</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Window;
