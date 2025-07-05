import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Search, Shield, Zap, Globe } from 'lucide-react';

interface TechStackProps {
  language: string;
}

const content = {
  zh: {
    title: '技术优势',
    subtitle: '支持广泛的模型和引擎选择，让您根据需求和预算自由配置',
    highlights: [
      {
        icon: Brain,
        title: '多模态处理',
        description: '支持文本、图片、视频等多种信息模态的理解和处理',
        color: 'from-blue-500 to-purple-500'
      },
      {
        icon: Zap,
        title: '实时响应',
        description: '优化的缓存机制和并行处理，确保快速响应',
        color: 'from-yellow-500 to-orange-500'
      },
      {
        icon: Shield,
        title: '隐私保护',
        description: '支持本地部署，确保数据隐私和安全性',
        color: 'from-green-500 to-blue-500'
      },
      {
        icon: Globe,
        title: '全球化支持',
        description: '多语言界面和国际化搜索引擎支持',
        color: 'from-purple-500 to-pink-500'
      }
    ],
    llmTab: '大语言模型',
    searchTab: '搜索引擎',
    llmProviders: {
      mainstream: {
        title: '国际主流',
        description: '全球领先的 AI 模型提供商',
        providers: [
          { name: 'OpenAI ChatGPT' },
          { name: 'Google Gemini' },
          { name: 'Anthropic Claude' },
          { name: 'Microsoft Copilot' }
        ]
      },
      domestic: {
        title: '国内领先',
        description: '国内顶尖的大语言模型',
        providers: [
          { name: 'DeepSeek' },
          { name: '阿里云通义千问' },
          { name: '百度文心一言' },
          { name: '腾讯混元' },
          { name: '零一万物 Yi' },
          { name: '月之暗面 Kimi' }
        ]
      },
      local: {
        title: '本地部署',
        description: '支持完全离线的本地模型',
        providers: [
          { name: 'Ollama' },
          { name: 'LMStudio' },
          { name: 'Local Models' }
        ]
      }
    },
    searchEngines: {
      title: '搜索引擎支持',
      description: '丰富的搜索引擎选择，包括传统搜索和 AI 优化的新兴搜索引擎',
      engines: [
        { name: 'Google Search', type: '传统搜索' },
        { name: 'Bing Search', type: '传统搜索' },
        { name: '搜狗搜索', type: '传统搜索' },
        { name: 'Tavily', type: 'AI 优化' },
        { name: 'SearXNG', type: 'AI 优化' },
        { name: 'ChatGLM Web', type: '免费中文' }
      ]
    },
    specialFeature: {
      title: '特色亮点',
      description: '巧妙地将智谱AI的 ChatGLM Web 搜索功能作为一个免费的中文搜索引擎选项，为中文用户提供了极具性价比的选择，无需额外的 API 费用。'
    }
  },
  en: {
    title: 'Technical Advantages',
    subtitle: 'Supports a wide range of models and engines, allowing you to configure freely according to your needs and budget.',
    highlights: [
      {
        icon: Brain,
        title: 'Multi-modal Processing',
        description: 'Supports understanding and processing of various information modalities such as text, images, and videos.',
        color: 'from-blue-500 to-purple-500'
      },
      {
        icon: Zap,
        title: 'Real-time Response',
        description: 'Optimized caching mechanism and parallel processing ensure fast responses.',
        color: 'from-yellow-500 to-orange-500'
      },
      {
        icon: Shield,
        title: 'Privacy Protection',
        description: 'Supports local deployment to ensure data privacy and security.',
        color: 'from-green-500 to-blue-500'
      },
      {
        icon: Globe,
        title: 'Globalization Support',
        description: 'Multi-language interface and international search engine support.',
        color: 'from-purple-500 to-pink-500'
      }
    ],
    llmTab: 'Large Language Models',
    searchTab: 'Search Engines',
    llmProviders: {
      mainstream: {
        title: 'Mainstream International',
        description: 'The world\'s leading AI model providers.',
        providers: [
          { name: 'OpenAI ChatGPT' },
          { name: 'Google Gemini' },
          { name: 'Anthropic Claude' },
          { name: 'Microsoft Copilot' }
        ]
      },
      domestic: {
        title: 'Leading Domestic',
        description: 'Top large language models in China.',
        providers: [
          { name: 'DeepSeek' },
          { name: 'Alibaba Tongyi Qianwen' },
          { name: 'Baidu Wenxin Yiyan' },
          { name: 'Tencent Hunyuan' },
          { name: '01Wanwu Yi' },
          { name: 'Moonshot Kimi' }
        ]
      },
      local: {
        title: 'Local Deployment',
        description: 'Supports fully offline local models.',
        providers: [
          { name: 'Ollama' },
          { name: 'LMStudio' },
          { name: 'Local Models' }
        ]
      }
    },
    searchEngines: {
      title: 'Search Engine Support',
      description: 'A rich selection of search engines, including traditional search and AI-optimized emerging search engines.',
      engines: [
        { name: 'Google Search', type: 'Traditional' },
        { name: 'Bing Search', type: 'Traditional' },
        { name: 'Sogou Search', type: 'Traditional' },
        { name: 'Tavily', type: 'AI Optimized' },
        { name: 'SearXNG', type: 'AI Optimized' },
        { name: 'ChatGLM Web', type: 'Free Chinese' }
      ]
    },
    specialFeature: {
      title: 'Special Feature',
      description: 'Cleverly incorporates the ChatGLM Web search function from Zhipu AI as a free Chinese search engine option, providing a cost-effective choice for Chinese users without additional API fees.'
    }
  }
};

export default function TechStack({ language }: TechStackProps) {
  const currentContent = content[language] || content.zh;
  const techHighlights = currentContent.highlights;

  return (
    <section id="tech" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            {currentContent.title}
          </h2>
          <p className="text-xl text-gray-600">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Tech Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techHighlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${item.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Tech Stack */}
        <Tabs defaultValue="llm" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="llm" className="flex items-center space-x-2">
              <Brain className="w-4 h-4" />
              <span>{currentContent.llmTab}</span>
            </TabsTrigger>
            <TabsTrigger value="search" className="flex items-center space-x-2">
              <Search className="w-4 h-4" />
              <span>{currentContent.searchTab}</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="llm" className="space-y-6">
            {Object.values(currentContent.llmProviders).map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <Card className="shadow-md border-0 h-full">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {category.title}
                    </CardTitle>
                    <CardDescription>
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {category.providers.map((provider, providerIndex) => (
                        <div key={providerIndex} className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
                          <span className="font-medium text-gray-800">{provider.name}</span>
                          <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                            {language === 'zh' ? '支持' : 'Supported'}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="search" className="space-y-6">
            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {currentContent.searchEngines.title}
                </CardTitle>
                <CardDescription>
                  {currentContent.searchEngines.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {currentContent.searchEngines.engines.map((engine, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-800">{engine.name}</div>
                        <div className="text-sm text-gray-600">{engine.type}</div>
                      </div>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                        {language === 'zh' ? '可用' : 'Available'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md border-0 bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{currentContent.specialFeature.title}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {currentContent.specialFeature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}