import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const depoimentos = [
  {
    nome: "Marina S.",
    gatinho: "Luna",
    texto:
      "A Dra. Lohainny é incrível! A Luna sempre foi muito estressada em consultas, mas com ela foi completamente diferente. Atendimento calmo, atencioso e muito competente. Super recomendo!",
    estrelas: 5,
  },
  {
    nome: "Carlos M.",
    gatinho: "Simba",
    texto:
      "Finalmente encontrei uma veterinária que entende de gatos de verdade. O Simba foi tratado com muito carinho e paciência. O ambiente é super tranquilo e ele nem percebeu que estava no veterinário!",
    estrelas: 5,
  },
  {
    nome: "Juliana R.",
    gatinho: "Mia e Thor",
    texto:
      "Levo meus dois gatinhos com a Dra. Lohainny há mais de 2 anos. Ela conhece cada detalhe deles e sempre nos orienta da melhor forma. Atendimento humanizado de verdade.",
    estrelas: 5,
  },
];

const DepoimentosSection = () => {
  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-primary font-medium mb-4">
              <Star className="w-4 h-4" fill="currentColor" />
              Avaliações
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O Que Dizem os Tutores
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A satisfação dos tutores e o bem-estar dos gatinhos são nossa maior recompensa.
            </p>
          </div>

          {/* Depoimentos grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {depoimentos.map((depoimento, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: depoimento.estrelas }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-primary"
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  {/* Texto */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    "{depoimento.texto}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/50 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">
                        {depoimento.nome.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {depoimento.nome}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Tutor(a) de {depoimento.gatinho}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepoimentosSection;
