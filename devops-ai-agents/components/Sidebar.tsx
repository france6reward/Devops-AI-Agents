'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { BsGear, BsCloud, BsCodeSquare, BsShieldCheck, 
         BsDiagram3, BsGraphUp, BsSpeedometer, BsBug, 
         BsHouseDoor, BsList, BsX, BsLightbulb, BsRobot, BsPeople, BsChevronRight } from 'react-icons/bs';

const menuItems = [
  { icon: <BsHouseDoor size={20} />, name: "Home", path: "/" },
  { icon: <BsGear size={20} />, name: "CI/CD Pipeline", path: "/ci-cd" },
  { icon: <BsCloud size={20} />, name: "Cloud Infrastructure", path: "/cloud-infrastructure" },
  { icon: <BsCodeSquare size={20} />, name: "Code Analysis", path: "/code-analysis" },
  { icon: <BsShieldCheck size={20} />, name: "Security Scanning", path: "/security-scanning" },
  { icon: <BsDiagram3 size={20} />, name: "Container Orchestration", path: "/container-orchestration" },
  { icon: <BsGraphUp size={20} />, name: "Performance Monitoring", path: "/performance-monitoring" },
  { icon: <BsSpeedometer size={20} />, name: "Load Testing", path: "/load-testing" },
  { icon: <BsBug size={20} />, name: "Incident Response", path: "/incident-response" },
  { icon: <BsPeople size={20} />, name: "About Us", path: "/about" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button 
        className="fixed top-4 left-4 z-40 p-2 rounded-md bg-accent text-accent-foreground md:hidden hover:shadow-lg transition-all duration-200 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <BsX size={24} /> : <BsList size={24} />}
      </motion.button>
      
      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <motion.div 
        className="fixed top-0 left-0 h-screen w-72 bg-background border-r border-border z-30 md:relative md:block md:w-72"
        initial={isMounted ? { x: -288 } : false}
        animate={isMounted ? { x: isOpen || typeof window !== 'undefined' && window.innerWidth >= 768 ? 0 : -288 } : false}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="p-6 h-full flex flex-col overflow-y-auto">
          {/* Logo Section */}
          <motion.div 
            className="flex items-center gap-3 mb-8 pb-6 border-b border-border"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-lg">
              <BsRobot className="text-accent-foreground" size={20} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Cortex AI</h1>
              <p className="text-xs text-muted">Agents Platform</p>
            </div>
          </motion.div>
          
          {/* Navigation Section */}
          <nav className="flex-grow">
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3 px-2">Menu</p>
            <ul className="space-y-2">
              {menuItems.map((item, index) => {
                const isActive = pathname === item.path;
                return (
                  <motion.li 
                    key={item.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link 
                      href={item.path}
                      className={`relative group flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 overflow-hidden ${
                        isActive 
                          ? 'text-accent' 
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {/* Background highlight for active item */}
                      <motion.div
                        className="absolute inset-0 bg-accent/10"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -20 }}
                        transition={{ duration: 0.2 }}
                      />
                      
                      {/* Left border accent */}
                      <motion.div
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-accent rounded-r"
                        initial={{ height: 0 }}
                        animate={{ height: isActive ? 24 : 0 }}
                        transition={{ duration: 0.2 }}
                      />
                      
                      {/* Icon */}
                      <motion.span 
                        className={`relative z-10 transition-all duration-200 ${isActive ? 'text-accent scale-110' : 'text-muted-foreground group-hover:text-accent'}`}
                        animate={{ rotate: isActive ? 0 : 0 }}
                      >
                        {item.icon}
                      </motion.span>
                      
                      {/* Label */}
                      <span className="relative z-10 font-medium text-sm">{item.name}</span>
                      
                      {/* Chevron for active item */}
                      {isActive && (
                        <motion.span
                          className="ml-auto text-accent"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <BsChevronRight size={16} />
                        </motion.span>
                      )}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav>
          
          {/* AI Assistant Card */}
          <motion.div 
            className="mt-6 p-4 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 relative overflow-hidden group"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ borderColor: 'rgba(6, 182, 212, 0.4)' }}
          >
            {/* Accent line */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
            
            {/* Content */}
            <div className="flex items-start gap-3 relative z-10">
              <motion.div
                className="flex-shrink-0"
                whileHover={{ rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <BsLightbulb className="text-accent" size={18} />
              </motion.div>
              <div className="flex-grow">
                <h4 className="text-sm font-semibold text-foreground mb-1">AI Assistant</h4>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  Get intelligent help with your Cortex workflows anytime
                </p>
                <motion.button 
                  className="w-full text-xs font-medium py-1.5 px-3 rounded-md bg-accent text-accent-foreground hover:shadow-lg transition-all duration-200 border border-accent/50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Launch Chat
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
