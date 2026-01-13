import { Button } from "@/components/ui/button";
import { MessageCircle, Heart } from "lucide-react";

const HeroSection = () => {
  const whatsappNumber = "5562999999999"; // Substitua pelo número real
  const whatsappMessage = encodeURIComponent(
    "Olá, Dra. Lohainny! Gostaria de agendar uma consulta para meu gatinho."
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-accent to-background overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Heart className="w-4 h-4 text-primary" fill="currentColor" />
            <span className="text-sm font-medium text-muted-foreground">
              Atendimento exclusivo para felinos
            </span>
          </div>

          {/* H1 - SEO optimized */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
            Veterinária Especialista em{" "}
            <span className="text-primary">Gatos</span> em Goiânia
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Atendimento veterinário humanizado e especializado, focado no bem-estar e 
            na saúde do seu felino. Cada gatinho é único e merece um cuidado especial.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar consulta pelo WhatsApp"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Agendar pelo WhatsApp
              </a>
            </Button>
            
            <span className="text-sm text-muted-foreground">
              Resposta em até 2 horas
            </span>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground animate-fade-in">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span>Pós-graduanda em Medicina Felina</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span>3 anos de experiência</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span>Medicina felina exclusiva</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
