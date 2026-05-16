/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import heroImage from './assets/images/hero_forest_mist_1778971590935.png';
import mangroveImage from './assets/images/mangrove_restoration_1778971609002.png';
import techImage from './assets/images/environmental_data_tech_1778971625155.png';

import { 
  TreePine, 
  Droplet, 
  Map, 
  BarChart3, 
  Globe, 
  ShieldCheck, 
  Users, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Linkedin, 
  Twitter, 
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
  Leaf
} from 'lucide-react';

// --- Data Definitions ---

const services = [
  {
    title: "Climate Change Consulting",
    description: "Policy analysis, vulnerability assessments, and climate adaptation strategies to build resilient systems.",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    title: "Forestry & Ecosystem Management",
    description: "Expertise in forest protection, peatland restoration, and mangrove ecosystem management.",
    icon: <TreePine className="w-8 h-8" />,
  },
  {
    title: "MRV Systems & GHG Inventory",
    description: "Developing technical solutions for Monitoring, Reporting, and Verification of greenhouse gas emissions.",
    icon: <BarChart3 className="w-8 h-8" />,
  },
  {
    title: "Spatial Mapping & GIS",
    description: "High-resolution spatial mapping and environmental data management for informed decision-making.",
    icon: <Map className="w-8 h-8" />,
  },
  {
    title: "Nature-Based Solutions",
    description: "Designing and implementing NbS projects for results-based finance and ecosystem resilience.",
    icon: <Droplet className="w-8 h-8" />,
  },
  {
    title: "Environmental Data Management",
    description: "Streamlined systems for collecting and analyzing complex environmental and climate data.",
    icon: <BarChart3 className="w-8 h-8" />,
  },
];

const impactStats = [
  { label: "Years of Experience", value: 12, suffix: "+" },
  { label: "Projects Completed", value: 85, suffix: "" },
  { label: "Ecosystems Supported", value: 450, suffix: "k ha" },
  { label: "Climate Initiatives", value: 30, suffix: "+" },
];

const coreValues = [
  { title: "Integrity", text: "Transparency and ethics in every scientific analysis and advisory role." },
  { title: "Sustainability", text: "Commitment to long-term environmental health and low-carbon futures." },
  { title: "Collaboration", text: "Working with governments, communities, and partners for shared impact." },
  { title: "Innovation", text: "Leveraging technology and data to solve complex ecosystem challenges." },
  { title: "Scientific Excellence", text: "Grounding all technical solutions in rigorous data and evidence." },
  { title: "Impact-Driven", text: "Meticulous focus on measurable outcomes for national and gobal goals." },
];

const projects = [
  {
    title: "Mangrove Restoration Program",
    category: "Nature-Based Solutions",
    image: mangroveImage,
  },
  {
    title: "Peatland Monitoring System",
    category: "Spatial Mapping & MRV",
    image: techImage,
  },
  {
    title: "Low Carbon Development Initiative",
    category: "Climate Consulting",
    image: heroImage,
  },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Vision", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Expertise", href: "#impact" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-4 md:py-6' : 'bg-transparent py-6 md:py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center text-forest">
        <a href="#" className="flex items-center gap-2 md:gap-3">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-forest rounded-full flex items-center justify-center">
            <div className="w-3 h-3 md:w-4 md:h-4 bg-cream rounded-full opacity-60"></div>
          </div>
          <span            className="text-lg md:text-xl font-bold tracking-tight uppercase text-forest">Sphera</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
               className="text-[10px] xl:text-xs font-bold uppercase tracking-widest opacity-70 hover:opacity-100 transition-all text-forest"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact"            className="px-6 py-2 border text-[10px] font-bold uppercase tracking-widest transition-all border-forest text-forest hover:bg-forest hover:text-white">
            Enquire
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setMobileMenuOpen(true)}>
          <Menu            className="w-6 h-6 md:w-8 md:h-8 text-forest" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-serif text-2xl font-bold">Sphera</span>
              <button onClick={() => setMobileMenuOpen(false)}><X className="w-8 h-8" /></button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif text-forest hover:text-moss transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 bg-forest text-white py-4 rounded-xl text-center font-bold"
              >
                Estimate Impact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center bg-cream overflow-hidden pt-20 md:pt-0">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10 py-12 md:py-0">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-1 md:col-span-12 lg:col-span-7"
        >
          <div className="inline-block px-3 py-1 bg-sage text-forest text-[9px] md:text-[10px] font-bold uppercase tracking-tighter mb-6 md:mb-8 rounded-sm">
            Innovation in Sustainability
          </div>
          <h1 className="heading-display mb-8 md:mb-10 text-forest">
            Building <span className="italic font-serif">Resilience</span>.<br/>
            Strengthening Systems.<br/>
            Delivering <span className="text-teal">Impact</span>.
          </h1>
          <p className="text-base md:text-lg text-earth max-w-lg leading-relaxed mb-10 md:12">
            Science-based consulting for forestry, environment, and climate change. We partner with global leaders to protect high-conservation ecosystems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="btn-primary w-full sm:w-auto">
              Explore Services
            </a>
            <a href="#about" className="btn-outline w-full sm:w-auto">
              Our Mission
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block col-span-5 relative"
        >
          <div className="aspect-[4/5] bg-teal rounded-t-full overflow-hidden shadow-2xl relative">
            <img 
              src={heroImage}
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply" 
              alt="Sphera Resilience" 
            />
            <div className="absolute inset-0 p-12 flex flex-col justify-end text-white">
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-80 mb-2">Featured Insight</span>
              <h3 className="text-2xl font-serif italic mb-4">Scientific Excellence in Action</h3>
              <div className="w-12 h-[1px] bg-white opacity-40"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SectionHeader = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="max-w-3xl mb-16 text-left">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className={`w-12 h-1 mb-6 ${light ? 'bg-sage' : 'bg-moss'}`} />
      <h2 className={`heading-md mb-4 ${light ? 'text-white' : 'text-forest'}`}>{title}</h2>
      {subtitle && <p className={`text-lg italic font-serif ${light ? 'text-white/70' : 'text-earth'}`}>{subtitle}</p>}
    </motion.div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-sage/20 rounded-full blur-3xl" />
            <img 
              src={techImage}
              alt="Sphera Mission" 
              className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3]" 
            />
            <div className="absolute -bottom-6 -right-6 glass !bg-moss p-8 rounded-2xl z-20 text-white shadow-xl max-w-xs">
              <p className="text-sm font-medium opacity-80 mb-2">Our Vision</p>
              <p className="font-serif text-lg leading-snug">To become the leading catalyst for ecosystem resilience through science and innovation.</p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-8">
            <SectionHeader 
              title="Science-Based Resilience" 
              subtitle="Empowering global climate action through precise consulting."
            />
            <p className="text-earth leading-relaxed">
              Sphera Resilience Solutions is a premier consulting firm dedicated to forestry, environmental management, and climate change action. We bridge the gap between scientific complexity and actionable policy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {[
                "Strengthening natural resource governance",
                "Advanced spatial mapping & GIS",
                "Peatland & Mangrove protection",
                "Greenhouse gas inventories & MRV",
                "Capacity building for local communities",
                "Results-based finance advisory"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-forest">
                  <CheckCircle2 className="w-5 h-5 text-moss shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <motion.button 
                whileHover={{ gap: '1.5rem' }}
                className="flex items-center gap-4 text-moss font-bold uppercase tracking-widest text-sm"
              >
                Learn More About Our Mission <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-cream">
      <div className="container mx-auto">
        <SectionHeader 
          title="Professional Services" 
          subtitle="Comprehensive solutions for a sustainable world."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-sage group"
            >
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center text-moss mb-8 group-hover:bg-moss group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-forest">{service.title}</h3>
              <p className="text-earth text-sm leading-relaxed mb-8">{service.description}</p>
              <button className="text-xs font-bold uppercase tracking-widest text-moss flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Impact = () => {
  return (
    <section id="impact" className="py-20 md:py-32 px-6 md:px-12 bg-forest text-cream overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-16 md:mb-32">
          <div className="max-w-2xl">
            <span className="label-caps !text-cream mb-6 block">The Metric of Resilience</span>
            <h2 className="heading-display mb-6 md:mb-8">Measured <span className="italic font-serif text-teal">Impact</span>.</h2>
            <p className="text-cream/60 text-base md:text-lg leading-relaxed">
              Global reach with precise local results. We track transformation through high-fidelity data and peer-reviewed methodologies.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-none lg:flex gap-8 sm:gap-12 lg:gap-16 w-full lg:w-auto mt-8 lg:mt-0">
            {impactStats.map((stat, i) => (
              <div key={i} className="text-left lg:text-right">
                <div className="text-3xl sm:text-4xl md:text-5xl font-light mb-1 md:2">{stat.value}{stat.suffix}</div>
                <div className="label-caps !text-cream opacity-50 text-[8px] sm:text-[10px]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
           <div className="bg-white/5 border border-white/10 p-8 md:p-10 hover:bg-white/10 transition-colors cursor-pointer group">
              <span className="label-caps !text-cream opacity-40 mb-3 md:4 block">01 — Scale</span>
              <h4 className="text-lg md:text-xl font-medium group-hover:italic transition-all">Climate Finance Managed</h4>
              <div className="w-8 h-[1px] bg-teal mt-6"></div>
           </div>
           <div className="bg-white/5 border border-white/10 p-8 md:p-10 hover:bg-white/10 transition-colors cursor-pointer group">
              <span className="label-caps !text-cream opacity-40 mb-3 md:4 block">02 — Fidelity</span>
              <h4 className="text-lg md:text-xl font-medium group-hover:italic transition-all">Spatial Data Accuracy</h4>
              <div className="w-8 h-[1px] bg-teal mt-6"></div>
           </div>
           <div className="bg-white/5 border border-white/10 p-8 md:p-10 hover:bg-white/10 transition-colors cursor-pointer group">
              <span className="label-caps !text-cream opacity-40 mb-3 md:4 block">03 — Strategy</span>
              <h4 className="text-lg md:text-xl font-medium group-hover:italic transition-all">Policy Frameworks</h4>
              <div className="w-8 h-[1px] bg-teal mt-6"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

const Values = () => {
  return (
    <section id="values" className="py-32 px-12 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="label-caps mb-4 block">Our DNA</span>
          <h2 className="text-4xl font-light tracking-tight italic font-serif">Core Foundations</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {coreValues.map((value, i) => (
            <motion.div
              key={i}
              className="flex flex-col gap-6 group"
            >
              <div className="text-teal group-hover:text-forest transition-colors">
                <Leaf className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold uppercase tracking-widest">{value.title}</h4>
              <p className="text-earth text-sm leading-relaxed opacity-70 italic">{value.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-12 bg-cream">
      <div className="container mx-auto">
        <SectionHeader 
          title="Featured In-depth Projects" 
          subtitle="Innovation in action across diverse global ecosystems."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden aspect-[3/4] bg-forest group ${i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
              />
              <div className="absolute inset-x-8 bottom-12 text-cream transition-all duration-500 group-hover:translate-y-[-20px]">
                <span className="label-caps !text-cream mb-4 block opacity-60">Success Story — 0{i+1}</span>
                <h3 className="text-3xl font-serif italic leading-tight mb-8">{project.title}</h3>
                <button className="text-[10px] font-bold uppercase tracking-widest border border-cream/20 px-6 py-3 hover:bg-cream hover:text-forest transition-all opacity-0 group-hover:opacity-100">
                  Read Case Study
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-12 bg-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <div className="lg:col-span-5">
           <span className="label-caps mb-4 block">Get Started</span>
           <h2 className="heading-display mb-8 md:mb-12">Establish <span className="italic font-serif text-teal">Resilience</span>.</h2>
           <div className="space-y-8 md:space-y-12">
             <div className="border-l-2 border-forest/10 pl-6 md:pl-8">
               <span className="label-caps mb-2 block">Direct Access</span>
               <p className="text-base md:text-lg font-medium">contact@spheraresilience.com</p>
             </div>
             <div className="border-l-2 border-forest/10 pl-6 md:pl-8">
               <span className="label-caps mb-2 block">Global Desk</span>
               <p className="text-base md:text-lg font-medium">+1 (800) SPHERA-RES</p>
             </div>
           </div>
           
           <div className="mt-20 flex gap-8">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="opacity-40 hover:opacity-100 hover:text-teal transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
           </div>
        </div>

        <div className="lg:col-span-7 bg-cream p-12 border border-forest/5">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-2 border-b border-forest/10 pb-4">
              <label className="label-caps">Identity</label>
              <input type="text" placeholder="Full Name" className="w-full bg-transparent focus:outline-none text-forest placeholder:opacity-30" />
            </div>
            <div className="space-y-2 border-b border-forest/10 pb-4">
              <label className="label-caps">Organization</label>
              <input type="text" placeholder="Entity Name" className="w-full bg-transparent focus:outline-none text-forest placeholder:opacity-30" />
            </div>
            <div className="col-span-full space-y-2 border-b border-forest/10 pb-4">
              <label className="label-caps">Channel</label>
              <input type="email" placeholder="Email Address" className="w-full bg-transparent focus:outline-none text-forest placeholder:opacity-30" />
            </div>
            <div className="col-span-full space-y-2 border-b border-forest/10 pb-8">
              <label className="label-caps">Subject</label>
              <textarea rows={4} placeholder="How can Sphera deliver impact for you?" className="w-full bg-transparent focus:outline-none text-forest placeholder:opacity-30 resize-none" />
            </div>
            <div className="col-span-full pt-8">
              <button className="btn-primary w-full md:w-auto">Submit Collaboration Inquiry</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-cream py-16 md:py-20 px-6 md:px-12 border-t border-forest/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-12 mb-16 md:mb-20 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-forest rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-cream rounded-full opacity-60"></div>
            </div>
            <span className="text-xl font-bold tracking-tight uppercase">Sphera</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
             <a href="#" className="label-caps hover:opacity-100 transition-opacity">Privacy</a>
             <a href="#" className="label-caps hover:opacity-100 transition-opacity whitespace-nowrap">Scientific Excellence</a>
             <a href="#" className="label-caps hover:opacity-100 transition-opacity">ESG Charter</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] uppercase tracking-widest opacity-40 text-center md:text-left gap-4 md:gap-0">
          <div>© 2024 Sphera Resilience Solutions. All Rights Reserved.</div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 italic font-serif">
            <span>Sustainable Development</span>
            <span className="hidden md:inline">•</span>
            <span>Low Carbon Transformation</span>
            <span className="hidden md:inline">•</span>
            <span>Scientific Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Impact />
      <Values />
      <Projects />
      {/* Testimonials could go here - omitted for brevity but easily added */}
      <Contact />
      <Footer />
    </div>
  );
}
