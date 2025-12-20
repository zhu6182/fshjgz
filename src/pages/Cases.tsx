import React, { useState } from 'react';
import { Star } from 'lucide-react';

const Cases = () => {
  const [filter, setFilter] = useState<'all' | 'furniture' | 'window'>('all');

  const cases = [
    {
      id: 1,
      title: '欧式古典橱柜改色',
      category: 'furniture',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=classic%20european%20kitchen%20cabinet%20white%20finish%20renovation&image_size=landscape_4_3',
      description: '原木色橱柜改象牙白，搭配金色把手，瞬间提升厨房档次。',
    },
    {
      id: 2,
      title: '阳光房隔热膜工程',
      category: 'window',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=sunroom%20glass%20ceiling%20window%20tinting%20bright%20sky&image_size=landscape_4_3',
      description: '顶面玻璃贴隔热膜，有效降低室内温度，夏天也能在阳光房喝茶。',
    },
    {
      id: 3,
      title: '卧室衣柜翻新',
      category: 'furniture',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20bedroom%20wardrobe%20gray%20minimalist%20renovation&image_size=landscape_4_3',
      description: '老式衣柜改高级灰，简约现代风，与新装修风格完美融合。',
    },
    {
      id: 4,
      title: '办公室玻璃隔断贴膜',
      category: 'window',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20office%20glass%20partition%20frosted%20privacy%20film&image_size=landscape_4_3',
      description: '磨砂渐变膜，既保证了隐私，又保留了通透感，办公环境更舒适。',
    },
    {
      id: 5,
      title: '实木餐桌修复改色',
      category: 'furniture',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=wooden%20dining%20table%20restoration%20dark%20walnut%20finish&image_size=landscape_4_3',
      description: '桌面划痕修复，改深胡桃木色，质感厚重，焕然一新。',
    },
    {
      id: 6,
      title: '客厅落地窗防爆膜',
      category: 'window',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=living%20room%20floor%20to%20ceiling%20window%20safety%20film&image_size=landscape_4_3',
      description: '高层住宅落地窗贴防爆膜，安全防护，守护家人安全。',
    },
  ];

  const filteredCases = filter === 'all' ? cases : cases.filter((c) => c.category === filter);

  const reviews = [
    {
      name: '张女士',
      location: '佛山禅城',
      content: '家里的柜子用了十几年了，舍不得扔，贴了膜之后跟新的一样，师傅手艺很好，边角处理得很细致。',
      rating: 5,
    },
    {
      name: '李先生',
      location: '广州天河',
      content: '西晒的房间夏天太热了，贴了隔热膜之后明显感觉温度降下来了，空调效果也更好了，推荐！',
      rating: 5,
    },
    {
      name: '王小姐',
      location: '佛山南海',
      content: '非常专业的团队，从测量到施工都很准时，干活也利索，还会帮忙打扫卫生，服务态度满分。',
      rating: 5,
    },
  ];

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-slate-50 py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-4">成功案例</h1>
          <p className="text-xl text-gray-600">见证每一次完美的蜕变</p>
        </div>
      </div>

      {/* Gallery */}
      <div className="container mx-auto px-4 py-12">
        {/* Filter Buttons */}
        <div className="flex justify-center mb-12 space-x-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filter === 'all' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            全部案例
          </button>
          <button
            onClick={() => setFilter('furniture')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filter === 'furniture' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            家具改色
          </button>
          <button
            onClick={() => setFilter('window')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filter === 'window' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            门窗贴膜
          </button>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredCases.map((item) => (
            <div key={item.id} className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-secondary uppercase">
                    {item.category === 'furniture' ? '家具改色' : '门窗贴膜'}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">客户评价</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{review.content}"</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-primary">{review.name}</span>
                  <span className="text-gray-400">{review.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
