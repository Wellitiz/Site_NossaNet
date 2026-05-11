const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const videoDir = path.join(__dirname, 'public', 'Video');
const files = [
  { name: 'Waves Desktop.mp4', scale: '1280:-1' },
  { name: 'Waves Mobile.mp4', scale: '720:-1' }
];

if (!fs.existsSync(videoDir)) {
  console.error('Diretório de vídeo não encontrado!');
  process.exit(1);
}

files.forEach(file => {
  const input = path.join(videoDir, file.name);
  const outputBase = file.name.replace('.mp4', '');
  
  console.log(`\n🚀 Processando: ${file.name}`);
  
  try {
    // 1. Gerar WebM (Ultra leve)
    const outputWebm = path.join(videoDir, `${outputBase}.webm`);
    console.log(`   -> Gerando WebM...`);
    execSync(`"${ffmpeg}" -i "${input}" -an -vcodec libvpx-vp9 -crf 35 -b:v 0 -vf scale=${file.scale} "${outputWebm}" -y`);
    
    // 2. Gerar MP4 Otimizado (Fallback)
    const outputMp4 = path.join(videoDir, `${outputBase}_opt.mp4`);
    console.log(`   -> Gerando MP4 Otimizado...`);
    execSync(`"${ffmpeg}" -i "${input}" -an -vcodec libx264 -crf 28 -preset fast -vf scale=${file.scale} "${outputMp4}" -y`);
    
    console.log(`✅ Sucesso: ${file.name}`);
  } catch (error) {
    console.error(`❌ Erro ao processar ${file.name}:`, error.message);
  }
});

console.log('\n✨ Todos os vídeos foram comprimidos localmente sem marca d\'água!');
