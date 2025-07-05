import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  language: string;
}

const content = {
  zh: {
    title: '超越传统的智能搜索',
    subtitle: 'openAsk 结合大型语言模型的推理能力与传统搜索引擎的信息检索能力，为您提供精准、深入且人性化的搜索体验。',
    cta: '立即体验',
  },
  en: {
    title: 'Intelligent Search Beyond Tradition',
    subtitle: 'openAsk combines the reasoning power of large language models with the information retrieval capabilities of traditional search engines to provide you with a precise, in-depth, and user-friendly search experience.',
    cta: 'Try It Now',
  }
};

export default function Hero({ language }: HeroProps) {
  const currentContent = content[language] || content.zh;
  return (
    <section id="home" className="relative pt-24 pb-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="text-5xl sm:text-6xl font-bold leading-tight mb-6 text-black"
            >
              {currentContent.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
              className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {currentContent.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
              className="flex justify-center lg:justify-start"
            >
              <a href="https://wenwen.be" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium rounded-lg">
                  {currentContent.cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="max-w-xl mx-auto lg:max-w-none z-0"
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/assets/openask-interface.png" 
                alt="OpenAsk search interface showing search results and related information" 
                className="w-full h-auto rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}