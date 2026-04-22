/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { 
  ChevronDown, 
  ShieldCheck, 
  Lock,
  CheckCircle2,
  TrendingDown,
  XCircle,
  Crosshair,
  Gift,
  RefreshCcw,
  Smartphone,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Subtle noise overlay for the neon-retro grunge effect
const TextureOverlay = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-overlay"
       style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }} 
  />
);

function HeroSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative w-full bg-[#080C0A] min-h-[95vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-16 pb-16">
      <TextureOverlay />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center mt-4">
        
        {/* Logo Area */}
        <div className="border-2 border-[#00E575]/40 rounded-2xl p-3 mb-10 inline-block shadow-[0_0_20px_rgba(0,229,117,0.2)]">
          <img 
            src="https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1776898098/Professional_gaming_logo_202604201552_z9i3rr.jpg" 
            alt="Dono da Mesa"
            className="w-48 md:w-64 mx-auto" 
          />
        </div>

        <p className="text-[#00E575] font-black uppercase tracking-widest text-sm md:text-base mb-8 border border-[#00E575]/30 rounded-full px-6 py-2 inline-block">
          👇🏻 Veja o que você recebe dentro do guia
        </p>

        {/* Video VSL */}
        <div className="relative w-full max-w-3xl mx-auto mb-4 cursor-pointer group" onClick={(e) => {
          const video = e.currentTarget.querySelector('video') as HTMLVideoElement;
          video.muted = false;
          if (video.paused) { video.play(); setPlaying(true); } 
          else { video.pause(); setPlaying(false); }
        }}>
          <video
            src="https://res.cloudinary.com/dtcjxw6ax/video/upload/q_auto/f_auto/v1776898182/VSL_PROD_SIN_mjzmsi.mov"
            muted
            playsInline
            loop
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
            onContextMenu={(e) => e.preventDefault()}
            className="w-full rounded-xl shadow-[0_0_40px_rgba(0,229,117,0.3)] border-2 border-[#00E575]/40"
          />
          {!playing && (
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-black/50">
              <div className="w-20 h-20 rounded-full bg-[#00E575] flex items-center justify-center shadow-[0_0_40px_rgba(0,229,117,0.8)] mb-4">
                <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[26px] border-l-black border-b-[14px] border-b-transparent ml-2" />
              </div>
              <p className="text-white font-black text-lg uppercase tracking-widest drop-shadow-lg">Toque para assistir</p>
            </div>
          )}
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-8">
          O Guia Que Fará Você <span className="text-[#00E575] drop-shadow-[0_0_15px_rgba(0,229,117,0.8)]">Dominar</span> Qualquer Mesa de Sinuca de Bar
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-12 font-semibold leading-relaxed">
          Aprenda as técnicas avançadas para não dar chance ao adversário e ser o dono da mesa, sem depender de sorte.
        </p>

        {/* CTA Button */}
        <motion.button 
          onClick={() => window.open('https://pay.wiapy.com/ZtGdHhm7C6', '_blank')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#FFC500] text-black font-black text-lg md:text-xl px-10 py-5 rounded-md uppercase tracking-widest
                     shadow-[0_0_30px_rgba(255,197,0,0.6)] hover:bg-[#ffce33] transition-all w-fit mx-auto border-b-4 border-[#cc9e00]"
        >
          Quero Dominar a Mesa Agora
        </motion.button>
      </div>
    </section>
  );
}

function PainSection() {
  return (
    <section className="w-full bg-[#1A1A1A] text-white py-16 px-4 overflow-hidden relative border-y-2 border-[#00E575]/20">
      <TextureOverlay />
      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        <h2 className="text-2xl md:text-4xl font-black mb-8 leading-tight text-[#FFC500] drop-shadow-[0_0_15px_rgba(255,197,0,0.5)] max-w-4xl mx-auto">
          Chega de ser o cara que só paga a mesa pro vencedor.
        </h2>
        
        <p className="text-lg md:text-xl text-white leading-relaxed text-center max-w-4xl mx-auto font-semibold mb-20 drop-shadow-sm">
          Você sabe como segurar o taco e conhece o jogo. O problema não é falta de talento, é a falta de técnica na hora da pressão. O que mais te derruba hoje?
        </p>

        {/* Icons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          <div className="flex flex-col items-center bg-[#080C0A] p-6 md:p-10 rounded-2xl border-t-4 border-[#00E575] shadow-[0_0_30px_rgba(0,0,0,0.8)]">
            <TrendingDown size={48} className="text-[#00E575] drop-shadow-[0_0_25px_rgba(0,229,117,1)] mb-8" />
            <h3 className="text-lg md:text-xl font-black text-white mb-6 uppercase tracking-wider text-center drop-shadow-sm">Falta de Consistência</h3>
            <p className="text-white font-medium text-lg leading-relaxed text-center">
              Você acerta uma bola impossível de bico, mas logo em seguida erra a bola mais fácil do jogo e entrega a vitória de bandeja.
            </p>
          </div>

          <div className="flex flex-col items-center bg-[#080C0A] p-6 md:p-10 rounded-2xl border-t-4 border-[#00E575] shadow-[0_0_30px_rgba(0,0,0,0.8)]">
            <XCircle size={48} className="text-[#00E575] drop-shadow-[0_0_25px_rgba(0,229,117,1)] mb-8" />
            <h3 className="text-lg md:text-xl font-black text-white mb-6 uppercase tracking-wider text-center drop-shadow-sm">Erros Bobos e Suicídios</h3>
            <p className="text-white font-medium text-lg leading-relaxed text-center">
              Você perde a vez porque o bolão sempre para colado na tabela ou cai na caçapa junto com a bola da vez.
            </p>
          </div>

          <div className="flex flex-col items-center bg-[#080C0A] p-6 md:p-10 rounded-2xl border-t-4 border-[#00E575] shadow-[0_0_30px_rgba(0,0,0,0.8)]">
            <Crosshair size={48} className="text-[#00E575] drop-shadow-[0_0_25px_rgba(0,229,117,1)] mb-8" />
            <h3 className="text-lg md:text-xl font-black text-white mb-6 uppercase tracking-wider text-center drop-shadow-sm">Instinto vs Técnica</h3>
            <p className="text-white font-medium text-lg leading-relaxed text-center">
              Jogar contando apenas com a sorte funciona de vez em quando, mas não te sustenta contra os caras de alto nível no mata-mata.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

function SolutionSection() {
  const topics = [
    "Como se posicionar e formar a ponte perfeita",
    "Como segurar o taco do jeito certo para ter precisão",
    "O Segredo do Efeito: Como aplicar seguida, parada, puxada e efeito lateral",
    "Como calcular as tabelas e sair de sinucas impossíveis",
    "Como prever exatamente onde a bola branca vai parar após a tacada",
    "Como dar sinuca e deixar o oponente sem saída"
  ];

  return (
    <section className="w-full bg-[#080C0A] py-16 px-4 text-white relative">
      <TextureOverlay />
      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-black mb-6 text-white leading-tight">
            Tudo o que você precisa para <span className="text-[#00E575] drop-shadow-[0_0_20px_rgba(0,229,117,0.7)]">mudar de nível</span> hoje:
          </h2>
          <p className="text-white max-w-3xl mx-auto text-lg md:text-xl font-bold">
            Sem enrolação. Direto ao ponto para você ler e já aplicar na próxima partida.
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {topics.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="flex items-center gap-6 bg-[#1A1A1A] p-6 md:p-8 rounded-md border border-[#333]"
            >
              <CheckCircle2 className="text-[#00E575] drop-shadow-[0_0_15px_rgba(0,229,117,0.9)] shrink-0" size={36} />
              <span className="text-white text-lg md:text-xl font-bold leading-tight">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProofSection() {
  const images = [
    "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1776879501/Texto_do_seu_par%C3%A1grafo_20_pchrml.png",
    "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1776879503/Texto_do_seu_par%C3%A1grafo_21_l058lk.png",
    "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1776879506/Texto_do_seu_par%C3%A1grafo_22_zdxm9z.png",
    "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1776879508/Texto_do_seu_par%C3%A1grafo_23_srurxf.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prev = () => setCurrentIndex(c => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrentIndex(c => (c === images.length - 1 ? 0 : c + 1));

  return (
    <section className="w-full bg-[#1A1A1A] py-16 text-white overflow-hidden relative border-y-2 border-[#FFC500]/20">
      <TextureOverlay />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 px-4 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black text-[#FFC500] drop-shadow-[0_0_15px_rgba(255,197,0,0.5)] tracking-tight mb-6">
            O que a galera está falando...
          </h2>
        </div>
        <div className="relative w-full max-w-xs md:max-w-md mx-auto px-4 md:px-0">
          <button onClick={prev} className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 bg-[#080C0A] hover:bg-[#00E575]/20 text-[#00E575] border border-[#00E575]/30 rounded-full p-3 md:p-4 z-20 transition-all">
            <ChevronLeft size={32} />
          </button>
          <button onClick={next} className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 bg-[#080C0A] hover:bg-[#00E575]/20 text-[#00E575] border border-[#00E575]/30 rounded-full p-3 md:p-4 z-20 transition-all">
            <ChevronRight size={32} />
          </button>
          <div className="overflow-hidden w-full rounded-2xl">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {images.map((src, i) => (
                <div key={i} className="w-full shrink-0">
                  <img src={src} alt={`Depoimento ${i + 1}`} className="w-full rounded-2xl" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 mt-10">
            {images.map((_, i) => (
              <button key={i} onClick={() => setCurrentIndex(i)} className={`w-4 h-4 rounded-full transition-all ${currentIndex === i ? 'bg-[#00E575] scale-125' : 'bg-white/30'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalOfferSection() {
  return (
    <section className="w-full relative py-20 px-4 overflow-hidden bg-[#080C0A]">
      <TextureOverlay />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-16 leading-tight drop-shadow-xl">
          Eleve o seu nível por menos que o preço de uma cerveja.
        </h2>
        
        {/* Highlighted Deal Box */}
        <div className="w-full bg-[#1A1A1A] border-2 border-[#FFC500] rounded-2xl p-4 md:p-10 shadow-[0_0_50px_rgba(255,197,0,0.3)] relative text-center">
          
          <h3 className="text-[#FFC500] font-black text-3xl md:text-4xl uppercase tracking-widest mb-12 drop-shadow-[0_0_15px_rgba(255,197,0,0.5)]">
            TUDO O QUE VOCÊ LEVA HOJE:
          </h3>

          <ul className="text-left space-y-8 mb-16 max-w-2xl mx-auto">
            <li className="flex items-center gap-5">
              <CheckCircle2 className="text-[#00E575] shrink-0 drop-shadow-[0_0_15px_rgba(0,229,117,0.9)]" size={28} />
              <span className="text-white text-xl md:text-3xl font-bold">O Guia Principal: Dono da Mesa (Acesso VIP)</span>
            </li>
            <li className="flex items-center gap-5">
              <Gift className="text-[#FFC500] shrink-0 drop-shadow-[0_0_12px_rgba(255,197,0,0.8)]" size={28} />
              <span className="text-white text-lg md:text-xl font-semibold"><strong>Bônus 1:</strong> O Jogo Mental - Como vencer a pressão</span>
            </li>
            <li className="flex items-center gap-5">
              <Gift className="text-[#FFC500] shrink-0 drop-shadow-[0_0_12px_rgba(255,197,0,0.8)]" size={28} />
              <span className="text-white text-lg md:text-xl font-semibold"><strong>Bônus 2:</strong> Estratégia Avançada e Leitura de Jogo</span>
            </li>
            <li className="flex items-center gap-5">
              <Gift className="text-[#FFC500] shrink-0 drop-shadow-[0_0_12px_rgba(255,197,0,0.8)]" size={28} />
              <span className="text-white text-lg md:text-xl font-semibold"><strong>Bônus 3:</strong> Rotina de Treino (30 min/dia para evoluir rápido)</span>
            </li>
            <li className="flex items-center gap-5">
              <RefreshCcw className="text-[#00E575] shrink-0 drop-shadow-[0_0_15px_rgba(0,229,117,0.9)]" size={28} />
              <span className="text-white text-lg md:text-xl font-bold">Acesso Vitalício + Atualizações sem custo</span>
            </li>
          </ul>

          <div className="border-t-2 border-[#333] pt-12 mb-12 flex flex-col items-center">
            <div className="text-[#00E575] drop-shadow-[0_0_30px_rgba(0,229,117,0.8)] leading-none text-center">
               <span className="font-black text-[64px] md:text-[90px] tracking-tighter">R$ 12,90</span>
            </div>
            <p className="text-white uppercase tracking-widest text-2xl md:text-3xl font-black mt-4 drop-shadow-md">Pagamento Único</p>
          </div>

          {/* Pulsing Vibrant Green CTA Button */}
          <motion.button 
            onClick={() => window.open('https://pay.wiapy.com/ZtGdHhm7C6', '_blank')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0px 0px 0px 0px rgba(0, 229, 117, 0)", 
                "0px 0px 40px 15px rgba(0, 229, 117, 0.5)", 
                "0px 0px 0px 0px rgba(0, 229, 117, 0)"
              ],
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
              }
            }}
            className="w-full mx-auto block bg-[#00E575] text-black font-black text-xl md:text-3xl px-12 py-10 rounded-md uppercase tracking-widest hover:bg-[#00ff83] transition-colors mb-12 border-b-8 border-[#00a353]"
          >
            Quero Garantir Meu Acesso
          </motion.button>
          
          {/* Footer of the card */}
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-center justify-center gap-8 text-[#00E575] font-black text-lg md:text-xl max-w-2xl mx-auto border-t border-[#333] pt-8">
             <span className="flex items-center gap-3 drop-shadow-[0_0_10px_rgba(0,229,117,0.7)]">
               <ShieldCheck size={32}/> Compra Segura
             </span>
             <span className="hidden md:block text-[#333] text-2xl">|</span>
             <span className="flex items-center gap-3 drop-shadow-[0_0_10px_rgba(0,229,117,0.7)]">
               <Smartphone size={32}/> Acesso online imediato no celular
             </span>
          </div>

        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    { 
      q: "Eu já jogo de vez em quando. Esse guia vai me ajudar?", 
      a: "Com certeza! Ele foi desenhado para acabar com a sua inconsistência. Você vai corrigir erros de postura que nem sabia que tinha e aprender o segredo dos efeitos para não depender mais da sorte." 
    },
    { 
      q: "Serve para as mesinhas de bar (Sinuquinha)?", 
      a: "Sim! As técnicas de posicionamento, mira, puxadas e leitura de mesa funcionam perfeitamente na sinuquinha de bar, no mata-mata ou em mesas profissionais maiores." 
    },
    { 
      q: "Como vou acessar o material? Dá pra baixar no celular?", 
      a: "Seu acesso é 100% online e imediato. Em vez de baixar arquivos pesados que lotam seu celular, você recebe um link VIP exclusivo para acessar o guia e os bônus como se fosse um aplicativo direto no seu navegador." 
    },
    { 
      q: "E se eu não gostar do conteúdo?", 
      a: "Você tem 7 dias de garantia incondicional. Se você acessar o material, tentar aplicar e achar que não te ajudou a melhorar na mesa, devolvemos os seus R$ 12,90 sem burocracia." 
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpen(open === i ? null : i);
  };

  return (
    <section className="w-full bg-[#1A1A1A] py-16 px-4 text-white relative border-t-2 border-[#FFC500]/20">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-4xl font-black text-center mb-16 uppercase tracking-wide text-white drop-shadow-md">
          Ainda tem dúvidas?
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border-b-2 border-[#FFC500]/40 bg-transparent transition-colors hover:border-[#FFC500] overflow-hidden"
            >
              <button 
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-6 md:py-8 text-left group"
              >
                <span className="text-lg md:text-xl font-black pr-6 text-white group-hover:text-[#FFC500] transition-colors drop-shadow-sm">
                  {faq.q}
                </span>
                <ChevronDown 
                  size={36}
                  className={`shrink-0 text-[#FFC500] drop-shadow-[0_0_8px_rgba(255,197,0,0.6)] transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pt-2 text-white font-medium text-lg md:text-xl leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-[#080C0A] text-white selection:bg-[#00E575] selection:text-black">
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <SocialProofSection />
      <FinalOfferSection />
      <FaqSection />
    </div>
  );
}


