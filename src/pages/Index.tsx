import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TechStack from '@/components/TechStack';
import Scenarios from '@/components/Scenarios';
import Footer from '@/components/Footer';

interface IndexPageProps {
  language: string;
  setLanguage: (language: string) => void;
}

export default function Index({ language, setLanguage }: IndexPageProps) {
  return (
    <div className="min-h-screen">
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <Hero language={language} />
        <Features language={language} />
        <TechStack language={language} />
        <Scenarios language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}