import React from 'react';
import { motion } from 'framer-motion';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
  return (
    <motion.div 
      className="space-y-1"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {label && (
        <label className="block text-sm font-medium text-gray-700 transition-colors duration-200">
          {label}
        </label>
      )}
      <input
        className={`w-full rounded-lg border border-gray-300 px-4 py-2 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:border-blue-400 ${className}`}
        {...props}
      />
    </motion.div>
  );
};