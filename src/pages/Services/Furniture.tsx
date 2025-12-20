import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

const Furniture = () => {
  const features = [
    {
      title: '多样的纹理选择',
      description: '提供木纹、石纹、皮纹、布纹等上百种花色，满足不同装修风格需求。',
    },
    {
      title: '环保无味',
      description: '采用环保PVC材质，无甲醛无异味，施工完即可入住，呵护家人健康。',
    },
    {
      title: '耐磨耐刮',
      description: '表面经过特殊处理，具有良好的耐磨耐刮性能，使用寿命长。',
    },
    {
      title: '防水防潮',
      description: '优异的防水性能，易于清洁打理，特别适合厨房、卫生间柜体。',
    },
    {
      title: '施工快捷',
      description: '专业团队上门施工，无尘作业，不影响正常生活，快速焕新。',
    },
    {
      title: '性价比高',
      description: '相比更换新家具，改色贴膜成本更低，是旧房改造的经济之选。',
    },
  ];

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=furniture%20renovation%20workshop%20applying%20vinyl%20wrap%20to%20cabinet%20professional%20detail&image_size=landscape_16_9"
          alt="Furniture Renovation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">家具改色贴膜</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            让旧家具焕发新生，打造理想家居风格
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">什么是家具改色贴膜？</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              家具改色贴膜是一种新型的家居翻新方式，通过在家具表面贴覆高品质的装饰膜，
              改变家具的颜色和纹理。它不仅可以遮盖家具表面的瑕疵、划痕，还能根据您的喜好
              更换家居风格，是现代轻装修、重装饰理念的最佳实践。
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              好家改造采用进口环保贴膜材料，配合7年经验的专业施工团队，
              确保每一处细节都完美贴合，让您的家具呈现出如新品般的质感。
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              预约免费上门测量 <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=old%20wooden%20cabinet%20before%20renovation&image_size=portrait_4_3"
              alt="Before"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img
              src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20white%20cabinet%20after%20renovation%20clean%20minimalist&image_size=portrait_4_3"
              alt="After"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">服务优势</h2>
            <p className="text-gray-600">选择好家改造，体验高品质服务</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">服务流程</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: '01', title: '咨询预约', desc: '在线或电话咨询，预约上门测量' },
            { step: '02', title: '上门测量', desc: '专业师傅上门测量尺寸，选样报价' },
            { step: '03', title: '专业施工', desc: '约定时间上门施工，无尘作业' },
            { step: '04', title: '验收交付', desc: '客户验收满意后支付尾款，开启质保' },
          ].map((item, index) => (
            <div key={index} className="text-center relative">
              <div className="text-6xl font-bold text-slate-100 mb-4">{item.step}</div>
              <h3 className="text-xl font-bold mb-2 relative z-10">{item.title}</h3>
              <p className="text-gray-600 relative z-10">{item.desc}</p>
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-slate-200" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Furniture;
