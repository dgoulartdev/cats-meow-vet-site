import { MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const whatsappNumber = "5562992806468"; // Substitua pelo número real
  const whatsappMessage = encodeURIComponent(
    "Olá, Dra. Lohainny! Gostaria de agendar uma consulta para meu gatinho."
  );

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 via-accent/70 to-primary/5 rounded-2xl p-8 md:p-12 text-center">
            {/* Header */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Agende a Consulta do Seu Gatinho
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Entre em contato pelo WhatsApp e agende um horário. O atendimento 
              é personalizado e com toda a atenção que seu felino merece.
            </p>

            {/* CTA Button */}
            <Button
              asChild
              size="lg"
              className="text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-300 mb-8 w-full max-w-xs mx-auto"
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

            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
              <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm rounded-lg p-4">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">Localização</p>
                  <p className="text-xs text-muted-foreground">Goiânia - GO</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm rounded-lg p-4">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">Horário</p>
                  <p className="text-xs text-muted-foreground">Seg-Sex: 8h às 18h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
