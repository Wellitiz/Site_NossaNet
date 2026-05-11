'use client';
import React, { useState, useEffect } from 'react';

interface HeroVideoProps {
  desktopSrc: string;
  mobileSrc: string;
  posterSrc: string;
}

export function HeroVideo({ desktopSrc, mobileSrc, posterSrc }: HeroVideoProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-nossa-black">
      {/* Background Poster (Sempre visível como fallback) */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundImage: `url(${posterSrc})` }}
      />

      {/* Video Element */}
      <video
        key={isMobile ? 'mobile' : 'desktop'}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Prioridade para WebM (Mais leve) */}
        <source src={isMobile ? "/Video/Waves Mobile.webm" : "/Video/Waves Desktop.webm"} type="video/webm" />
        
        {/* Fallback para MP4 Otimizado */}
        <source src={isMobile ? "/Video/Waves Mobile_opt.mp4" : "/Video/Waves Desktop_opt.mp4"} type="video/mp4" />
      </video>

      {/* Overlay para garantir contraste do texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-nossa-black via-nossa-black/20 to-transparent" />
    </div>
  );
}
