"use client";

import { FeatureCard } from '@/components/FeatureCard';
import { BsGear, BsCloud, BsCodeSquare, BsShieldCheck, BsDiagram3, BsGraphUp, BsSpeedometer, BsBug, BsRobot, BsArrowRight, BsStars, BsLightning, BsCheck } from 'react-icons/bs';
import { motion } from 'framer-motion';
import MultiModalChat from '@/components/MultiModalChat';

export default function Home() {
  const features = [
    {
      title: "CI/CD Pipeline Management",
      description: "Automate your continuous integration and delivery pipelines",
      icon: <BsGear size={24} />,
      link: "/ci-cd"
    },
    {
      title: "Cloud Infrastructure",
      description: "Manage and optimize your cloud resources",
      icon: <BsCloud size={24} />,
      link: "/cloud-infrastructure"
    },
    {
      title: "Code Analysis",
      description: "Analyze your code for quality and security issues",
      icon: <BsCodeSquare size={24} />,
      link: "/code-analysis"
    },
    {
      title: "Security Scanning",
      description: "Identify and remediate security vulnerabilities",
      icon: <BsShieldCheck size={24} />,
      link: "/security-scanning"
    },
    {
      title: "Container Orchestration",
      description: "Manage containerized applications and services",
      icon: <BsDiagram3 size={24} />,
      link: "/container-orchestration"
    },
    {
      title: "Performance Monitoring",
      description: "Monitor and optimize application performance",
      icon: <BsGraphUp size={24} />,
      link: "/performance-monitoring"
    },
    {
      title: "Load Testing",
      description: "Test system performance under various load conditions",
      icon: <BsSpeedometer size={24} />,
      link: "/load-testing"
    },
    {
      title: "Incident Response",
      description: "Detect and respond to system incidents automatically",
      icon: <BsBug size={24} />,
      link: "/incident-response"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="relative bg-background">
      {/* Grid background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4">
          {/* Accent dots */}
          <div className="absolute top-20 right-20 w-1 h-1 bg-accent rounded-full"></div>
          <div className="absolute top-40 left-10 w-1 h-1 bg-accent rounded-full"></div>
          <div className="absolute bottom-40 right-32 w-1 h-1 bg-accent rounded-full"></div>
          
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                  <BsStars className="mr-2" size={14} />
                  AI-Powered Cortex Platform
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
                  Automate Cortex with AI Intelligence
                </h1>
                
                <p className="text-xl text-foreground/60 mb-8 leading-relaxed max-w-lg text-pretty">
                  Empower your team to build and deploy faster. Let intelligent agents handle your CI/CD, infrastructure, and monitoring while you focus on innovation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center bg-accent text-background hover:bg-accent/90 font-semibold px-6 py-3 rounded-full transition-all shadow-lg"
                  >
                    <BsLightning className="mr-2" size={18} />
                    Get Started
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center bg-foreground/5 border border-foreground/10 text-foreground hover:bg-foreground/10 font-semibold px-6 py-3 rounded-full transition-all"
                  >
                    Watch Demo
                    <BsArrowRight className="ml-2" size={18} />
                  </motion.button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <div className="text-2xl font-bold text-accent mb-1">8</div>
                    <div className="text-sm text-foreground/60">AI Modules</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent mb-1">99.9%</div>
                    <div className="text-sm text-foreground/60">Uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent mb-1">24/7</div>
                    <div className="text-sm text-foreground/60">Support</div>
                  </div>
                </div>
              </motion.div>

              {/* Right - Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:flex justify-center"
              >
                <div className="relative w-full h-full max-w-md">
                  {/* Animated circle background */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 blur-2xl"></div>
                  
                  <div className="relative p-8">
                    <div className="rounded-xl border border-foreground/10 bg-background/50 backdrop-blur-sm p-6">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-sm font-semibold text-foreground/60">Agent Status</span>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                      
                      <div className="space-y-4">
                        {['CI/CD Pipeline', 'Cloud Infrastructure', 'Security Scanning'].map((item, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center">
                              <BsCheck className="text-accent" size={14} />
                            </div>
                            <span className="text-sm text-foreground/80">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 border-y border-foreground/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <p className="text-sm text-foreground/60 font-medium">Trusted by Cortex Teams Worldwide</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {['Vercel', 'Netflix', 'Stripe', 'GitHub'].map((company, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-sm font-semibold text-foreground/40"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance"
              >
                Powerful AI-Powered Capabilities
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-foreground/60 max-w-2xl mx-auto text-pretty"
              >
                Eight specialized AI agents working together to streamline your entire Cortex pipeline
              </motion.p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <FeatureCard {...feature} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 px-4 bg-foreground/2">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold text-foreground text-balance">
                  Why Choose Our AI Platform?
                </h2>
                
                {[
                  { title: "Reduce Manual Work", desc: "Automate 80% of routine Cortex tasks" },
                  { title: "Faster Deployments", desc: "Cut deployment time in half with intelligent pipelines" },
                  { title: "Enhanced Security", desc: "Real-time vulnerability detection and remediation" },
                  { title: "Cost Optimization", desc: "Reduce infrastructure costs by up to 40%" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-accent/20">
                        <BsCheck className="text-accent" size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-foreground/60">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="grid grid-cols-2 gap-4"
              >
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="rounded-lg border border-foreground/10 bg-background/50 backdrop-blur-sm h-32 flex items-center justify-center">
                    <BsRobot className="text-foreground/20" size={40} />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Ready to Transform Your Cortex?
              </h2>
              <p className="text-xl text-foreground/60 mb-8 text-pretty">
                Start automating your infrastructure and infrastructure management today. No credit card required.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-accent text-background hover:bg-accent/90 font-semibold px-8 py-3 rounded-full transition-all shadow-lg"
              >
                Get Started Free
                <BsArrowRight className="ml-2" size={18} />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
      
      {/* Multi-Modal AI Chat Widget */}
      <MultiModalChat />
    </div>
  );
}
