import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Download, Play, Settings, ArrowRight } from 'lucide-react';

export default function GetStarted() {
  const steps = [
    {
      number: '01',
      title: '选择您的配置',
      description: '根据需求选择合适的大语言模型和搜索引擎组合',
      details: ['选择 LLM 提供商', '配置搜索引擎', '设置偏好参数']
    },
    {
      number: '02',
      title: '开始智能搜索',
      description: '输入您的问题或研究主题，体验不同的搜索模式',
      details: ['简洁模式快速问答', '深入模式综合分析', '研究模式自动调研']
    },
    {
      number: '03',
      title: '获取研究成果',
      description: '获得详细的分析报告和可选的 AI 播客内容',
      details: ['结构化研究报告', 'AI 多角色播客', '引用来源追溯']
    }
  ];

  const features = [
    '多模态研究助手',
    '三种搜索模式',
    '广泛的模型支持',
    '本地部署选项',
    '多语言界面',
    '移动端优化',
    '结果缓存',
    '图片搜索'
  ];

  return (
    <section id="get-started" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Get Started
          </h2>
          <p className="text-xl text-gray-600">
            Simple configuration to instantly enjoy intelligent search experience beyond traditional methods
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform translate-x-4 -translate-y-1/2 z-0">
                  <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 w-4 h-4 text-purple-400" />
                </div>
              )}
              
              <Card className="relative z-10 group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            完整功能清单
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center bg-white rounded-lg px-4 py-3 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Demo Button */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-blue-200 hover:border-blue-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Play className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">在线演示</h3>
                <p className="text-sm text-gray-600 mb-4">体验 openAsk 的强大功能</p>
                <Button variant="outline" className="w-full border-blue-200 hover:bg-blue-50">
                  查看演示
                </Button>
              </CardContent>
            </Card>

            {/* Download Button */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-green-200 hover:border-green-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Download className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">下载安装</h3>
                <p className="text-sm text-gray-600 mb-4">获取最新版本的 openAsk</p>
                <Button variant="outline" className="w-full border-green-200 hover:bg-green-50">
                  立即下载
                </Button>
              </CardContent>
            </Card>

            {/* Get Started Button */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-purple-200 hover:border-purple-300 bg-gradient-to-br from-purple-50 to-blue-50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">快速开始</h3>
                <p className="text-sm text-gray-600 mb-4">配置并开始使用 openAsk</p>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  立即开始
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}