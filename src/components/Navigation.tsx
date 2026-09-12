'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { DESKTOP_NAV_BREAKPOINT } from '@/lib/responsive-layout.mjs';

export default function Navigation() {
  return (
    <>
      {/* Compact header stays available through tablet widths. */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 w-full h-16 border-b border-white/10 z-50 bg-black/90 backdrop-blur-md flex items-center justify-between pl-5 pr-3 sm:px-6 lg:hidden"
        data-desktop-breakpoint={DESKTOP_NAV_BREAKPOINT}
      >
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <div className="w-4 h-2 bg-black rounded-sm" />
        </div>
        
        <nav aria-label="Primary navigation" className="flex items-center gap-0.5 sm:gap-2">
          {['Work', 'About', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="min-h-11 px-2.5 sm:px-3 flex items-center justify-center text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] sm:tracking-widest text-zinc-400 hover:text-lime-400 focus-visible:text-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400 transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
      </motion.header>

      {/* Desktop navigation rails */}
      <motion.aside 
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="hidden lg:flex fixed top-0 left-0 h-screen w-24 border-r border-white/10 z-50 bg-black flex-col items-center py-10"
      >
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-12">
          <div className="w-8 h-4 bg-black rounded-sm" />
        </div>
        
        <nav aria-label="Primary navigation" className="flex-1 flex flex-col items-center justify-center gap-16">
          {['Work', 'About', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="vertical-text min-w-11 py-3 flex items-center justify-center font-bold uppercase tracking-[0.2em] text-xs text-zinc-500 hover:text-lime-400 focus-visible:text-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime-400 transition-colors"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              {item}
            </Link>
          ))}
        </nav>
      </motion.aside>

      {/* Right Social Bar (hidden on mobile) */}
      <motion.aside 
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        className="hidden lg:flex fixed top-0 right-0 h-screen w-16 z-50 flex-col items-center py-10 pointer-events-none"
      >
        <div className="flex-1" />
        <div className="flex flex-col items-center gap-8 pointer-events-auto">
          {['TW', 'GH', 'LI'].map((social) => (
            <a 
              key={social} 
              href="#" 
              className="font-bold text-[10px] text-zinc-500 hover:text-white transition-colors"
            >
              {social}
            </a>
          ))}
          <div className="w-px h-24 bg-white/20 mt-4" />
        </div>
      </motion.aside>
    </>
  );
}
