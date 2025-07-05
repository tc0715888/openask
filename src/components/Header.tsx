import { Button } from '@/components/ui/button';
import { Menu, X, Copy } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from '@/hooks/use-toast';

const navItems = {
  zh: [
    { name: '功能特色', href: '#features' },
    { name: '技术优势', href: '#tech' },
    { name: '使用场景', href: '#scenarios' },
    { name: '联系我们', href: '#contact' },
  ],
  en: [
    { name: 'Features', href: '#features' },
    { name: 'Technology', href: '#tech' },
    { name: 'Scenarios', href: '#scenarios' },
    { name: 'Contact Us', href: '#contact' },
  ]
};

interface HeaderProps {
  language: string;
  setLanguage: (language: string) => void;
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };



  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 bg-red-500 rounded-sm flex items-center justify-center transform rotate-3 shadow-sm">
              <span className="text-white font-bold text-xs">AI</span>
            </div>
            <span className="text-xl font-semibold text-black">
              Open Ask
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems[language].map((item, index) => (
              <div key={index}>
                {item.name === 'Contact Us' || item.name === '联系我们' ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-gray-600 hover:text-black transition-colors duration-200 font-semibold">
                        {item.name}
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-900 text-black dark:text-white border-gray-200 dark:border-gray-700">
                      <DialogHeader>
                        <DialogTitle>{item.name}</DialogTitle>
                        <DialogDescription>
                          {language === 'en' ? 'You can contact us through the following ways.' : '您可以通过以下方式联系我们。'}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <p className="text-right">WeChat</p>
                          <div className="col-span-3 flex items-center justify-between">
                            <p>qwert181819</p>
                            <Button variant="ghost" size="sm" onClick={() => {
                              navigator.clipboard.writeText('qwert181819');
                              toast({
                                title: language === 'en' ? 'Copied' : '已复制',
                                description: language === 'en' ? 'WeChat ID has been copied to clipboard.' : '微信号已复制到剪贴板。',
                              });
                            }}>
                              <Copy className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <p className="text-right">Email</p>
                          <div className="col-span-3 flex items-center justify-between">
                            <p>china@yyds.be</p>
                            <Button variant="ghost" size="sm" onClick={() => {
                              navigator.clipboard.writeText('china@yyds.be');
                              toast({
                                title: language === 'en' ? 'Copied' : '已复制',
                                description: language === 'en' ? 'Email address has been copied to clipboard.' : '邮箱地址已复制到剪贴板。',
                              });
                            }}>
                              <Copy className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-black transition-colors duration-200 font-semibold"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Language Toggle */}
          <div className="hidden md:block">
            <Button onClick={toggleLanguage} variant="ghost" size="sm">
              {language === 'zh' ? 'EN' : '中'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-gray-100">
                <nav className="flex flex-col space-y-2">
                  {navItems[language].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="px-4 pt-2">
                    <Button onClick={() => { toggleLanguage(); setIsMenuOpen(false); }} className="w-full" variant="outline">
                      {language === 'zh' ? 'Switch to English' : '切换到中文'}
                    </Button>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}