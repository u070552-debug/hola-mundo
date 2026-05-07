import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Delete, Divide, Equal, Minus, Plus, X } from 'lucide-react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [shouldReset, setShouldReset] = useState(false);

  const handleNumber = (num: string) => {
    if (display === '0' || shouldReset) {
      setDisplay(num);
      setShouldReset(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (op: string) => {
    setEquation(display + ' ' + op + ' ');
    setShouldReset(true);
  };

  const calculate = () => {
    try {
      const result = eval(equation + display);
      setDisplay(String(result));
      setEquation('');
      setShouldReset(true);
    } catch {
      setDisplay('Error');
    }
  };

  const clear = () => {
    setDisplay('0');
    setEquation('');
  };

  const buttons = [
    { label: 'C', action: clear, type: 'special' },
    { label: '/', action: () => handleOperator('/'), icon: Divide, type: 'operator' },
    { label: '*', action: () => handleOperator('*'), icon: X, type: 'operator' },
    { label: '7', action: () => handleNumber('7') },
    { label: '8', action: () => handleNumber('8') },
    { label: '9', action: () => handleNumber('9') },
    { label: '-', action: () => handleOperator('-'), icon: Minus, type: 'operator' },
    { label: '4', action: () => handleNumber('4') },
    { label: '5', action: () => handleNumber('5') },
    { label: '6', action: () => handleNumber('6') },
    { label: '+', action: () => handleOperator('+'), icon: Plus, type: 'operator' },
    { label: '1', action: () => handleNumber('1') },
    { label: '2', action: () => handleNumber('2') },
    { label: '3', action: () => handleNumber('3') },
    { label: '=', action: calculate, icon: Equal, type: 'equal' },
    { label: '0', action: () => handleNumber('0'), colSpan: 2 },
    { label: '.', action: () => handleNumber('.') },
  ];

  return (
    <div className="w-full max-w-xs mx-auto bg-[#0F0F11] border border-[#1F1F23] rounded-3xl p-6 shadow-2xl" id="calculator-ui">
      {/* Screen */}
      <div className="mb-6 p-4 bg-[#0A0A0B] border border-[#1F1F23] rounded-2xl text-right overflow-hidden">
        <div className="text-[10px] text-[#52525B] font-mono uppercase tracking-widest h-4 mb-1">
          {equation}
        </div>
        <div className="text-4xl font-mono text-white tracking-tighter truncate">
          {display}
        </div>
      </div>

      {/* Keys */}
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((btn, i) => (
          <motion.button
            key={i}
            whileTap={{ scale: 0.95 }}
            onClick={btn.action}
            className={`
              h-14 rounded-xl flex items-center justify-center font-medium transition-colors
              ${btn.colSpan === 2 ? 'col-span-2' : ''}
              ${btn.type === 'operator' ? 'bg-[#1F1F23] text-[#E5E5E7] hover:bg-[#2C2C30]' : 
                btn.type === 'special' ? 'bg-red-500/10 text-red-400 hover:bg-red-500/20' :
                btn.type === 'equal' ? 'bg-white text-black hover:bg-gray-200 row-span-2 h-auto' :
                'bg-[#161618] text-[#A1A1AA] hover:bg-[#1F1F23]'}
            `}
            id={`calc-btn-${btn.label}`}
          >
            {btn.icon ? <btn.icon size={18} /> : btn.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
