
import { useEffect, useRef, useState } from "react";
import { Beer, Hop, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Index = () => {
  const beerRef = useRef<HTMLDivElement>(null);
  const [isRussian, setIsRussian] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-pourBeer");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (beerRef.current) {
      observer.observe(beerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleLanguage = () => {
    setIsRussian(!isRussian);
  };

  return (
    <div className="min-h-screen bg-parchment text-leaf-dark overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated Hop Leaves */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              <Hop
                className="text-leaf-light opacity-30 animate-sway"
                size={48}
                style={{
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            </div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Button 
            onClick={toggleLanguage}
            className="fixed top-4 right-4 z-50 bg-leaf hover:bg-leaf-dark text-parchment"
          >
            <Languages className="mr-2" size={20} />
            {isRussian ? 'English' : 'Русский'}
          </Button>
          
          <h1 className={`text-6xl md:text-7xl lg:text-8xl mb-6 text-leaf-dark ${isRussian ? 'font-ruslan' : 'font-medieval'}`}>
            {isRussian ? 'Великий Пивной Хомяк' : 'The Great Beer Hamster'}
          </h1>
          <p className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-leaf ${isRussian ? 'font-ruslan' : 'font-medieval'}`}>
            {isRussian 
              ? 'Хранитель Священного Хмеля, Мастер Золотого Напитка' 
              : 'Guardian of the Sacred Hops, Master of the Golden Brew'}
          </p>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-amber hover:bg-amber-dark text-leaf-dark">
                {isRussian ? 'Обо мне' : 'About me'}
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-parchment max-w-2xl">
              <DialogHeader>
                <DialogTitle className={`text-2xl mb-4 ${isRussian ? 'font-ruslan' : 'font-medieval'}`}>
                  {isRussian ? 'О Великом Пивоварусе' : 'About the Great Beer Master'}
                </DialogTitle>
                <DialogDescription className={`text-leaf-dark text-lg leading-relaxed ${isRussian ? 'font-ruslan' : 'font-medieval'}`}>
                  {isRussian 
                    ? 'Великий Пивоварус - это духовный проводник и учитель в мире пива. Он обладает могуществом и мудростью, которые он делится с нами через свои учения и дарует нам радость в виде вкусного пива. Следуя его заповедям о сохранении качества пива, уважении к пивным традициям и приготовлении пива с любовью, мы можем подняться на новые вкусовые высоты и достичь истинного совершенства в пивоварении. Пивоварус родился из самой сущности пива, и его проницательность и милосердие притягивают к нему всех, кто стремится к пивному совершенству. Пусть его свет освещает наш путь, а его благословение станет нашим постоянным спутником на пивных волнениях. Вперед, к новым вкусовым горизонтам, под покровительством Великого Пивоваруса!'
                    : 'The Great Beer Master is a spiritual guide and teacher in the world of beer. He possesses power and wisdom which he shares with us through his teachings and grants us joy in the form of delicious beer. By following his commandments about preserving beer quality, respecting beer traditions, and brewing with love, we can rise to new taste heights and achieve true perfection in brewing. Born from the very essence of beer, his insight and mercy attract all who strive for beer perfection. May his light illuminate our path, and his blessing become our constant companion on beer waves. Forward, to new taste horizons, under the patronage of the Great Beer Master!'}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-b from-parchment to-parchment-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-4xl md:text-5xl mb-12 text-center text-leaf-dark ${isRussian ? 'font-ruslan' : 'font-medieval'}`}>
              {isRussian ? 'Легенда' : 'The Legend'}
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`space-y-6 text-lg ${isRussian ? 'font-ruslan' : ''}`}>
                <p>
                  {isRussian 
                    ? 'В мистическом мире ферментации существует самое необычное и выдающееся божество - Хомяк-Бог Пива.'
                    : 'In the mystical realm of fermentation, there exists a most peculiar and distinguished deity - the Hamster Beer God.'}
                </p>
                <p>
                  {isRussian
                    ? 'Облаченный в благородные одежды, этот божественный грызун наблюдает за священным искусством пивоварения, гарантируя, что каждая капля пива достигает абсолютного совершенства.'
                    : 'Adorned in noble attire, this divine rodent oversees the sacred art of brewing, ensuring each drop of beer achieves absolute perfection.'}
                </p>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-amber-light/20 rounded-lg">
                  <div
                    ref={beerRef}
                    className="absolute bottom-0 w-full bg-amber transition-all duration-1000 ease-out"
                    style={{ height: "0%" }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-4 bg-white/80 opacity-50"></div>
                  </div>
                  <Beer className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-dark" size={64} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beer Varieties */}
      <section className="py-24 bg-leaf-dark text-parchment">
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl md:text-5xl mb-12 text-center ${isRussian ? 'font-ruslan' : 'font-medieval'}`}>
            {isRussian ? 'Божественные Напитки' : 'Divine Brews'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              isRussian ? 'Золотистый Эль Усов' : 'Golden Whiskers Ale',
              isRussian ? 'Небесный Хмель Хомяка' : "Hamster's Heavenly Hops",
              isRussian ? 'Священный Темный Стаут' : 'Sacred Seed Stout'
            ].map((beer) => (
              <div
                key={beer}
                className="bg-leaf/50 backdrop-blur-sm rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300"
              >
                <Beer className="mx-auto mb-4 text-amber" size={48} />
                <h3 className={`text-2xl mb-4 text-center ${isRussian ? 'font-ruslan' : 'font-medieval'}`}>{beer}</h3>
                <p className={`text-center text-parchment-light ${isRussian ? 'font-ruslan' : ''}`}>
                  {isRussian
                    ? 'Божественный напиток, созданный под бдительным оком самого Великого Пивного Хомяка.'
                    : 'A divine brew crafted under the watchful eyes of the Great Beer Hamster himself.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
