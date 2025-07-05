import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, TrendingUp, BookOpen, Users, Lightbulb, FileSearch } from 'lucide-react';
import { motion } from 'framer-motion';

interface ScenariosProps {
  language: string;
}

const content = {
  zh: {
    title: '使用场景',
    subtitle: '无论是学术研究、商业分析还是日常学习，openAsk 都能为您提供强大的支持',
    scenarios: [
      {
        icon: GraduationCap,
        title: '学术研究',
        subtitle: '深度学术调研助手',
        description: '快速消化学术论文、分析研究趋势、生成文献综述。支持多语言学术资源检索和交叉引用分析。',
        examples: ['论文综述生成', '研究趋势分析', '学术会议总结', '引用关系挖掘'],
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'from-blue-50 to-cyan-50'
      },
      {
        icon: TrendingUp,
        title: '商业分析',
        subtitle: '市场洞察与竞品研究',
        description: '深入分析市场动态、竞品策略、行业报告。结合多源数据提供全面的商业洞察和决策支持。',
        examples: ['行业分析报告', '竞品对比研究', '市场趋势预测', '投资机会挖掘'],
        color: 'from-green-500 to-emerald-500',
        bgColor: 'from-green-50 to-emerald-50'
      },
      {
        icon: BookOpen,
        title: '知识学习',
        subtitle: '个性化学习伙伴',
        description: '将复杂知识点转化为易懂的内容，支持视频课程分析、生成学习笔记和知识图谱构建。',
        examples: ['课程内容总结', '知识点串联', '学习路径规划', '概念图生成'],
        color: 'from-purple-500 to-pink-500',
        bgColor: 'from-purple-50 to-pink-50'
      },
      {
        icon: Users,
        title: '团队协作',
        subtitle: '提升团队效率',
        description: '帮助团队快速获取行业信息、分析会议内容、生成项目报告，提升协作效率和决策质量。',
        examples: ['会议纪要生成', '项目背景调研', '团队知识共享', '决策支持分析'],
        color: 'from-orange-500 to-red-500',
        bgColor: 'from-orange-50 to-red-50'
      },
      {
        icon: Lightbulb,
        title: '创意灵感',
        subtitle: '激发创新思维',
        description: '通过深度研究和多角度分析，为创作、设计、产品开发等创意工作提供丰富的灵感来源。',
        examples: ['创意构思', '趋势洞察', '灵感收集', '创新方向探索'],
        color: 'from-yellow-500 to-orange-500',
        bgColor: 'from-yellow-50 to-orange-50'
      },
      {
        icon: FileSearch,
        title: '内容创作',
        subtitle: '专业内容助手',
        description: '为博客、文章、报告等内容创作提供深度研究支持，确保内容的准确性和专业性。',
        examples: ['文章素材收集', '事实核查', '数据支撑', '观点论证'],
        color: 'from-indigo-500 to-purple-500',
        bgColor: 'from-indigo-50 to-purple-50'
      }
    ],
    ctaTitle: '准备开始您的智能搜索之旅？',
    ctaSubtitle: '无论您是研究者、分析师、学生还是创作者，openAsk 都能为您的工作带来革命性的提升',
    ctaPrimary: '免费试用',
    ctaSecondary: '查看演示'
  },
  en: {
    title: 'Use Cases',
    subtitle: 'Whether for academic research, business analysis, or daily learning, openAsk provides powerful support',
    scenarios: [
      {
        icon: GraduationCap,
        title: 'Academic Research',
        subtitle: 'In-depth academic research assistant',
        description: 'Quickly digest academic papers, analyze research trends, and generate literature reviews. Supports multi-language academic resource retrieval and cross-reference analysis.',
        examples: ['Literature Review Generation', 'Trend Analysis', 'Conference Summary', 'Citation Mining'],
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'from-blue-50 to-cyan-50'
      },
      {
        icon: TrendingUp,
        title: 'Business Analysis',
        subtitle: 'Market insight and competitive research',
        description: 'In-depth analysis of market dynamics, competitor strategies, and industry reports. Provides comprehensive business insights and decision support by combining multi-source data.',
        examples: ['Industry Analysis Report', 'Competitor Comparison', 'Market Trend Forecast', 'Investment Opportunity Mining'],
        color: 'from-green-500 to-emerald-500',
        bgColor: 'from-green-50 to-emerald-50'
      },
      {
        icon: BookOpen,
        title: 'Knowledge Learning',
        subtitle: 'Personalized learning partner',
        description: 'Transforms complex knowledge points into easy-to-understand content, supports video course analysis, generates study notes, and constructs knowledge graphs.',
        examples: ['Course Content Summary', 'Knowledge Connection', 'Learning Path Planning', 'Concept Map Generation'],
        color: 'from-purple-500 to-pink-500',
        bgColor: 'from-purple-50 to-pink-50'
      },
      {
        icon: Users,
        title: 'Team Collaboration',
        subtitle: 'Enhance team efficiency',
        description: 'Helps teams quickly obtain industry information, analyze meeting content, and generate project reports, improving collaboration efficiency and decision quality.',
        examples: ['Meeting Minutes Generation', 'Project Background Research', 'Team Knowledge Sharing', 'Decision Support Analysis'],
        color: 'from-orange-500 to-red-500',
        bgColor: 'from-orange-50 to-red-50'
      },
      {
        icon: Lightbulb,
        title: 'Creative Inspiration',
        subtitle: 'Spark innovative thinking',
        description: 'Provides a rich source of inspiration for creative work such as writing, design, and product development through in-depth research and multi-angle analysis.',
        examples: ['Idea Generation', 'Trend Insight', 'Inspiration Collection', 'Innovation Direction Exploration'],
        color: 'from-yellow-500 to-orange-500',
        bgColor: 'from-yellow-50 to-orange-50'
      },
      {
        icon: FileSearch,
        title: 'Content Creation',
        subtitle: 'Professional content assistant',
        description: 'Provides in-depth research support for content creation such as blogs, articles, and reports, ensuring the accuracy and professionalism of the content.',
        examples: ['Article Material Collection', 'Fact-Checking', 'Data Support', 'Argument Substantiation'],
        color: 'from-indigo-500 to-purple-500',
        bgColor: 'from-indigo-50 to-purple-50'
      }
    ],
    ctaTitle: 'Ready to start your intelligent search journey?',
    ctaSubtitle: 'Whether you are a researcher, analyst, student, or creator, openAsk can revolutionize your work',
    ctaPrimary: 'Try for Free',
    ctaSecondary: 'View Demo'
  }
}

export default function Scenarios({ language }: ScenariosProps) {
  const currentContent = language === 'en' ? content.en : content.zh;

  return (
    <section id="scenarios" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-800">{currentContent.title}</motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-gray-600">{currentContent.subtitle}</motion.p>
        </div>

        {/* Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentContent.scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-br ${scenario.bgColor} border-none`}>
                <CardHeader className="flex flex-row items-center gap-4 p-6">
                  <div className={`p-3 rounded-full bg-gradient-to-tr ${scenario.color} text-white`}>
                    <scenario.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800">{scenario.title}</CardTitle>
                    <CardDescription className="text-md text-gray-600">{scenario.subtitle}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-gray-700 mb-4">{scenario.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {scenario.examples.map((example, i) => (
                      <Badge key={i} variant="secondary" className={`bg-white text-gray-700 border-gray-200`}>{example}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}