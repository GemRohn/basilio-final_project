import React, { useState, useEffect } from 'react';

const AboutMe = () => {
  const [glitchText, setGlitchText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="bg-black/50 backdrop-blur-sm border border-green-500/30 rounded-lg p-6 md:p-8">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-6 border-b border-green-500/20 pb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-2 text-green-400 font-mono text-sm">basilio@profile:~/about</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <div className="font-mono mb-6">
              <p className="text-green-500 mb-2">$ whoami</p>
              <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${glitchText ? 'animate-pulse text-green-300' : 'text-green-400'}`}>
                Basilio
              </h2>
              <p className="text-green-500/60">Network Security Specialist // Ethical Hacker</p>
            </div>

            <div className="space-y-4 font-mono text-sm">
              <div className="border-l-2 border-green-500/50 pl-4">
                <p className="text-green-400 mb-1">$ cat description.txt</p>
                <p className="text-green-500/70">
                  Experienced network security professional specializing in penetration testing,
                  vulnerability assessment, and infrastructure protection. Certified in multiple
                  security frameworks with a passion for ethical hacking and digital defense.
                </p>
              </div>

              <div className="border-l-2 border-green-500/50 pl-4">
                <p className="text-green-400 mb-1">$ ls -la skills/</p>
                <div className="grid grid-cols-2 gap-2 text-green-500/70">
                  <span>▸ Penetration Testing</span>
                  <span>▸ Network Defense</span>
                  <span>▸ Vulnerability Assessment</span>
                  <span>▸ Security Auditing</span>
                  <span>▸ Incident Response</span>
                  <span>▸ Threat Hunting</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - ASCII Art */}
          <div className="font-mono">
            <p className="text-green-400 mb-3">$ neofetch</p>
            <pre className="text-green-500/50 text-xs md:text-sm">
{`    ┌─────────────────────────────────┐
    │  ███████╗ █████╗ ███████╗██╗██╗     │
    │  ██╔════╝██╔══██╗██╔════╝██║██║     │
    │  ███████╗███████║███████╗██║██║     │
    │  ╚════██║██╔══██║╚════██║██║██║     │
    │  ███████║██║  ██║███████║██║███████╗│
    │  ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝╚══════╝│
    └─────────────────────────────────┘`}
            </pre>
            
            <div className="mt-4 space-y-1 text-green-500/60">
              <p><span className="text-green-400">OS:</span> Kali Linux / Parrot OS</p>
              <p><span className="text-green-400">Shell:</span> Zsh 5.9</p>
              <p><span className="text-green-400">Location:</span> Philippines, Baguio City</p>
              <p><span className="text-green-400">Status:</span> <span className="text-green-400 animate-pulse">●</span> Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;