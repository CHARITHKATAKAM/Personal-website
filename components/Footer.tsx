"use client";

import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/charithkatakam', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/charith-katakam-a17034295/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:charithkatakam@gmail.com', label: 'Email' },
    { icon: FiPhone, href: 'tel:+918341505040', label: 'Phone' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Charith Katakam</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              AI/ML Engineer and QA Automation Engineer focused on AI, agentic workflows, and test automation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors text-base md:text-lg font-medium"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <div className="mt-4 space-y-1">
              <p className="text-gray-400 text-sm">charithkatakam@gmail.com</p>
              <p className="text-gray-400 text-sm">+91 8341505040</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Charith Katakam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
