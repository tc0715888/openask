import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Brain, Search, Settings, Smartphone, Youtube, FileText, Mic, Globe2 } from 'lucide-react';

interface FeaturesProps {
  language: string;
}

const content = {
  zh: {
    sectionTitle: '核心功能',
    sectionSubtitle: '四大核心功能模块，为您提供前所未有的信息获取和研究体验',
    features: [
      {
        icon: Brain,
        title: 'Multi-Modal Researcher',
        subtitle: '基于 Gemini 2.5 的自动研究助手',
        description: '只需输入研究主题或 YouTube 链接，AI 会自动进行网络研究和视频分析，生成详细研究报告和 AI 播客。',
        highlights: ['自动网络研究', '深度视频分析', '引用来源', 'AI 多角色播客'],
      },
      {
        icon: Search,
        title: '灵活搜索模式',
        subtitle: '三种模式适应不同需求',
        description: '简洁模式追求速度，深入模式寻求全面，研究模式提供最复杂的分析能力。',
        highlights: ['简洁模式 (Simple)', '深入模式 (Deep)', '研究模式 (Research)', '智能切换'],
      },
      {
        icon: Settings,
        title: '广泛模型支持',
        subtitle: '开放的引擎与模型生态',
        description: '支持 OpenAI、Google、国内主流大模型，以及本地部署选项，让您自由选择最适合的组合。',
        highlights: ['国际主流模型', '国内领先模型', '本地化部署', '多搜索引擎'],
      },
      {
        icon: Smartphone,
        title: '现代化体验',
        subtitle: '流畅舒适的交互设计',
        description: '对话式搜索、多轮追问、结果缓存、图片搜索，以及移动端优先的响应式设计。',
        highlights: ['对话式交互', '结果缓存', '图片搜索', '响应式设计'],
      }
    ],
    detailFeatures: [
      {
        icon: Youtube,
        title: '视频内容分析',
        description: 'AI 深度理解 YouTube 视频内容，提取关键信息和论点'
      },
      {
        icon: FileText,
        title: '研究报告生成',
        description: '自动生成结构清晰的综合报告，包含引用来源'
      },
      {
        icon: Mic,
        title: 'AI 播客生成',
        description: '多角色 AI 主播以对话形式讲解研究内容'
      },
      {
        icon: Globe2,
        title: '多语言支持',
        description: '支持中文、英文、日文等多种语言界面'
      }
    ]
  },
  en: {
    sectionTitle: 'Core Features',
    sectionSubtitle: 'Four core functional modules provide you with an unprecedented information acquisition and research experience.',
    features: [
      {
        icon: Brain,
        title: 'Multi-Modal Researcher',
        subtitle: 'Gemini 2.5 based automated research assistant',
        description: 'Just enter a research topic or YouTube link, and the AI will automatically conduct web research and video analysis to generate detailed research reports and AI podcasts.',
        highlights: ['Automated Web Research', 'In-depth Video Analysis', 'Cited Sources', 'AI Multi-role Podcast'],
      },
      {
        icon: Search,
        title: 'Flexible Search Modes',
        subtitle: 'Three modes to suit different needs',
        description: 'Simple mode for speed, Deep mode for comprehensiveness, and Research mode for the most complex analysis capabilities.',
        highlights: ['Simple Mode', 'Deep Mode', 'Research Mode', 'Intelligent Switching'],
      },
      {
        icon: Settings,
        title: 'Broad Model Support',
        subtitle: 'Open engine and model ecosystem',
        description: 'Support for OpenAI, Google, mainstream domestic large models, and local deployment options, allowing you to freely choose the most suitable combination.',
        highlights: ['Mainstream International Models', 'Leading Domestic Models', 'Local Deployment', 'Multiple Search Engines'],
      },
      {
        icon: Smartphone,
        title: 'Modern Experience',
        subtitle: 'Smooth and comfortable interaction design',
        description: 'Conversational search, multi-round follow-up questions, result caching, image search, and a mobile-first responsive design.',
        highlights: ['Conversational Interaction', 'Result Caching', 'Image Search', 'Responsive Design'],
      }
    ],
    detailFeatures: [
      {
        icon: Youtube,
        title: 'Video Content Analysis',
        description: 'AI deeply understands YouTube video content, extracting key information and arguments.'
      },
      {
        icon: FileText,
        title: 'Research Report Generation',
        description: 'Automatically generates well-structured comprehensive reports, including cited sources.'
      },
      {
        icon: Mic,
        title: 'AI Podcast Generation',
        description: 'Multi-role AI hosts explain research content in a conversational format.'
      },
      {
        icon: Globe2,
        title: 'Multi-language Support',
        description: 'Supports multiple language interfaces including Chinese, English, and Japanese.'
      }
    ]
  }
}

export default function Features({ language }: FeaturesProps) {
  const currentContent = content[language] || content.zh;

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            {currentContent.sectionTitle}
          </h2>
          <p className="text-xl text-gray-600">
            {currentContent.sectionSubtitle}
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {currentContent.features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-10 h-10 bg-black rounded-lg p-2.5 flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-black mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4 pl-14">
                    {feature.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pl-14">
                    {feature.highlights.map((highlight, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detail Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentContent.detailFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}