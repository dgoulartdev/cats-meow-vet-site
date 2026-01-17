import { Cat, Heart, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Cat className="w-6 h-6 text-primary" />
                <span className="font-bold text-lg tracking-tight">Dra. Lohainny</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Veterinária especialista em felinos, oferecendo atendimento 
                humanizado e exclusivo para gatos em Goiânia.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-foreground">Contato</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Goiânia - GO</span>
                </div>
                <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>(62) 99280-6468</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-foreground">Navegação</h3>
              <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
                {['Sobre', 'Diferenciais', 'Depoimentos', 'FAQ', 'Contato'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`} 
                    className="hover:text-primary transition-colors w-fit"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="border-t border-border pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p className="text-center md:text-left">
                © {currentYear} Dra. Lohainny. Todos os direitos reservados.
              </p>
              <p className="flex items-center gap-1.5">
                Feito com <Heart className="w-3.5 h-3.5 text-primary fill-primary animate-pulse" /> para os gatinhos
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;