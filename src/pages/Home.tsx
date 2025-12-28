import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Users, Star, Layers, Droplets, Ruler, Wind } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20living%20room%20renovation%20before%20and%20after%20professional%20interior%20design%20bright%20lighting&image_size=landscape_16_9"
          alt="Home Renovation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            专业家庭上门服务后市场
            <br />
            <span className="text-secondary">精确客咨提供商</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto">
            佛山市好家改造网络科技有限公司，以最新技术做支撑，快速将当地市场的上门需求直接推送给您
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              to="/partner"
              className="px-8 py-4 bg-secondary text-white rounded-full font-bold text-lg hover:bg-secondary/90 transition-transform hover:scale-105"
            >
              成为合伙人
            </Link>
            <Link
              to="/cases"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white text-white rounded-full font-bold text-lg hover:bg-white/20 transition-transform hover:scale-105"
            >
              查看成功案例
            </Link>
          </div>
        </div>
      </section>

      {/* Covered Categories */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">业务覆盖范围</h2>
          <p className="text-gray-600 text-lg">为您提供多品类的家庭上门服务客咨</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-center group">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
              <Layers className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-bold text-gray-900">家具改色贴膜</h3>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-center group">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-100 transition-colors">
              <Shield className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-bold text-gray-900">门窗隔热防爆膜</h3>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-center group">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
              <Droplets className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-bold text-gray-900">居家美容胶</h3>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-center group">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-100 transition-colors">
              <Ruler className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-bold text-gray-900">上门量尺定制坐垫</h3>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-center col-span-2 md:col-span-1 group">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
              <Wind className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-bold text-gray-900">甲醛治理</h3>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">我们的优势</h2>
          <p className="text-gray-600 text-lg">专业获客，精准推送，助您轻松接单</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Service 1 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="aspect-w-16 aspect-h-9 h-64 overflow-hidden">
              <img
                src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=digital%20marketing%20target%20audience%20data%20analysis%20customer%20acquisition&image_size=landscape_4_3"
                alt="Precise Leads"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8 bg-white">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">精准客咨推送</h3>
              <p className="text-gray-600 mb-6">
                利用大数据技术分析当地市场需求，为您提供高质量、高意向的家庭上门服务客户资源。
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-secondary mr-2" />
                  <span>定向投放当地市场</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-secondary mr-2" />
                  <span>实时推送最新需求</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-secondary mr-2" />
                  <span>筛选高意向客户</span>
                </li>
              </ul>
              <Link
                to="/partner"
                className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors"
              >
                立即加入 <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* Service 2 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="aspect-w-16 aspect-h-9 h-64 overflow-hidden">
              <img
                src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=mobile%20app%20notification%20fast%20service%20technology%20support%20connection&image_size=landscape_4_3"
                alt="Tech Support"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8 bg-white">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">最新技术支撑</h3>
              <p className="text-gray-600 mb-6">
                依托强大的技术平台，实现客户需求与服务商的快速匹配，让您不再错过任何一个商机。
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 text-secondary mr-2" />
                  <span>智能匹配派单系统</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 text-secondary mr-2" />
                  <span>全流程数字化管理</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 text-secondary mr-2" />
                  <span>高效便捷的接单体验</span>
                </li>
              </ul>
              <Link
                to="/partner"
                className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors"
              >
                了解详情 <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>


      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">为什么选择好家改造</h2>
            <p className="text-gray-600 text-lg">7年专注，品质保证，服务万千家庭</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">7年行业经验</h3>
              <p className="text-gray-600">
                深耕家居改造行业7年，积累了丰富的施工经验和技术沉淀，因为专业，所以信赖。
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4">专业施工团队</h3>
              <p className="text-gray-600">
                经过严格培训的专业施工队伍，标准化作业流程，确保每一个细节都完美呈现。
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">品质售后保障</h3>
              <p className="text-gray-600">
                严选优质材料，提供长期质保服务，让您用得放心，住得舒心。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Recruitment CTA */}
      <section className="container mx-auto px-4">
        <div className="bg-primary rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 bg-blue-900/50" />
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-black/50 to-transparent" />
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10 p-12 md:p-20">
            <div className="text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">全国招募合伙人</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                好家改造诚邀全国各地有志之士加入。我们提供成熟的商业模式、稳定的客户资源和全方位的技术支持，助您轻松创业。
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-secondary mr-3" />
                  <span className="text-lg">公司提供精准客户资源</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-secondary mr-3" />
                  <span className="text-lg">全套技术培训与运营支持</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-secondary mr-3" />
                  <span className="text-lg">品牌授权，区域保护</span>
                </li>
              </ul>
              <Link
                to="/partner"
                className="inline-block px-8 py-4 bg-secondary text-white rounded-full font-bold text-lg hover:bg-secondary/90 transition-transform hover:scale-105"
              >
                立即申请加盟
              </Link>
            </div>
            <div className="hidden md:block">
              <img
                src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=business%20partnership%20handshake%20corporate%20office%20success%20teamwork&image_size=square_hd"
                alt="Partner"
                className="rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
