const { exec } = require('child_process');
const http = require('http');
const path = require('path');

// Configurações
const TARGET_URL = 'http://localhost:3000';
const MIN_SCORE = 90;

console.log('🚀 Iniciando Validador de Performance Antigravity...');

function runLighthouse() {
  console.log(`\n🔍 Rodando Auditoria Lighthouse em ${TARGET_URL}...`);
  
  const command = `npx lighthouse ${TARGET_URL} --output json --chrome-flags="--headless" --only-categories=performance`;
  
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Erro ao rodar Lighthouse: ${error.message}`);
      return;
    }
    
    try {
      const results = JSON.parse(stdout);
      const score = results.categories.performance.score * 100;
      
      console.log('\n------------------------------------------');
      console.log(`📊 PONTUAÇÃO DE PERFORMANCE: ${score}`);
      console.log('------------------------------------------\n');
      
      if (score >= MIN_SCORE) {
        console.log('✅ APROVADO! O site está pronto para o servidor Hostinger.');
      } else {
        console.log(`⚠️ REPROVADO! A nota ${score} está abaixo da meta de ${MIN_SCORE}.`);
        console.log('💡 Dica: Verifique imagens não otimizadas ou bloqueios de JS.');
      }
      
      // Mostrar métricas principais
      const metrics = results.audits;
      console.log(`- LCP: ${metrics['largest-contentful-paint'].displayValue}`);
      console.log(`- TBT: ${metrics['total-blocking-time'].displayValue}`);
      console.log(`- CLS: ${metrics['cumulative-layout-shift'].displayValue}`);
      
    } catch (e) {
      console.error('❌ Erro ao processar resultados da auditoria.');
    }
  });
}

// Iniciar verificação
runLighthouse();
