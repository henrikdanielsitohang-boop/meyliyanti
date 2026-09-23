import React, { useState } from 'react';
import { X, Search, BookMarked, Tag } from 'lucide-react';
import { GLOSARIUM } from '../data/curriculumData';

interface GlosariumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlosariumModal: React.FC<GlosariumModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = GLOSARIUM.filter(item =>
    item.istilah.toLowerCase().includes(query.toLowerCase()) ||
    item.makna.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white w-full max-w-2xl max-h-[85vh] rounded-2xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-800 to-emerald-800 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookMarked className="w-5 h-5 text-teal-300" />
            <h2 className="font-bold text-lg">Glosarium Istilah Ekonomi & TPACK</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-slate-100 bg-slate-50">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari istilah: primer, kelangkaan, rohani, TPACK..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              autoFocus
            />
          </div>
        </div>

        {/* Content List */}
        <div className="p-4 overflow-y-auto space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-8 text-slate-400 text-xs">
              Tidak ditemukan istilah untuk kata kunci "{query}".
            </div>
          ) : (
            filtered.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-emerald-50/40 hover:border-emerald-200 transition"
              >
                <div className="flex items-center gap-1.5 font-bold text-emerald-900 text-sm mb-1">
                  <Tag className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{item.istilah}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-5">
                  {item.makna}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-4 py-2.5 flex items-center justify-between text-xs text-slate-500">
          <span>Menampilkan {filtered.length} dari {GLOSARIUM.length} istilah</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-medium transition"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
