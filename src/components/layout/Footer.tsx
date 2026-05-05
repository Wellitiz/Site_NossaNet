import { Globe, Users, Video, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-nossa-black text-white pt-24 pb-12 relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-8">
               <span className="text-primary font-black text-3xl tracking-tighter">NossaNeT</span>
               <span className="text-white font-black text-xs uppercase tracking-[0.3em] ml-2 opacity-40">Fortaleza</span>
            </div>
            <p className="text-zinc-500 font-medium leading-relaxed mb-8 max-w-xs">
              A única empresa de Fortaleza que envia um especialista para dimensionar a internet ideal para sua necessidade real.
            </p>
            <div className="flex gap-4">
              {[Globe, Users, Video].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-all group">
                  <Icon size={20} className="text-zinc-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black mb-8 uppercase tracking-widest">Navegação</h4>
            <ul className="space-y-4">
              {['Home', 'Planos', 'Empresas', 'Área do Cliente', 'Trabalhe Conosco'].map(item => (
                <li key={item}>
                  <a href="#" className="text-zinc-500 font-bold hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-black mb-8 uppercase tracking-widest">Informações</h4>
            <ul className="space-y-4">
              {['Contratos', 'Políticas de Privacidade', 'Teste de Velocidade', 'Segunda Via Boleto'].map(item => (
                <li key={item}>
                  <a href="#" className="text-zinc-500 font-bold hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-black mb-8 uppercase tracking-widest">Atendimento</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase">Vendas e Suporte</p>
                  <p className="font-bold">(85) 9645-8789</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase">E-mail</p>
                  <p className="font-bold">contato@nossanet.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase">Fortaleza</p>
                  <p className="font-bold">Ceará, Brasil</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-600 text-sm font-bold">
            © {new Date().getFullYear()} NossaNeT Fortaleza. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-8">
            <span className="text-zinc-600 text-xs font-bold uppercase tracking-widest">Fibra 100% Própria</span>
            <div className="h-4 w-px bg-white/10"></div>
            <span className="text-zinc-600 text-xs font-bold uppercase tracking-widest">ASN 264421</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
