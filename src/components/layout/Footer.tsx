import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">好家改造</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              佛山市好家改造网络科技有限公司拥有7年行业经验，专注于家具改色贴膜和门窗隔热防爆膜服务。致力于为每一个家庭打造更美好的居住环境。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">快速链接</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services/furniture" className="text-slate-400 hover:text-white transition-colors">
                  家具改色贴膜
                </Link>
              </li>
              <li>
                <Link to="/services/window" className="text-slate-400 hover:text-white transition-colors">
                  门窗隔热防爆膜
                </Link>
              </li>
              <li>
                <Link to="/cases" className="text-slate-400 hover:text-white transition-colors">
                  成功案例
                </Link>
              </li>
              <li>
                <Link to="/partner" className="text-slate-400 hover:text-white transition-colors">
                  合伙人招募
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">联系我们</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-slate-400">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span>广东省佛山市南海区招商置地3座1708室</span>
              </li>
              <li className="flex items-center text-slate-400">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="tel:12345678901" className="hover:text-white transition-colors">123-4567-8901</a>
              </li>
              <li className="flex items-center text-slate-400">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="mailto:info@haojia.com" className="hover:text-white transition-colors">info@haojia.com</a>
              </li>
              <li className="flex items-center text-slate-400">
                <Clock className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>周一至周日 9:00 - 18:00</span>
              </li>
            </ul>
          </div>

          {/* QR Code */}
          <div>
            <h3 className="text-lg font-bold mb-6">关注我们</h3>
            <div className="bg-white p-2 inline-block rounded-lg">
              {/* Placeholder for QR Code */}
              <div className="w-32 h-32 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                微信公众号
              </div>
            </div>
            <p className="text-slate-400 mt-4 text-sm">
              扫码关注公众号<br />获取最新优惠资讯
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} 佛山市好家改造网络科技有限公司 版权所有 | 粤ICP备XXXXXXXX号</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
