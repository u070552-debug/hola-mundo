/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Users, Code, Layout, Database, Terminal, Calculator as CalcIcon, Home } from "lucide-react";
import Calculator from "./components/Calculator";

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'calc'>('home');

  const teamMembers = [
    { role: "Líder", icon: Users },
    { role: "Analista", icon: Database },
    { role: "Diseñador", icon: Layout },
    { role: "Programador", icon: Code },
    { role: "Programador", icon: Terminal },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0B] selection:bg-[#E5E5E7] selection:text-[#0A0A0B]" id="main-container">
      {/* Top Glow Decor */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2C2C30] to-transparent opacity-50" />

      {/* Navigation Switcher */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-[#0F0F11]/80 backdrop-blur-md border border-[#1F1F23] p-1 rounded-full flex items-center space-x-1">
          <button 
            onClick={() => setActiveTab('home')}
            className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${activeTab === 'home' ? 'bg-[#1F1F23] text-white' : 'text-[#52525B] hover:text-[#A1A1AA]'}`}
          >
            <Home size={12} /> Inicio
          </button>
          <button 
            onClick={() => setActiveTab('calc')}
            className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${activeTab === 'calc' ? 'bg-[#1F1F23] text-white' : 'text-[#52525B] hover:text-[#A1A1AA]'}`}
          >
            <CalcIcon size={12} /> Calculadora
          </button>
        </div>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden" id="content-area">
        <AnimatePresence mode="wait">
          {activeTab === 'home' ? (
            <motion.div 
              key="home"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="relative group w-full max-w-2xl"
              id="main-card-container"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#2C2C30] to-[#1F1F23] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
              
              <div className="relative bg-[#0F0F11] border border-[#1F1F23] rounded-2xl p-12 lg:p-16 text-center overflow-hidden" id="content-card">
                <header className="mb-16 space-y-4" id="header-section">
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-[#6B6B75] text-[10px] font-mono uppercase tracking-[0.4em] block"
                  >
                    Project: Initialized
                  </motion.span>
                  <h1 className="text-7xl font-bold tracking-tighter text-white sm:text-8xl" id="main-title">
                    Hola Mundo
                  </h1>
                </header>

                <div className="grid grid-cols-5 gap-2 pt-12 border-t border-[#1F1F23]" id="team-info">
                  {teamMembers.map((member, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 + (index * 0.1) }}
                      className="flex flex-col items-center gap-3 group/member"
                      id={`member-${index}`}
                    >
                      <div className="p-2.5 rounded-lg border border-transparent group-hover/member:border-[#1F1F23] group-hover/member:bg-[#161618] transition-all duration-300">
                        <member.icon size={16} className="text-[#52525B] group-hover/member:text-[#E5E5E7] transition-colors" />
                      </div>
                      <span className="text-[9px] uppercase font-bold text-[#52525B] tracking-widest leading-none group-hover/member:text-[#A1A1AA]">
                        {member.role}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="calc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="w-full"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Calculadora de Análisis</h2>
                <p className="text-[#6B6B75] text-xs font-mono uppercase tracking-widest">Data Analysis Tool v1.0</p>
              </div>
              <Calculator />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Elegant Status Bar */}
      <footer className="p-8 flex flex-col sm:flex-row justify-between items-center bg-[#0A0A0B] border-t border-[#1F1F23] space-y-4 sm:space-y-0" id="status-footer">
        <div className="flex items-center space-x-8">
          <div className="flex flex-col">
            <span className="text-[10px] text-[#52525B] uppercase font-bold tracking-widest mb-1">Status</span>
            <span className="text-xs text-[#10B981] font-medium flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mr-2 animate-pulse" />
              Online / Kanban Active
            </span>
          </div>
          <div className="hidden sm:block w-[1px] h-8 bg-[#1F1F23]" />
          <div className="flex flex-col">
            <span className="text-[10px] text-[#52525B] uppercase font-bold tracking-widest mb-1">Region</span>
            <span className="text-xs text-[#E5E5E7] font-medium">Global-S1 / CETIS 7</span>
          </div>
        </div>

        <div className="flex flex-col text-center sm:text-right">
          <span className="text-[10px] text-[#52525B] uppercase font-bold tracking-widest mb-1">System Version</span>
          <span className="text-xs text-[#A1A1AA] font-mono tracking-tighter">
            2026.05.07_PROTOTYPE_v1.0.0
          </span>
        </div>
      </footer>
    </div>
  );
}

