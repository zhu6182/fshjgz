import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle, TrendingUp, Users, BookOpen, Shield, MapPin } from 'lucide-react';
import { supabase } from '../lib/supabase';

const schema = z.object({
  name: z.string().min(2, '姓名至少需要2个字符'),
  phone: z.string().regex(/^1[3-9]\d{9}$/, '请输入有效的手机号码'),
  region: z.string().min(2, '请输入意向代理区域'),
  experience: z.string().optional(),
  investment: z.string().min(1, '请选择预计投入资金'),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const Partner = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('partner_applications').insert([
        {
          name: data.name,
          phone: data.phone,
          region: data.region,
          experience: data.experience,
          investment: data.investment,
          message: data.message,
        },
      ]);

      if (error) throw error;

      // Send email notification
      await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: '【新申请】收到新的城市合伙人申请',
          html: `
            <h2>新合伙人申请</h2>
            <p><strong>姓名：</strong>${data.name}</p>
            <p><strong>电话：</strong>${data.phone}</p>
            <p><strong>意向区域：</strong>${data.region}</p>
            <p><strong>预计投资：</strong>${data.investment}</p>
            <p><strong>行业经验：</strong>${data.experience || '未填写'}</p>
            <p><strong>留言：</strong>${data.message || '无'}</p>
            <p>提交时间：${new Date().toLocaleString()}</p>
          `,
        }),
      });

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: '精准客咨推送',
      description: '大数据分析当地市场，定向投放，实时推送高意向客户需求。',
    },
    {
      icon: <BookOpen className="w-8 h-8 text-secondary" />,
      title: '技术平台支撑',
      description: '依托先进技术平台，实现需求快速匹配，高效接单。',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-secondary" />,
      title: '成熟商业模式',
      description: '复制成功经验，提供标准化的运营指导和业务流程。',
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary" />,
      title: '区域独家保护',
      description: '严格执行区域保护制度，确保合作伙伴在当地的独家权益。',
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-secondary" />,
      title: '全方位扶持',
      description: '从获客到转化，提供全流程的指导和支持。',
    },
    {
      icon: <MapPin className="w-8 h-8 text-secondary" />,
      title: '本地化深耕',
      description: '专注本地市场，深挖社区需求，建立长期稳定的客户关系。',
    },
  ];

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-primary/90 z-10" />
        <img
          src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=business%20team%20planning%20strategy%20meeting%20conference%20room&image_size=landscape_16_9"
          alt="Partner"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">城市合伙人招募</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            携手好家改造，共掘万亿家居后市场金矿
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">六大加盟支持</h2>
          <p className="text-gray-600">全方位扶持，助您轻松创业</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">{benefit.title}</h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-primary p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-2">立即申请加盟</h2>
              <p className="text-blue-100">请填写以下信息，我们的招商经理将在24小时内与您联系</p>
            </div>
            
            <div className="p-8 md:p-12">
              {submitStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">申请提交成功！</h3>
                  <p className="text-gray-600">
                    感谢您的信任。我们会尽快对您的申请进行评估，并由专人与您联系。
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-8 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    返回
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        姓名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        {...register('name')}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="请输入您的姓名"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        联系电话 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        {...register('phone')}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="请输入手机号码"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        意向代理区域 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        {...register('region')}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="例如：广东省佛山市"
                      />
                      {errors.region && (
                        <p className="mt-1 text-sm text-red-500">{errors.region.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        预计投入资金 <span className="text-red-500">*</span>
                      </label>
                      <select
                        {...register('investment')}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <option value="">请选择资金规模</option>
                        <option value="10万以内">10万以内</option>
                        <option value="10-30万">10-30万</option>
                        <option value="30-50万">30-50万</option>
                        <option value="50万以上">50万以上</option>
                      </select>
                      {errors.investment && (
                        <p className="mt-1 text-sm text-red-500">{errors.investment.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      相关行业经验
                    </label>
                    <textarea
                      {...register('experience')}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="请简要描述您的相关经验（选填）"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      其他留言
                    </label>
                    <textarea
                      {...register('message')}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="您还有什么想了解的？（选填）"
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-lg">
                      提交失败，请稍后重试或直接联系客服。
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-secondary text-white font-bold text-lg rounded-lg hover:bg-secondary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? '提交中...' : '提交申请'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
