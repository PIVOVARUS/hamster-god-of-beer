
import { useEffect, useRef } from "react";
import { Beer, Hop } from "lucide-react";

const Index = () => {
  const beerRef = useRef<HTMLDivElement>(null);

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
          <img
            src="/lovable-uploads/e4c86741-20da-42a2-b9df-5b9c70ba48ba.png"
            alt="Hamster Beer God"
            className="mx-auto mb-8 rounded-lg shadow-2xl max-w-2xl w-full"
          />
          <h1 className="font-medieval text-6xl md:text-7xl lg:text-8xl mb-6 text-leaf-dark">
            The Great Beer Hamster
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-leaf">
            Guardian of the Sacred Hops, Master of the Golden Brew
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-b from-parchment to-parchment-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-medieval text-4xl md:text-5xl mb-12 text-center text-leaf-dark">
              The Legend
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg">
                <p>
                  In the mystical realm of fermentation, there exists a most peculiar and
                  distinguished deity - the Hamster Beer God.
                </p>
                <p>
                  Adorned in noble attire, this divine rodent oversees the sacred art of
                  brewing, ensuring each drop of beer achieves absolute perfection.
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
          <h2 className="font-medieval text-4xl md:text-5xl mb-12 text-center">
            Divine Brews
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {["Golden Whiskers Ale", "Hamster's Heavenly Hops", "Sacred Seed Stout"].map(
              (beer) => (
                <div
                  key={beer}
                  className="bg-leaf/50 backdrop-blur-sm rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300"
                >
                  <Beer className="mx-auto mb-4 text-amber" size={48} />
                  <h3 className="font-medieval text-2xl mb-4 text-center">{beer}</h3>
                  <p className="text-center text-parchment-light">
                    A divine brew crafted under the watchful eyes of the Great Beer
                    Hamster himself.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
