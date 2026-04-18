import React, { useState, useEffect, useRef } from 'react';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [pageTransition, setPageTransition] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [catFrame, setCatFrame] = useState(0);
  const [dogFrame, setDogFrame] = useState(0);
  const [animateBars, setAnimateBars] = useState(false);
  const [glitchText, setGlitchText] = useState(false);
  const [keyPressed, setKeyPressed] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [mouseInView, setMouseInView] = useState(true);
  const [lightning, setLightning] = useState(false);
  const mainRef = useRef(null);

  const fullText = "Network Security Specialist & Ethical Hacker";
  const sections = ['home', 'about', 'education', 'experience', 'skills', 'contact'];

  // Random lightning effect
  useEffect(() => {
    const lightningInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setLightning(true);
        setTimeout(() => setLightning(false), 100 + Math.random() * 200);
      }
    }, 2000);
    return () => clearInterval(lightningInterval);
  }, []);

  // Hide scroll hint after first scroll
  useEffect(() => {
    const handleFirstScroll = () => setShowScrollHint(false);
    window.addEventListener('scroll', handleFirstScroll, { once: true });
    setTimeout(() => setShowScrollHint(false), 5000);
    return () => window.removeEventListener('scroll', handleFirstScroll);
  }, []);

  // Scroll Progress
  useEffect(() => {
    const handleScrollProgress = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((winScroll / height) * 100);
    };
    window.addEventListener('scroll', handleScrollProgress);
    return () => window.removeEventListener('scroll', handleScrollProgress);
  }, []);

  // Mouse in/out of window
  useEffect(() => {
    const handleMouseLeave = () => setMouseInView(false);
    const handleMouseEnter = () => setMouseInView(true);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Keyboard Navigation (simplified - no help legend)
  useEffect(() => {
    const handleKeyDown = (e) => {
      const currentIndex = sections.indexOf(activeSection);
      
      setKeyPressed(e.key);
      setTimeout(() => setKeyPressed(''), 200);
      
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentIndex > 0) {
          handleSectionChange(sections[currentIndex - 1]);
        }
      }
      
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        if (currentIndex < sections.length - 1) {
          handleSectionChange(sections[currentIndex + 1]);
        }
      }
      
      if (e.key === 'Home') {
        e.preventDefault();
        handleSectionChange('home');
      }
      
      if (e.key === 'End') {
        e.preventDefault();
        handleSectionChange('contact');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
    
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 80);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(typing);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const catInterval = setInterval(() => {
      setCatFrame((prev) => (prev + 1) % 4);
    }, 400);
    
    const dogInterval = setInterval(() => {
      setDogFrame((prev) => (prev + 1) % 4);
    }, 500);
    
    const glitchInterval = setInterval(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 200);
    }, 3000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(catInterval);
      clearInterval(dogInterval);
      clearInterval(glitchInterval);
    };
  }, []);

  useEffect(() => {
    if (activeSection === 'skills' || activeSection === 'experience') {
      setTimeout(() => setAnimateBars(true), 100);
    } else {
      setAnimateBars(false);
    }
  }, [activeSection]);

  const handleSectionChange = (section) => {
    setPageTransition(true);
    setTimeout(() => {
      setActiveSection(section);
      setPageTransition(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'education', label: 'Education', icon: '📚' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'contact', label: 'Contact', icon: '📡' }
  ];

  const catFrames = [
    `    /\\_____/\\
   /  ◕   ◕  \\
  ( ==  ^  == )
   )         (
  (  Meow!   )
 ( (  )   (  ) )
(__(__)___(__)__)`,
    `    /\\_____/\\
   /  ◕   ◕  \\
  ( ==  ⌒  == )
   )         (
  (  Purr~   )
 ( (  )   (  ) )
(__(__)___(__)__)`,
    `    /\\_____/\\
   /  ◔   ◔  \\
  ( ==  ▽  == )
   )         (
  (  HACK!   )
 ( (  )   (  ) )
(__(__)___(__)__)`,
    `    /\\_____/\\
   /  ◕   -  \\
  ( ==  ^  == )
   )         (
  (  Pwn!    )
 ( (  )   (  ) )
(__(__)___(__)__)`
  ];

  const dogFrames = [
    `      / \\__
     (    @\\___
     /         O
    /   (_____/
   /_____/   U
    |       |`,
    `      / \\__
     (    @\\___
     /         O
    /   (_____/
   /_____/   U
    |   ^   |`,
    `      / \\__
     (    @\\___
     /         O
    /   (_____/
   /_____/   U
    |  w00f |`,
    `      / \\__
     (    -\\___
     /         O
    /   (_____/
   /_____/   U
    |  bark |`
  ];

  const skills = ['Penetration Testing', 'Network Security', 'Ethical Hacking', 'Vulnerability Assessment', 'Incident Response', 'Security Auditing'];

  const educationData = [
    {
      degree: "Bachelor of Science in Information Technology",
      major: "Major in Network and Security",
      institution: "University of Technology",
      year: "2023 - 2026",
      desc: "Comprehensive program focusing on network infrastructure, cybersecurity principles, ethical hacking, and digital forensics.",
      achievements: [],
      icon: "🎓",
      color: "from-purple-500 to-pink-500"
    },
    {
      degree: "Intensive Coding Bootcamp",
      major: "Full Stack Development & Security",
      institution: "Tech Academy Philippines",
      year: "6 Months Training (2023)",
      desc: "Rigorous 6-month immersive program covering full-stack web development with emphasis on secure coding practices.",
      achievements: ["Built 5 full-stack projects", "React, Node.js, Python, SQL", "OWASP security guidelines", "Penetration testing tools"],
      icon: "💻",
      color: "from-cyan-500 to-blue-500"
    },
    {
      degree: "Nursing Program",
      major: "Healthcare & Patient Care",
      institution: "Medical Arts College",
      year: "2022",
      desc: "Foundational year in nursing developing critical thinking and patient care skills.",
      achievements: ["BLS Certification", "Documentation practices", "Crisis management", "Analytical skills"],
      icon: "🏥",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const experienceData = [
    { title: "Network Security Engineer", company: "CyberDefense Solutions", period: "2024-Present", desc: "Leading security operations and penetration testing.", level: 95, tools: ["Metasploit", "Wireshark", "Nmap", "Python"], color: "from-purple-500 to-pink-500" },
    { title: "SOC Analyst", company: "SecureNet Inc.", period: "2022-2024", desc: "24/7 monitoring and threat analysis.", level: 85, tools: ["Splunk", "ELK", "QRadar", "TCPdump"], color: "from-pink-500 to-orange-500" },
    { title: "Penetration Tester", company: "RedTeam Security", period: "2021-2022", desc: "Conducted authorized simulated attacks.", level: 75, tools: ["Kali Linux", "Burp Suite", "Hashcat", "BloodHound"], color: "from-orange-500 to-red-500" }
  ];

  const skillCategories = [
    { category: "Network Security", icon: "🛡️", color: "from-purple-500 to-pink-500", skills: [{ name: "Firewall Configuration", level: 92 }, { name: "IDS/IPS Systems", level: 88 }, { name: "VPN Technologies", level: 90 }, { name: "Zero Trust", level: 85 }] },
    { category: "Security Tools", icon: "🔧", color: "from-cyan-500 to-blue-500", skills: [{ name: "Wireshark", level: 94 }, { name: "Nmap", level: 90 }, { name: "Metasploit", level: 85 }, { name: "Burp Suite", level: 82 }] },
    { category: "Programming", icon: "💻", color: "from-blue-500 to-indigo-500", skills: [{ name: "Python", level: 88 }, { name: "JavaScript", level: 85 }, { name: "Bash/Shell", level: 85 }, { name: "SQL", level: 82 }] },
    { category: "Frameworks", icon: "📋", color: "from-yellow-500 to-amber-500", skills: [{ name: "NIST", level: 90 }, { name: "ISO 27001", level: 85 }, { name: "MITRE ATT&CK", level: 88 }, { name: "OWASP", level: 85 }] }
  ];

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'gemrohnbasilio@gmail.com' },
    { icon: '📱', label: 'Phone', value: '+0910 882 8245' },
    { icon: '📍', label: 'Location', value: 'Philippines, Baguio City' }
  ];

  // Falling items for matrix effect
  const fallingItems = ['🔒', '🔑', '🛡️', '💻', '🌐', '⚡', '🔐', '📡', '🖥️', '⌨️'];

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700 z-50 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <h1 className="relative text-4xl sm:text-6xl md:text-8xl font-bold mb-4 animate-glitch">
              <span className="bg-gradient-to-r from-purple-300 via-pink-200 to-orange-200 bg-clip-text text-transparent">BASILIO</span>
            </h1>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }}></div>
            ))}
          </div>
          <div className="mt-6 w-48 sm:w-64 h-1 bg-slate-700/50 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-loading-bar"></div>
          </div>
          <p className="text-purple-200 mt-4 font-mono text-xs sm:text-sm animate-pulse">Establishing secure connection...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Lightning Effect Overlay */}
      {lightning && (
        <div className="fixed inset-0 bg-white/30 z-40 pointer-events-none animate-lightning"></div>
      )}

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-800 z-50">
        <div className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-300 lightning-glow" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      {/* Falling Items Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <div key={i} 
            className="absolute text-2xl sm:text-3xl opacity-30 animate-fall"
            style={{ 
              left: `${Math.random() * 100}%`, 
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 12}s`
            }}>
            {fallingItems[Math.floor(Math.random() * fallingItems.length)]}
          </div>
        ))}
      </div>

      {/* Animated Background with Parallax */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Mouse follower - Desktop only */}
      {mouseInView && (
        <div className="hidden md:block fixed w-6 h-6 sm:w-8 sm:h-8 pointer-events-none z-50 mix-blend-screen transition-all duration-100"
          style={{ left: mousePos.x - 12, top: mousePos.y - 12, background: 'radial-gradient(circle, rgba(236,72,153,0.4) 0%, transparent 70%)' }} />
      )}

      {/* Page Transition Overlay */}
      {pageTransition && <div className="fixed inset-0 z-40 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 animate-page-transition"></div>}

      {/* Keyboard Navigation Hint */}
      {keyPressed && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-purple-500/90 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-mono text-sm sm:text-base shadow-2xl animate-scale-in">
          <span className="inline-block animate-pulse">
            {keyPressed === 'ArrowUp' && '⬆️ Previous'}
            {keyPressed === 'ArrowDown' && '⬇️ Next'}
            {keyPressed === 'ArrowLeft' && '⬅️ Previous'}
            {keyPressed === 'ArrowRight' && '➡️ Next'}
            {keyPressed === 'Home' && '🏠 Home'}
            {keyPressed === 'End' && '📡 Contact'}
          </span>
        </div>
      )}

      {/* Scroll Hint */}
      {showScrollHint && activeSection === 'home' && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40 animate-bounce-slow">
          <div className="flex flex-col items-center gap-2">
            <span className="text-purple-300/70 font-mono text-xs sm:text-sm">Scroll to explore</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
              <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-purple-400/70 rounded-full mt-1 animate-scroll-wheel"></div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${scrolled ? 'bg-slate-900/90 backdrop-blur-xl shadow-2xl border-b border-purple-500/30' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <button onClick={() => handleSectionChange('home')} className="flex items-center gap-2 sm:gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 rounded-lg flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:rotate-12 transition-all lightning-border">
                  <span className="text-white font-bold text-lg sm:text-xl">🐱</span>
                </div>
              </div>
              <span className="text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 bg-clip-text font-bold text-base sm:text-lg hidden xs:block">Basilio</span>
            </button>

            <div className="flex items-center gap-0.5 sm:gap-1 flex-wrap justify-end">
              {navItems.map((item) => (
                <button key={item.id} onClick={() => handleSectionChange(item.id)}
                  className={`relative px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center gap-0.5 sm:gap-1 md:gap-2 overflow-hidden group ${activeSection === item.id ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30 scale-105 lightning-border' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}>
                  <span className="group-hover:scale-125 group-hover:rotate-12 transition-all text-sm sm:text-base">{item.icon}</span>
                  <span className="hidden lg:inline">{item.label}</span>
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main ref={mainRef} className={`relative z-10 pt-14 sm:pt-16 md:pt-20 transition-all duration-300 ${pageTransition ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        
        {/* HOME PAGE */}
        {activeSection === 'home' && (
          <div className="min-h-screen flex items-center justify-center px-3 sm:px-4 py-8 sm:py-12">
            <div className="max-w-6xl w-full">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-block mb-4 sm:mb-8 animate-float">
                  <pre className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text font-mono text-[8px] sm:text-xs md:text-sm leading-tight hover:scale-105 transition-transform">{catFrames[catFrame]}</pre>
                </div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-3 sm:mb-4 animate-glitch">
                  <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 bg-clip-text text-transparent animate-gradient">Basilio</span>
                </h1>
                <div className="h-8 sm:h-12 mb-4 sm:mb-6">
                  <p className="text-base sm:text-xl md:text-2xl text-purple-200 font-mono inline-block border-r-2 border-purple-400 animate-pulse">&gt; {typedText}</p>
                </div>
                <p className="text-purple-300/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 px-2 animate-fade-up">Securing digital frontiers with advanced threat protection.</p>
                <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16">
                  <button onClick={() => handleSectionChange('about')} className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-white text-sm sm:text-base hover:shadow-2xl transition-all overflow-hidden relative lightning-border">
                    <span className="relative z-10 group-hover:scale-105 inline-block transition-transform">Explore Portfolio →</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 translate-y-full group-hover:translate-y-0 transition-transform"></span>
                  </button>
                  <button onClick={() => handleSectionChange('contact')} className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-medium text-sm sm:text-base border border-white/20 hover:bg-white/20 hover:border-purple-400/50 transition-all overflow-hidden relative">
                    <span className="relative z-10">Contact Me</span>
                    <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform"></span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 max-w-4xl mx-auto">
                {skills.map((skill, i) => (
                  <div key={i} 
                    className="p-3 sm:p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-center hover:border-purple-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 animate-fade-up lightning-border"
                    style={{ animationDelay: `${i * 0.1}s` }}>
                    <span className="text-purple-200 font-mono text-xs sm:text-sm">{skill}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mt-12 sm:mt-16">
                {[{ value: '5+', label: 'Years', icon: '💻', delay: '0s' }, { value: '50+', label: 'Projects', icon: '🔒', delay: '0.2s' }, { value: '8+', label: 'Certs', icon: '📜', delay: '0.4s' }].map((s, i) => (
                  <div key={i} className="text-center group hover:scale-110 transition-transform animate-fade-up" style={{ animationDelay: s.delay }}>
                    <div className="text-xl sm:text-2xl mb-2 group-hover:animate-bounce">{s.icon}</div>
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.value}</div>
                    <div className="text-purple-300/60 text-xs sm:text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ABOUT SECTION */}
        {activeSection === 'about' && (
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-12">
            <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-4 sm:p-6 md:p-10 hover:shadow-2xl hover:shadow-purple-500/10 transition-all animate-scale-in lightning-border">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text mb-4 sm:mb-6 relative inline-block">
                About Me
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse lightning-glow"></span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                <div className="animate-slide-left">
                  <pre className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text font-mono text-[8px] sm:text-xs md:text-sm leading-tight mb-4 hover:scale-105 transition-transform">{catFrames[catFrame]}</pre>
                  <h3 className={`text-xl sm:text-2xl font-bold mb-3 transition-colors duration-300 ${glitchText ? 'text-pink-300 animate-pulse' : 'text-white'}`}>Basilio</h3>
                  <p className="text-purple-200/80 text-sm sm:text-base mb-4">Network Security Specialist with expertise in penetration testing, vulnerability assessment, and infrastructure protection.</p>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-4 sm:mt-6">
                    {['Penetration Testing', 'Network Defense', 'Vulnerability Assessment', 'Security Auditing', 'Incident Response', 'Threat Hunting'].map((s, i) => (
                      <span key={i} className="text-purple-300 text-xs sm:text-sm hover:text-purple-100 hover:translate-x-1 transition-all cursor-default">▸ {s}</span>
                    ))}
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4 animate-slide-right">
                  {contactInfo.map((item, i) => (
                    <div key={i} className="border border-purple-500/30 rounded-xl p-3 sm:p-4 hover:border-purple-400 hover:scale-105 hover:shadow-lg transition-all lightning-border">
                      <p className="text-purple-300 text-xs sm:text-sm mb-1 sm:mb-2">{item.icon} {item.label}</p>
                      <p className="text-white text-sm sm:text-base break-all">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* EDUCATION SECTION */}
        {activeSection === 'education' && (
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-12">
            <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-4 sm:p-6 md:p-10 lightning-border">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text mb-4 sm:mb-6 relative inline-block">
                Education & Training
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse lightning-glow"></span>
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {educationData.map((edu, i) => (
                  <div key={i} 
                    className="border border-purple-500/20 rounded-xl p-4 sm:p-6 hover:border-purple-500/40 hover:shadow-xl transition-all animate-fade-up lightning-border"
                    style={{ animationDelay: `${i * 0.15}s` }}>
                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${edu.color} rounded-xl flex items-center justify-center text-xl sm:text-2xl shrink-0 animate-pulse-slow lightning-glow`}>{edu.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap justify-between items-start mb-2 sm:mb-3 gap-2">
                          <div><h3 className="text-base sm:text-lg md:text-xl font-bold text-white">{edu.degree}</h3><p className="text-purple-300 text-xs sm:text-sm">{edu.major}</p></div>
                          <span className="text-purple-300 text-xs sm:text-sm border border-purple-500/30 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">{edu.year}</span>
                        </div>
                        <p className="text-purple-300 text-xs sm:text-sm mb-2">{edu.institution}</p>
                        <p className="text-purple-200/70 text-xs sm:text-sm mb-3 sm:mb-4">{edu.desc}</p>
                        {edu.achievements.length > 0 && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                            {edu.achievements.map((ach, j) => (
                              <p key={j} className="text-purple-200/70 text-xs sm:text-sm hover:text-purple-100 transition-colors"><span className="text-purple-400">✓</span> {ach}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* EXPERIENCE SECTION */}
        {activeSection === 'experience' && (
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-12">
            <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-4 sm:p-6 md:p-10 lightning-border">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text mb-4 sm:mb-6 relative inline-block">
                Experience
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse lightning-glow"></span>
              </h2>
              <div className="space-y-6 sm:space-y-8">
                {experienceData.map((exp, i) => (
                  <div key={i} className="relative group animate-fade-up" style={{ animationDelay: `${i * 0.15}s` }}>
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full group-hover:w-1.5 transition-all lightning-glow"></div>
                    <div className="pl-4 sm:pl-6 md:pl-8">
                      <div className="flex flex-wrap justify-between items-start mb-2 sm:mb-3 gap-2">
                        <div><h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all">{exp.title}</h3><p className="text-purple-300 text-xs sm:text-sm">{exp.company}</p></div>
                        <span className="text-purple-300 text-xs sm:text-sm border border-purple-500/30 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">{exp.period}</span>
                      </div>
                      <p className="text-purple-200/70 text-xs sm:text-sm mb-3 sm:mb-4">{exp.desc}</p>
                      <div className="mb-3 sm:mb-4">
                        <div className="flex justify-between items-center mb-1"><span className="text-purple-300 text-xs">Expertise</span><span className="text-purple-300 text-xs">{exp.level}%</span></div>
                        <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r ${exp.color} rounded-full transition-all duration-1000 group-hover:shadow-lg lightning-glow`} style={{ width: animateBars ? `${exp.level}%` : '0%' }}></div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {exp.tools.map((tool, j) => (
                          <span key={j} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-200 text-[10px] sm:text-xs hover:scale-110 hover:bg-purple-500/30 transition-all cursor-default">{tool}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SKILLS SECTION */}
        {activeSection === 'skills' && (
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-12">
            <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-4 sm:p-6 md:p-10 lightning-border">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text mb-4 sm:mb-6 relative inline-block">
                Skills & Expertise
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse lightning-glow"></span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                {skillCategories.map((cat, i) => (
                  <div key={i} 
                    className="border border-purple-500/20 rounded-xl p-4 sm:p-6 hover:border-purple-400 hover:shadow-xl transition-all animate-fade-up lightning-border"
                    style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${cat.color} rounded-lg flex items-center justify-center animate-pulse-slow lightning-glow`}><span className="text-base sm:text-xl">{cat.icon}</span></div>
                      <h3 className="text-base sm:text-lg font-bold text-white">{cat.category}</h3>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      {cat.skills.map((skill, j) => (
                        <div key={j} className="group">
                          <div className="flex justify-between items-center mb-1"><span className="text-purple-200 text-xs sm:text-sm group-hover:text-purple-100 transition-colors">{skill.name}</span><span className="text-purple-300 text-xs">{skill.level}%</span></div>
                          <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                            <div className={`h-full bg-gradient-to-r ${cat.color} rounded-full transition-all duration-1000 group-hover:shadow-lg lightning-glow`} style={{ width: animateBars ? `${skill.level}%` : '0%' }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CONTACT SECTION - WITH DOG */}
        {activeSection === 'contact' && (
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-12">
            <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-4 sm:p-6 md:p-10 animate-scale-in lightning-border">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text mb-4 sm:mb-6 relative inline-block">
                Contact Me
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse lightning-glow"></span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                <div className="animate-slide-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Get In Touch</h3>
                  <p className="text-purple-200/80 text-sm sm:text-base mb-4 sm:mb-6">Interested in network security consultation? Let's connect.</p>
                  <div className="space-y-3 sm:space-y-4">
                    {contactInfo.map((item, i) => (
                      <div key={i} className="border border-purple-500/30 rounded-xl p-3 sm:p-4 hover:border-purple-400 hover:scale-105 hover:shadow-lg transition-all lightning-border">
                        <p className="text-purple-300 text-xs sm:text-sm mb-1">{item.icon} {item.label}</p>
                        <p className="text-white text-sm sm:text-base break-all">{item.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-4 sm:mt-6">
                    {['LinkedIn', 'GitHub', 'Twitter'].map((s, i) => (
                      <span key={i} className="text-purple-300 hover:text-purple-100 cursor-pointer text-sm sm:text-base hover:scale-110 transition-all">{s}</span>
                    ))}
                  </div>
                  
                  {/* Animated Dog */}
                  <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                    <p className="text-purple-300 text-xs mb-2">🐕 Security Dog on Duty</p>
                    <pre className="text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text font-mono text-[8px] sm:text-[10px] leading-tight">
                      {dogFrames[dogFrame]}
                    </pre>
                    <p className="text-purple-300/60 text-[10px] mt-2">*woof* Network is secure!</p>
                  </div>
                </div>
                <div className="animate-slide-right">
                  <form className="space-y-3 sm:space-y-4" onSubmit={(e) => { e.preventDefault(); alert('🚀 Message sent! I\'ll get back to you soon.'); }}>
                    <input type="text" placeholder="Your Name" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-purple-500/30 rounded-xl text-white text-sm sm:text-base placeholder-purple-300/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 transition-all lightning-border" />
                    <input type="email" placeholder="Your Email" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-purple-500/30 rounded-xl text-white text-sm sm:text-base placeholder-purple-300/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 transition-all lightning-border" />
                    <textarea rows="4" placeholder="Your Message" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-purple-500/30 rounded-xl text-white text-sm sm:text-base placeholder-purple-300/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 transition-all resize-none lightning-border"></textarea>
                    <button type="submit" className="group w-full py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold text-sm sm:text-base hover:shadow-2xl transition-all overflow-hidden relative lightning-border">
                      <span className="relative z-10 group-hover:scale-105 inline-block transition-transform">Send Message →</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 translate-y-full group-hover:translate-y-0 transition-transform"></span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-xl border-t border-purple-500/30 px-3 sm:px-4 py-1 sm:py-1.5 z-30">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] sm:text-xs font-mono">
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            <span className="text-purple-300">{activeSection.toUpperCase()}</span>
            <span className="hidden sm:inline text-purple-400/50">|</span>
            <span className="hidden sm:inline text-purple-400/50">←→ to navigate</span>
          </div>
          <span className="text-purple-300">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>
    </div>
  );
}

export default App;