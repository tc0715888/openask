import { Badge } from '@/components/ui/badge';
import { Github, Twitter, Mail, Heart, ExternalLink, Copy } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface FooterProps {
  language: string;
}

const content = {
  zh: {
    description: '基于大型语言模型的智能搜索引擎，提供多模态研究助手、灵活搜索模式和现代化交互体验。超越传统搜索，开启智能信息获取新时代。',
    product: '产品',
    productLinks: [
      { name: '功能特色', href: '#features' },
      { name: '技术优势', href: '#tech' },
      { name: '使用场景', href: '#scenarios' }
    ],
    resources: '资源',
    resourcesLinks: [
      { name: '使用文档', href: '#' },
      { name: '开发指南', href: '#' },
      { name: 'API 参考', href: '#' },
      { name: '常见问题', href: '#' }
    ],
    community: '社区',
    communityLinks: [
      { name: 'GitHub', href: '#', icon: Github },
      { name: '讨论社区', href: '#' },
      { name: '用户反馈', href: '#' },
      { name: '贡献指南', href: '#' }
    ],
    support: '支持',
    supportLinks: [
      { name: '技术支持', href: '#' },
      { name: '联系我们', href: '#', icon: Mail },
      { name: '问题报告', href: '#' },
      { name: '功能建议', href: '#' }
    ],
    copyright: '© 2024 Open Ask. 版权所有。',
    privacyPolicy: '隐私政策',
    termsOfService: '服务条款',
    usageAgreement: '使用协议',
    builtFor: '为智能搜索的未来而建'
  },
  en: {
    description: 'An intelligent search engine based on large language models, providing a multi-modal research assistant, flexible search modes, and a modern interactive experience. Go beyond traditional search and usher in a new era of intelligent information acquisition.',
    product: 'Product',
    productLinks: [
      { name: 'Features', href: '#features' },
      { name: 'Tech Stack', href: '#tech' },
      { name: 'Use Cases', href: '#scenarios' }
    ],
    resources: 'Resources',
    resourcesLinks: [
      { name: 'Documentation', href: '#' },
      { name: 'Developer Guide', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'FAQ', href: '#' }
    ],
    community: 'Community',
    communityLinks: [
      { name: 'GitHub', href: '#', icon: Github },
      { name: 'Discussions', href: '#' },
      { name: 'Feedback', href: '#' },
      { name: 'Contributing', href: '#' }
    ],
    support: 'Support',
    supportLinks: [
      { name: 'Technical Support', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Report a Bug', href: '#' },
      { name: 'Feature Request', href: '#' }
    ],
    copyright: '© 2024 Open Ask. All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    usageAgreement: 'Usage Agreement',
    builtFor: 'Built for the future of intelligent search'
  }
};

export default function Footer({ language }: FooterProps) {
  const { toast } = useToast();
  const currentContent = language === 'en' ? content.en : content.zh;
  const socialLinks = [
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Email', href: '#', icon: Mail }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-gray-900 text-white"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-7 h-7 bg-red-500 rounded-sm flex items-center justify-center transform rotate-3">
                  <span className="text-white font-bold text-xs">AI</span>
                </div>
                <span className="text-xl font-semibold text-white">
                  Open Ask
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                {currentContent.description}
              </p>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors group"
                      title={social.name}
                    >
                      <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold text-white mb-4">{currentContent.product}</h3>
              <ul className="space-y-2">
                {currentContent.productLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h3 className="font-semibold text-white mb-4">{currentContent.resources}</h3>
              <ul className="space-y-2">
                {currentContent.resourcesLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h3 className="font-semibold text-white mb-4">{currentContent.community}</h3>
              <ul className="space-y-2">
                {currentContent.communityLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center"
                    >
                      {link.icon && <link.icon className="w-3 h-3 mr-1.5 opacity-60" />}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h3 className="font-semibold text-white mb-4">{currentContent.support}</h3>
              <ul className="space-y-2">
                {currentContent.supportLinks.map((link, index) => {
                  if (link.name === 'Contact Us' || link.name === '联系我们') return null;
                  return (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center"
                      >
                        {link.icon && <link.icon className="w-3 h-3 mr-1.5 opacity-60" />}
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>


      </div>
    </motion.footer>
  );
}