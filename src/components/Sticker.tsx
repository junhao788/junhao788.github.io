'use client';
import { motion } from 'framer-motion';

interface StickerProps {
  text: string;
  subtext?: string;
  color: string;
  rotation?: number;
  className?: string;
  icon?: React.ReactNode;
}

export default function Sticker({ text, subtext, color, rotation = 0, className = '', icon }: StickerProps) {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileHover={{ scale: 1.05, rotate: rotation + 5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ rotate: rotation, opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`absolute cursor-grab active:cursor-grabbing p-4 rounded-2xl flex flex-col items-center justify-center text-center font-black uppercase leading-tight sticker-shadow border-2 border-black ${className}`}
      style={{ backgroundColor: color }}
    >
      {icon && <div className="mb-2">{icon}</div>}
      <span className="text-xl md:text-2xl whitespace-pre-line">{text}</span>
      {subtext && <span className="text-[10px] mt-1 opacity-70">{subtext}</span>}
    </motion.div>
  );
}
