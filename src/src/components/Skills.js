import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Network Security",
      icon: "🛡️",
      color: "from-cyan-500 to-blue-600",
      skills: [
        { name: "Firewall Configuration", level: 90 },
        { name: "IDS/IPS Systems", level: 85 },
        { name: "VPN Technologies", level: 88 },
        { name: "Zero Trust Architecture", level: 82 },
        { name: "Network Segmentation", level: 87 },
        { name: "Access Control Lists", level: 90 }
      ]
    },
    {
      category: "Security Tools",
      icon: "🔧",
      color: "from-emerald-500 to-teal-600",
      skills: [
        { name: "Wireshark", level: 92 },
        { name: "Nmap", level: 88 },
        { name: "Metasploit", level: 80 },
        { name: "Burp Suite", level: 78 },
        { name: "Snort", level: 85 },
        { name: "Nessus", level: 84 },
        { name: "Splunk", level: 82 },
        { name: "ELK Stack", level: 75 }
      ]
    },
    {
      category: "Networking Protocols",
      icon: "🌐",
      color: "from-blue-500 to-indigo-600",
      skills: [
        { name: "TCP/IP", level: 95 },
        { name: "DNS", level: 90 },
        { name: "DHCP", level: 88 },
        { name: "BGP", level: 75 },
        { name: "OSPF", level: 78 },
        { name: "VLAN", level: 92 },
        { name: "IPsec", level: 85 },
        { name: "SSL/TLS", level: 88 }
      ]
    },
    {
      category: "Infrastructure",
      icon: "🏗️",
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "Cisco IOS", level: 88 },
        { name: "Juniper", level: 75 },
        { name: "Palo Alto", level: 85 },
        { name: "pfSense", level: 82 },
        { name: "Linux Servers", level: 90 },
        { name: "Windows Server", level: 85 },
        { name: "Virtualization", level: 80 }
      ]
    },
    {
      category: "Security Frameworks",
      icon: "📋",
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "NIST", level: 88 },
        { name: "ISO 27001", level: 85 },
        { name: "PCI DSS", level: 82 },
        { name: "HIPAA", level: 78 },
        { name: "GDPR", level: 80 },
        { name: "SOC 2", level: 75 },
        { name: "MITRE ATT&CK", level: 85 }
      ]
    },
    {
      category: "Certifications",
      icon: "📜",
      color: "from-yellow-500 to-amber-600",
      skills: [
        { name: "CISSP", level: 100 },
        { name: "CEH", level: 100 },
        { name: "Security+", level: 100 },
        { name: "Network+", level: 100 },
        { name: "CCNA Security", level: 100 },
        { name: "GSEC", level: 100 }
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
          Technical Skills
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></span>
        </h2>
        <p className="text-cyan-200/60 mt-4 text-lg">Network security and infrastructure expertise</p>
      </div>
      
      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 shadow-xl hover:shadow-cyan-500/10 hover:scale-[1.02] transition-all duration-300"
          >
            {/* Category Header */}
            <div className="flex items-center mb-5">
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-3 shadow-lg`}>
                <span className="text-2xl">{category.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-white">{category.category}</h3>
            </div>
            
            {/* Skills with Progress Bars */}
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-200 text-sm">{skill.name}</span>
                    <span className="text-cyan-300 text-xs">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 animate-pulse`}
                      style={{ 
                        width: `${skill.level}%`,
                        animation: `pulse 2s ease-in-out infinite`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Additional Skills Summary */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Threat Detection', value: 'Advanced' },
          { label: 'Incident Response', value: 'Expert' },
          { label: 'Risk Assessment', value: 'Advanced' },
          { label: 'Security Auditing', value: 'Expert' }
        ].map((item, index) => (
          <div 
            key={index}
            className="bg-slate-800/20 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4 text-center hover:border-cyan-500/40 transition-all duration-300"
          >
            <p className="text-cyan-200/60 text-xs mb-1">{item.label}</p>
            <p className="text-white font-semibold">{item.value}</p>
          </div>
        ))}
      </div>
      
      {/* Tools & Technologies Tags */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-white mb-4 text-center">Tools & Technologies</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            'Wireshark', 'Nmap', 'Metasploit', 'Burp Suite', 'Snort', 
            'Nessus', 'Splunk', 'ELK Stack', 'Cisco ASA', 'Palo Alto',
            'pfSense', 'Kali Linux', 'Parrot OS', 'Active Directory', 'VMware'
          ].map((tool, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-slate-700/40 border border-cyan-500/20 rounded-lg text-slate-200 text-sm hover:bg-slate-600/40 hover:border-cyan-500/40 hover:scale-105 transition-all duration-300 cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;