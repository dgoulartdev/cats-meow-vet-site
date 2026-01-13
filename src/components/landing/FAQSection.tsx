import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    pergunta: "Como funciona o agendamento de consultas?",
    resposta:
      "O agendamento é feito diretamente pelo WhatsApp. Basta enviar uma mensagem informando o nome do gatinho, idade e motivo da consulta. Retornarei em até 2 horas úteis para confirmar o melhor horário disponível.",
  },
  {
    pergunta: "Por que escolher uma veterinária especialista em gatos?",
    resposta:
      "Gatos possuem necessidades fisiológicas e comportamentais muito diferentes de outros animais. Uma especialista em felinos compreende essas particularidades, oferece um ambiente menos estressante e utiliza técnicas de manejo específicas, resultando em diagnósticos mais precisos e tratamentos mais eficazes.",
  },
  {
    pergunta: "Qual o endereço do atendimento?",
    resposta:
      "O atendimento é realizado em Goiânia - GO. Para informações detalhadas sobre localização e horários de funcionamento, entre em contato pelo WhatsApp.",
  },
  {
    pergunta: "Vocês atendem emergências?",
    resposta:
      "Atendemos casos de urgência durante o horário de funcionamento. Para emergências fora do expediente, recomendamos entrar em contato pelo WhatsApp para orientações ou encaminhamento para clínicas de emergência 24h parceiras.",
  },
  {
    pergunta: "Quais serviços são oferecidos?",
    resposta:
      "Oferecemos consultas clínicas gerais, check-ups preventivos, vacinação, vermifugação, exames laboratoriais, orientação nutricional, acompanhamento de doenças crônicas e muito mais. Todo o atendimento é focado exclusivamente em felinos.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-primary font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              Tire suas dúvidas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-muted-foreground">
              Confira as respostas para as dúvidas mais comuns sobre nosso atendimento.
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                  {faq.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                  {faq.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
