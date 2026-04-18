import React, { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      title: "Senior Network Security Engineer",
      company: "CyberDefense Solutions",
      period: "2024 - Present",
      type: "Full-time",
      description: "Leading security operations and penetration testing for enterprise clients.",
      achievements: [
        "Conducted 50+ penetration tests identifying critical vulnerabilities",
        "Implemented zero-trust architecture reducing breach risk by 75%",
        "Led incident response team during major security events",
        "Developed custom security tools in Python and Bash"
      ],
      tools: ["Metasploit", "Burp Suite", "Wireshark", "Nmap", "Python", "Snort"],
      color: "border-green-500"
    },
    {
      title: "Security Operations Center Analyst",
      company: "SecureNet Inc.",
      period: "2022 - 2024",
      type: "Full-time",
      description: "24/7 monitoring and threat analysis for Fortune 500 clients.",
      achievements: [
        "Detected and mitigated 200+ security incidents",
        "Created automated threat detection rules reducing false positives by 40%",
        "Performed forensic analysis on compromised systems",
        "Mentored junior analysts in security best practices"
      ],
      tools: ["Splunk", "ELK Stack", "QRadar", "TCPdump", "Volatility", "Autopsy"],
      color: "border-yellow-500"
    },
    {
      title: "Penetration Tester",
      company: "RedTeam Security",
      period: "2021 - 2022",
      type: "Contract",
      description: "Conducted authorized simulated attacks on client infrastructure.",
      achievements: [
        "Successfully compromised 30+ networks identifying critical paths",
        "Developed custom exploit payloads for specific scenarios",
        "Created detailed remediation reports for clients",
        "Discovered 15+ zero-day vulnerabilities"
      ],
      tools: ["Kali Linux", "Cobalt Strike", "Empire", "Mimikatz", "BloodHound", "Hashcat"],
      color: "border-red-500"
    }
  ];

  return (
    <div className="w-full">
      <div className="bg-black/50 backdrop-blur-sm border border-green-500/30 rounded-lg p-6 md:p-8">
        <div className="flex items-center gap-2 mb-6 border-b border-green-500/20 pb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-2 text-green-400 font-mono text-sm">basilio@experience:~$ ./view_logs</span>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded font-mono text-sm transition-all ${
                activeTab === index
                  ? `bg-green-500/20 text-green-400 border ${exp.color}`
                  : 'text-green-500/50 hover:text-green-400 hover:bg-green-500/10'
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className={`border-l-2 ${experiences[activeTab].color} pl-6 py-2`}>
          <div className="mb-4">
            <h3 className="text-green-400 font-mono text-xl mb-1">{experiences[activeTab].title}</h3>
            <div className="flex flex-wrap gap-4 text-green-500/60 font-mono text-sm">
              <span>{experiences[activeTab].company}</span>
              <span className="text-green-500/30">|</span>
              <span>{experiences[activeTab].period}</span>
              <span className="text-green-500/30">|</span>
              <span className="text-green-400">{experiences[activeTab].type}</span>
            </div>
          </div>

          <p className="text-green-500/70 font-mono text-sm mb-4">
            {experiences[activeTab].description}
          </p>

          <div className="mb-4">
            <p className="text-green-400 font-mono text-xs mb-2">$ cat achievements.log</p>
            <div className="space-y-2">
              {experiences[activeTab].achievements.map((achievement, i) => (
                <p key={i} className="text-green-500/60 font-mono text-sm flex items-start gap-2">
                  <span className="text-green-500">[+]</span>
                  <span>{achievement}</span>
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-green-400 font-mono text-xs mb-2">$ ls tools/</p>
            <div className="flex flex-wrap gap-2">
              {experiences[activeTab].tools.map((tool, i) => (
                <span key={i} className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded text-green-400 font-mono text-xs">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;