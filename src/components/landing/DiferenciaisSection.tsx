import { Cat, Home, Heart, Clock, Stethoscope, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const diferenciais = [
  {
    icon: Cat,
    title: "Atendimento Exclusivo para Gatos",
    description:
      "Consultório 100% dedicado aos felinos, sem a presença de cães ou outros animais que possam causar estresse.",
  },
  {
    icon: Home,
    title: "Ambiente Cat-Friendly",
    description:
      "Espaço pensado para reduzir a ansiedade felina, com feromônios sintéticos, música suave e iluminação adequada.",
  },
  {
    icon: Heart,
    title: "Cuidado Individualizado",
    description:
      "Cada consulta é realizada com calma e atenção, respeitando o tempo e a personalidade de cada gatinho.",
  },
  {
    icon: Clock,
    title: "Tempo de Qualidade",
    description:
      "Consultas com duração adequada para uma avaliação completa, sem pressa, garantindo um atendimento minucioso.",
  },
  {
    icon: Stethoscope,
    title: "Especialização Felina",
    description:
      "Conhecimento aprofundado em medicina felina, compreendendo as necessidades específicas dos gatos.",
  },
  {
    icon: Shield,
    title: "Medicina Preventiva",
    description:
      "Foco em prevenção e bem-estar, com orientações personalizadas para manter seu gatinho sempre saudável.",
  },
];

const DiferenciaisSection = () => {
  return (
    <section id="diferenciais" className="py-20 bg-accent/40">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-primary font-medium mb-4">
              <Cat className="w-4 h-4" />
              Por que escolher
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Diferenciais do Atendimento
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Um atendimento veterinário pensado especialmente para as necessidades 
              únicas dos felinos, proporcionando uma experiência tranquila e segura.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferenciais.map((item, index) => (
              <Card
                key={index}
                className="group bg-card hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;
