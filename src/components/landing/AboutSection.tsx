import { Award, Heart } from "lucide-react";
import imagem from '../../img/dra-lohainny-cat.jpg';


const AboutSection = () => {
  return (
    <section id="sobre" className="pt-4 pb-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image/Illustration area */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent to-primary/10 rounded-2xl flex items-center justify-center">
                <img src={imagem} alt="Dra. Lohainny" className="rounded-2xl object-cover w-full h-full" />
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Especialização</p>
                    <p className="text-xs text-muted-foreground">Medicina Felina</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-2 text-primary font-medium mb-4">
                <Heart className="w-4 h-4" fill="currentColor" />
                Conheça a profissional
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Dra. Lohainny
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Olá! Sou a <strong className="text-foreground">Dra. Lohainny</strong>, 
                  médica veterinária apaixonada por gatos e especializada exclusivamente 
                  em medicina felina.
                </p>
                <p>
                  Ao longo dos anos, me dediquei a entender as particularidades dos felinos, 
                  suas necessidades únicas e como proporcionar um atendimento que respeite 
                  sua natureza sensível.
                </p>
                <p>
                  Minha missão é oferecer um cuidado <strong className="text-foreground">
                  individualizado e humanizado</strong>, em um ambiente pensado especialmente 
                  para reduzir o estresse dos gatinhos durante as consultas.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-accent/40 rounded-lg">
                  <p className="text-2xl font-bold text-primary">5+</p>
                  <p className="text-xs text-muted-foreground">Anos de experiência</p>
                </div>
                <div className="text-center p-4 bg-accent/40 rounded-lg">
                  <p className="text-2xl font-bold text-primary">500+</p>
                  <p className="text-xs text-muted-foreground">Gatinhos atendidos</p>
                </div>
                <div className="text-center p-4 bg-accent/40 rounded-lg">
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-xs text-muted-foreground">Foco em felinos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
