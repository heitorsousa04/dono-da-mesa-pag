import { useState } from "react";
import { ChevronDown, Star } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <HeroSection />
      <MockupSection />
      <CTASection />
      <CarouselSection />
      <BonusSection />
      <OfferSection />
      <TestimonialsSection />
      <AuthorSection />
      <FaqSection />
      <GuaranteeSection />
      <Footer />
    </div>
  );
}

// 2. HERO
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-3 pb-0 md:py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-1.5 bg-[#16a34a]/10 border-2 border-[#16a34a]/20 px-2.5 py-1 rounded-full mb-2 animate-pulse-glow">
          <svg className="w-3 h-3 text-[#16a34a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          <span className="text-[#16a34a] font-bold text-[11px] md:text-base uppercase tracking-wide">DESCONTO SÓ HOJE</span>
        </div>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-center mb-1.5 md:mb-4 leading-tight animate-fade-in text-[#1a1a1a]">
          <span className="text-[#16a34a] drop-shadow-sm">+70 Técnicas, Fundamentos e Estratégias</span>{" "}
          <span>para você virar um Taco Forte e dominar qualquer mesa de bar</span>{" "}
          <span className="text-[#16a34a] font-black">+ Bônus</span>
        </h1>
        <p className="text-sm md:text-lg text-[#4b5563] text-center max-w-3xl mx-auto mb-1.5 leading-relaxed animate-fade-in">
          O método completo com tudo que os grandes mestres usam. Postura, mira, puxadinha, controle de branca e muito mais. Sem enrolação, direto na mesa.
        </p>
        <div className="flex justify-center">
          <svg onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-7 h-7 md:w-12 md:h-12 text-[#16a34a] animate-bounce cursor-pointer hover:scale-110 transition-transform"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

// 3. MOCKUP
function MockupSection() {
  return (
    <section id="mockup-section" className="pt-0 pb-2 md:py-8 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <img
          src="https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1777177508/Notebook__tablet__celular_202604260047_t8nviq.jpg"
          alt="Taco Forte - Material digital completo"
          className="w-full rounded-xl shadow-2xl animate-scale-in"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}

// 4. CTA BUTTON
function CTASection() {
  return (
    <section className="py-4 md:py-16 px-4 bg-[#f0fdf4]">
      <div className="max-w-3xl mx-auto text-center">
        <button
          onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-[#16a34a] text-white font-black text-base md:text-2xl h-12 md:h-20 px-5 md:px-12 animate-pulse-glow hover:scale-105 transition-transform shadow-[0_4px_15px_rgba(22,163,74,0.4)] uppercase tracking-wide"
        >
          QUERO AGORA
        </button>
      </div>
    </section>
  );
}

// 5. CAROUSEL — O QUE VOCÊ VAI RECEBER
function CarouselSection() {
  const images = [
    { src: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1777177521/Sinuca_material_digital_202604260114_ydy1ty.jpg", alt: "O Pêndulo" },
    { src: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1777177523/Sinuca_material_digital_202604260116_hwfujd.jpg", alt: "A Mira da Tangente" },
    { src: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1777177525/Sinuca_material_digital_202604260117_hqyikh.jpg", alt: "A Puxadinha" },
    { src: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1777177527/Sinuca_material_digital_202604260119_bnudfl.jpg", alt: "Passeio com a Branca" },
    { src: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1777177530/Sinuca_material_digital_202604260120_rqtyam.jpg", alt: "Jump Shot" },
    { src: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1777177533/Sinuca_material_digital_202604260120_1_z8suuj.jpg", alt: "A Trancada" },
    { src: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1777177535/Sinuca_material_digital_202604260121_dgaohp.jpg", alt: "A Ponte" },
    { src: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1777177538/Sinuca_material_digital_202604260122_m6t5yu.jpg", alt: "A Pré-era" },
    { src: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1777177541/Sinuca_material_digital_202604260123_eyebyj.jpg", alt: "A Sininha" },
    { src: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1777177543/Sinuca_material_digital_202604260124_mjhpdn.jpg", alt: "Avaliação de Mesa" },
  ];
  const doubled = [...images, ...images];
  return (
    <section className="py-4 md:py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg md:text-3xl font-black text-center mb-3 text-[#1a1a1a]">O Que Você Vai Receber</h2>
        <div className="w-full overflow-hidden -mx-4 px-4">
          <div className="flex gap-2.5 md:gap-4 animate-marquee w-max">
            {doubled.map((img, i) => (
              <div key={i} className="shrink-0 w-[170px] md:w-[200px] rounded-xl overflow-hidden shadow-lg">
                <img src={img.src} alt={img.alt} className="w-full h-auto object-cover aspect-[9/16]" loading="eager" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 6. BONUS
function BonusSection() {
  const bonuses = [
    {
      img: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1777177509/Mente_de_Gladiador_202604260053_lfjugm.jpg",
      title: "Mente de Gladiador",
      price: "R$37"
    },
    {
      img: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1777177512/Mente_de_Gladiador_202604260055_dlm1lz.jpg",
      title: "Guia de Bolas Impossíveis",
      price: "R$37"
    },
    {
      img: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1777177514/Mente_de_Gladiador_202604260057_hxr1yr.jpg",
      title: "Truques de Mestre",
      price: "R$37"
    },
  ];
  return (
    <section className="py-4 md:py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-center mb-4">
          <h2 className="text-lg md:text-4xl font-black mb-2 text-[#1a1a1a]">🎁 Bônus Exclusivos (GRÁTIS HOJE)</h2>
          <div className="inline-flex items-center gap-2 bg-[#eab308] text-black font-black text-xs md:text-xl px-4 py-2 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.6)] animate-pulse-glow-gold">
            <Star className="w-4 h-4 text-black" />
            <span>☆ Valor R$113,70 → GRÁTIS HOJE!</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1.5 md:gap-6">
          {bonuses.map((b, i) => (
            <div key={i} className="rounded-lg shadow-sm border border-[#16a34a] bg-white animate-fade-in overflow-hidden" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="p-0 md:p-4">
                <div className="rounded-t-lg md:rounded-lg overflow-hidden shadow-md">
                  <img src={b.img} alt={b.title} className="w-full aspect-square object-cover" loading="eager" fetchPriority="high" />
                </div>
                <div className="px-1.5 py-1.5 md:p-3 text-center">
                  <h3 className="font-black text-[10px] md:text-base text-[#1a1a1a] leading-tight">{b.title}</h3>
                  <div className="mt-0.5">
                    <span className="text-gray-400 line-through text-[9px] md:text-xs">De {b.price}</span>
                    <span className="ml-1 text-[#16a34a] font-bold text-[10px] md:text-sm">GRÁTIS</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-3">
          <div className="inline-flex items-center gap-2 bg-[#16a34a]/10 px-3 py-1.5 rounded-lg">
            <span className="text-sm md:text-2xl font-black text-[#16a34a]">💚 Total dos bônus: R$113,70 → GRÁTIS HOJE!</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// 7. OFFER
function OfferSection() {
  return (
    <section id="oferta" className="py-4 md:py-20 px-4 bg-[#f0fdf4]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-lg md:text-4xl font-black text-center mb-4 md:mb-12 text-[#1a1a1a]">🔥 Garanta seu acesso agora</h2>
        <div className="max-w-md mx-auto">
          <div className="rounded-lg bg-white shadow-sm border-4 border-[#16a34a] relative overflow-hidden animate-fade-in shadow-[0_0_40px_rgba(22,163,74,0.4)]">
            <div className="absolute top-0 right-0 bg-[#16a34a] text-white px-3 py-1 text-xs font-bold rounded-bl-lg">⭐ MAIS POPULAR</div>
            <div className="p-3 md:p-8 pt-8">
              <h3 className="text-base md:text-2xl font-black mb-1.5 text-[#16a34a]">Taco Forte</h3>
              <div className="mb-2">
                <div className="text-gray-400 line-through text-sm">R$67,90</div>
                <span className="text-3xl md:text-4xl font-black text-[#16a34a]">R$12,90</span>
                <p className="text-xs text-gray-500">Pagamento único</p>
                <p className="text-xs font-semibold mt-1 text-[#16a34a]">Você economiza R$55,00 + R$113,70 em bônus</p>
                <p className="text-[10px] text-gray-400 mt-1">+1.648 pessoas já garantiram essa oferta</p>
              </div>
              <div className="space-y-1 mb-3 text-left">
                {[
                  "Taco Forte, +70 Técnicas e Fundamentos",
                  "Plataforma digital organizada, acesse no celular, tablet ou PC",
                  "Conteúdo organizado por nível e pilares de aprendizado",
                  "Acesso imediato após o pagamento",
                  "🎁 BÔNUS: Mente de Gladiador",
                  "🎁 BÔNUS: Guia de Bolas Impossíveis",
                  "🎁 BÔNUS: Truques de Mestre",
                  "Atualizações mensais",
                  "Suporte prioritário",
                  "🛡️ Garantia de 7 dias",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#16a34a] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>
                    </svg>
                    <span className="text-xs md:text-sm font-medium text-[#1a1a1a]">{item}</span>
                  </div>
                ))}
              </div>
              
              <a
                href="https://pay.wiapy.com/ZtGdHhm7C6"
                className="inline-flex items-center justify-center gap-2 rounded-md px-8 w-full bg-[#16a34a] text-white font-black text-sm md:text-base h-12 md:h-16 animate-pulse-scale hover:scale-105 transition-transform shadow-[0_4px_15px_rgba(22,163,74,0.4)] uppercase tracking-wide"
              >
                QUERO SER UM TACO FORTE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 8. TESTIMONIALS
function TestimonialsSection() {
  const testimonials = [
    "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1777216337/Texto_do_seu_par%C3%A1grafo_w7f7ys.jpg",
    "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1777216342/Texto_do_seu_par%C3%A1grafo_1_ajjmft.jpg",
    "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1777216349/Texto_do_seu_par%C3%A1grafo_3_iffcr1.jpg",
    "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1777216351/Texto_do_seu_par%C3%A1grafo_4_zsgfoh.jpg",
    "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1777216347/Texto_do_seu_par%C3%A1grafo_2_zkfvb1.jpg",
    "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1777216354/Texto_do_seu_par%C3%A1grafo_5_j2pwzh.jpg",
    "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1777216360/Texto_do_seu_par%C3%A1grafo_7_nwlsqf.jpg",
    "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1777216357/Texto_do_seu_par%C3%A1grafo_6_k8xilf.jpg",
  ];
  const doubled = [...testimonials, ...testimonials, ...testimonials];
  return (
    <section className="py-4 md:py-20 px-4 bg-[#f0fdf4]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-lg md:text-4xl font-black text-center mb-4 text-[#1a1a1a]">🏆 O Que Nossos Alunos Dizem</h2>
        <div className="w-full overflow-hidden">
          <div className="flex gap-3 w-max animate-marquee-slow">
            {doubled.map((src, i) => (
              <div key={i} className="shrink-0 w-[70vw] md:w-[300px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <img src={src} alt={`Depoimento ${i + 1}`} className="w-full h-auto" loading="lazy" draggable={false} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 9. AUTHOR
function AuthorSection() {
  return (
    <section className="py-4 md:py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg md:text-4xl font-black text-center mb-4 text-[#1a1a1a]">Sobre o Autor</h2>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
          <div className="shrink-0">
            <img
              src="https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1777177517/Homem_segurando_taco_202604260103_zx0xkn.jpg"
              alt="Rafael Matos - Jogador e Instrutor de Sinuca"
              className="w-28 h-28 md:w-44 md:h-44 rounded-full object-cover border-4 border-[#16a34a] shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg md:text-2xl font-black text-[#1a1a1a]">Rafael Matos</h3>
            <p className="text-sm text-[#16a34a] font-semibold mb-4">Jogador e Instrutor de Sinuca, Participante da Liga Brasileira de Sinuquinha (LBS)</p>
            <div className="grid grid-cols-4 gap-2 mb-3">
              {[
                { value: "12+", label: "Anos na Mesa" },
                { value: "1.300+", label: "Alunos" },
                { value: "LBS", label: "Liga Brasileira" },
                { value: "Método", label: "Testado em Bares" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-xl md:text-2xl font-black text-[#16a34a]">{stat.value}</p>
                  <p className="text-[10px] md:text-xs text-[#1a1a1a]">{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="text-sm md:text-base text-[#4b5563] italic leading-relaxed">
              "Aprendi na raça, errando muito e assistindo os melhores. Coloquei tudo que funciona de verdade neste material. Sem enrolação, sem teoria que não serve na mesa."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 10. FAQ
function FaqSection() {
  const faqs = [
    { q: "Funciona pra quem tá começando?", a: "Sim. Os fundamentos são a base que todo jogador precisa, do iniciante ao intermediário." },
    { q: "Como acesso o material?", a: "Assim que o pagamento é confirmado você recebe o acesso à plataforma digital organizada, disponível no celular, tablet ou computador." },
    { q: "Preciso de mesa em casa pra aplicar?", a: "Não. Você leva os fundamentos pra qualquer mesa de bar." },
    { q: "Tem atualizações?", a: "Sim. O conteúdo é atualizado mensalmente com novas técnicas e estratégias." },
    { q: "Como funciona a garantia?", a: "7 dias. Se não gostar por qualquer motivo, devolvemos seu dinheiro sem burocracia." },
  ];
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-4 md:py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg md:text-4xl font-black text-center mb-4 text-[#1a1a1a]">Perguntas Frequentes</h2>
        <div className="space-y-2 md:space-y-4 text-left">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-lg px-4 md:px-6 bg-white">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex flex-1 items-center justify-between py-4 w-full text-left font-bold text-sm md:text-base text-[#1a1a1a] hover:text-[#16a34a] transition-colors"
              >
                {faq.q}
                <ChevronDown className={`h-4 w-4 shrink-0 text-[#16a34a] transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="overflow-hidden text-sm pb-4 text-[#4b5563]">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 11. GUARANTEE
function GuaranteeSection() {
  return (
    <section className="py-4 md:py-20 px-4 bg-[#14532d] text-white">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-3 flex justify-center text-6xl">🛡️</div>
        <h2 className="text-lg md:text-4xl font-black mb-3 text-white">7 Dias, Garantia Incondicional</h2>
        <p className="text-xs md:text-lg text-white/90 leading-relaxed mb-6">
          Aplica os fundamentos na mesa. Se não sentir diferença nos primeiros 7 dias, devolvemos seu dinheiro. Sem perguntas, sem complicação. O risco é todo nosso.
        </p>
        
        <button
          onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-[#eab308] text-black font-black text-base md:text-xl h-12 md:h-16 px-6 md:px-12 hover:scale-105 transition-transform shadow-[0_4px_15px_rgba(234,179,8,0.4)] uppercase tracking-wide"
        >
          COMPRAR COM SEGURANÇA
        </button>
      </div>
    </section>
  );
}

// 12. FOOTER
function Footer() {
  return (
    <footer className="bg-[#f9fafb] py-6 px-4 border-t border-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-500 text-xs mb-1">© 2026 Taco Forte. Todos os direitos reservados.</p>
        <p className="text-gray-500 text-[10px]">Conteúdo digital licenciado para uso pessoal.</p>
      </div>
    </footer>
  );
}
