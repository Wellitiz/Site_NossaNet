export function Footer() {
  return (
    <footer className="bg-nossa-darkgray text-nossa-gray py-12 border-t border-zinc-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center mb-4">
             <span className="text-primary font-bold text-2xl tracking-tighter">NossaNeT</span>
             <span className="text-white font-semibold text-xl ml-1">Fortaleza</span>
          </div>
          <p className="text-sm text-zinc-400 max-w-sm mb-6">
            Trabalhamos todos os dias para entregar o melhor serviço possível aos nossos clientes, com estabilidade e suporte dedicado.
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-medium">
             <span className="bg-zinc-800 px-3 py-1 rounded-full border border-zinc-700">100% Wi-Fi</span>
             <span className="bg-zinc-800 px-3 py-1 rounded-full border border-zinc-700">Sem Limite de Dados</span>
             <span className="bg-zinc-800 px-3 py-1 rounded-full border border-zinc-700">Suporte Especializado</span>
             <span className="bg-zinc-800 px-3 py-1 rounded-full border border-zinc-700">Ultra Velocidade</span>
          </div>
        </div>
        <div className="flex flex-col md:items-end gap-2 text-sm text-zinc-400">
          <p><strong>Atendimento:</strong> (85) 98792-4619</p>
          <p><strong>WhatsApp:</strong> (85) 9645-8789</p>
          <p><strong>Email:</strong> contato@nossanetfortaleza.com.br</p>
          <p>Fortaleza - Ceará</p>
          <p className="mt-6 text-xs text-zinc-600">© {new Date().getFullYear()} NossaNeT Fortaleza. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
