import { Cat, Heart, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo and description */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Cat className="w-6 h-6 text-primary" />
                <span className="font-bold text-lg">Dra. Lohainny</span>
              </div>
              <p className="text-secondary-foreground/80 text-sm leading-relaxed">
                Veterinária especialista em felinos, oferecendo atendimento 
                humanizado e exclusivo para gatos em Goiânia.
              </p>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <div className="space-y-3 text-sm text-secondary-foreground/80">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Goiânia - GO</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>(62) 99280-6468</span>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="font-semibold mb-4">Navegação</h3>
              <nav className="space-y-2 text-sm">
                <a 
                  href="#sobre" 
                  className="block text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Sobre
                </a>
                <a 
                  href="#diferenciais" 
                  className="block text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Diferenciais
                </a>
                <a 
                  href="#depoimentos" 
                  className="block text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Depoimentos
                </a>
                <a 
                  href="#faq" 
                  className="block text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  FAQ
                </a>
                <a 
                  href="#contato" 
                  className="block text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Contato
                </a>
              </nav>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-secondary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
              <p>
                © {currentYear} Dra. Lohainny - Veterinária Especialista em Gatos. 
                Todos os direitos reservados.
              </p>
              <p className="flex items-center gap-1">
                Feito com <Heart className="w-3 h-3 text-primary" fill="currentColor" /> para os gatinhos
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
