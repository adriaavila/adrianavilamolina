import Link from 'next/link';

export const metadata = {
  title: 'Mi Historia | Adrian Avila',
  description: 'El proceso de crear sistemas que operan por sí solos.',
};

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-[#04070f] text-white selection:bg-[#38bdf8] selection:text-white">
      {/* Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 p-6 sm:p-10">
        <Link 
          href="/" 
          className="group inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white"
        >
          <svg className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al inicio
        </Link>
      </nav>

      <main className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-32 sm:px-12">
        {/* Animated Background Ambience */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[50%] top-[40%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1d4ed8] opacity-10 blur-[120px]" />
        </div>

        {/* Big Animated Logo Container */}
        <div className="relative mb-20 flex h-40 w-40 items-center justify-center">
          {/* Pulsing glow behind */}
          <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-tr from-[#38bdf8] to-[#1d4ed8] opacity-20 blur-3xl" />
          
          <div className="relative flex h-full w-full items-center justify-center rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#1e1e2e]/80 to-[#04070f] backdrop-blur-xl shadow-[0_0_60px_rgba(56,189,248,0.15)] transition-transform duration-1000 hover:scale-105">
            <svg
              className="relative z-10 h-20 w-20 animate-[pulse_4s_ease-in-out_infinite]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#ocean-gradient-large)"
            >
              <defs>
                <linearGradient id="ocean-gradient-large" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#86f7ff" />
                  <stop offset="50%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
              </defs>
              <path
                d="M4 20 L12 4 L20 20 M8 12 L12 20 L16 12"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-[dash_3s_ease-in-out_forwards]"
                strokeDasharray="100"
                strokeDashoffset="100"
                style={{
                  animation: 'dash 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards, float 6s ease-in-out infinite alternate',
                }}
              />
            </svg>
          </div>
        </div>

        {/* Storytelling Content */}
        <div className="relative z-10 max-w-2xl space-y-12">
          
          <p className="text-2xl font-light leading-relaxed tracking-tight text-white/90 sm:text-3xl sm:leading-[1.4]">
            Empecé resolviendo algo simple: <span className="font-medium text-white">tareas manuales que nadie quería hacer.</span>
          </p>

          <div className="space-y-6 text-lg font-light leading-relaxed text-white/60 sm:text-xl">
            <p className="animate-fade-in-up [animation-delay:400ms]">
              Data entry, seguimiento, reportes. Procesos lentos, repetitivos y propensos a errores.
            </p>
            
            <p className="animate-fade-in-up [animation-delay:800ms]">
              En lugar de optimizarlos superficialmente, empecé a eliminarlos.<br/>
              <span className="bg-gradient-to-r from-[#38bdf8] to-[#1d4ed8] bg-clip-text text-transparent font-medium">Primero con automatización. Luego con sistemas más inteligentes usando IA.</span>
            </p>

            <p className="animate-fade-in-up [animation-delay:1200ms]">
              Hoy me enfoco en diseñar sistemas simples que operan por sí solos, reducen fricción y permiten a los negocios enfocarse en lo que realmente importa.
            </p>

            <p className="animate-fade-in-up text-white/80 [animation-delay:1600ms]">
              Comparto ese proceso en público, no como contenido, sino como una <em className="text-white font-medium not-italic">forma de pensar mejor</em>.
            </p>
          </div>

        </div>
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes float {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-4px) scale(1.02); }
          100% { transform: translateY(0px) scale(1); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}} />
    </div>
  );
}
