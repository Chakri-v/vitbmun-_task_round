import React from 'react';
import { motion } from 'framer-motion';

interface NavLinksProps {
  className?: string;
  onLinkClick?: () => void;
}

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#events', label: 'Events' },
  { href: '#contact', label: 'Contact' },
];

export const NavLinks: React.FC<NavLinksProps> = ({ className = '', onLinkClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
      onLinkClick?.();
    }
  };

  return (
    <nav className={className}>
      {links.map((link) => (
        <motion.a
          key={link.href}
          href={link.href}
          onClick={handleClick}
          className="text-gray-700 hover:text-blue-600 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {link.label}
        </motion.a>
      ))}
    </nav>
  );
};