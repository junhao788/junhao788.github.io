'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navigation() {
  return (
    <>
      {/* Mobile Top Header (hidden on md and up) */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 w-full h-16 border-b border-white/10 z-50 bg-black/80 backdrop-blur-md flex items-center justify-between px-6 md:hidden"
      >
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <div className="w-4 h-2 bg-black rounded-sm" />
        </div>
        
        <div className="flex gap-6">
          {['Work', 'About', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-lime-400 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </motion.header>

      {/* Left Vertical Sidebar (hidden on mobile) */}
      <motion.aside 
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="hidden md:flex fixed top-0 left-0 h-screen w-20 md:w-24 border-r border-white/10 z-50 bg-black flex-col items-center py-10"
      >
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-12">
          <div className="w-8 h-4 bg-black rounded-sm" />
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center gap-16">
          {['Work', 'About', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="vertical-text font-bold uppercase tracking-[0.2em] text-xs text-zinc-500 hover:text-lime-400 transition-colors"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              {item}
            </Link>
          ))}
        </div>
      </motion.aside>

      {/* Right Social Bar (hidden on mobile) */}
      <motion.aside 
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        className="hidden md:flex fixed top-0 right-0 h-screen w-12 md:w-16 z-50 flex-col items-center py-10 pointer-events-none"
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
