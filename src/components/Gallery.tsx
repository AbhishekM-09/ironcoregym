import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';
import { Maximize2, Camera } from 'lucide-react';

interface GalleryProps {
  onSelectImage: (item: GalleryItem) => void;
}

export default function Gallery({ onSelectImage }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Facility' },
    { id: 'equipment', label: 'Equipment' },
    { id: 'sessions', label: 'Workout Sessions' },
    { id: 'recovery', label: 'Recovery Lounge' },
    { id: 'interior', label: 'Interior Design' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E11D48]/10 border border-[#E11D48]/30 mb-4"
          >
            <Camera className="w-3.5 h-3.5 text-[#E11D48]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48]">
              INSIDE IRONCORE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight max-w-3xl"
          >
            FACILITY & <span className="text-[#E11D48]">ATMOSPHERE GALLERY</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl text-base mt-4 font-normal"
          >
            Take a visual tour of our high-intensity turf, power platforms, custom biomechanical machines, and recovery saunas.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-[#E11D48] text-white red-glow-sm'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => onSelectImage(item)}
                className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 aspect-[4/3] cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />

                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#E11D48] mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-display text-lg font-black text-white flex items-center justify-between">
                    <span>{item.title}</span>
                    <Maximize2 className="w-5 h-5 text-[#E11D48]" />
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
