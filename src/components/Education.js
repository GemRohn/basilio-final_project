import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Information Technology",
      major: "Major in Network and Security",
      institution: "University of Technology",
      year: "2023 - 2026",
      desc: "Comprehensive program focusing on network infrastructure, cybersecurity principles, ethical hacking, and digital forensics. Coursework includes advanced network security, cryptography, penetration testing, security operations, and risk management. Participated in multiple CTF competitions and security research projects.",
      icon: "🎓",
      color: "from-purple-500 to-pink-500"
    },
    {
      degree: "Intensive Coding Bootcamp",
      major: "Full Stack Development & Security",
      institution: "Tech Academy Philippines",
      year: "6 Months Training (2023)",
      desc: "Rigorous 6-month immersive program covering full-stack web development with emphasis on secure coding practices. Mastered frontend and backend technologies while implementing security best practices throughout the development lifecycle.",
      achievements: [
        "Built 5 full-stack projects with security focus",
        "Learned React, Node.js, Python, and SQL",
        "Implemented OWASP security guidelines",
        "Created penetration testing automation tools",
        "Collaborated on open-source security projects"
      ],
      icon: "💻",
      color: "from-cyan-500 to-blue-500"
    },
    {
      degree: "Nursing Program",
      major: "Healthcare & Patient Care",
      institution: "Medical Arts College",
      year: "2022",
      desc: "Foundational year in nursing education developing critical thinking, patient care skills, and understanding of healthcare systems. This experience cultivated strong attention to detail, empathy, and the ability to remain calm under pressure - skills that translate directly to cybersecurity incident response and client communication.",
      achievements: [
        "Completed Basic Life Support (BLS) Certification",
        "Developed strong documentation practices",
        "Learned crisis management protocols",
        "Cultivated analytical and observational skills"
      ],
      icon: "🏥",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text mb-6">Education & Training</h2>
        <div className="space-y-6">
          {educationData.map((edu, i) => (
            <div key={i} 
              className="border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all hover:scale-[1.02] animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 bg-gradient-to-r ${edu.color} rounded-xl flex items-center justify-center text-2xl shadow-lg animate-pulse-slow`}>
                  {edu.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-purple-300 text-sm">{edu.major}</p>
                    </div>
                    <span className="text-purple-300 text-sm border border-purple-500/30 px-3 py-1 rounded-full">{edu.year}</span>
                  </div>
                  <p className="text-purple-300 mb-2">{edu.institution}</p>
                  <p className="text-purple-200/70 mb-4">{edu.desc}</p>
                  
                  <div className="space-y-1">
                    <p className="text-purple-300 text-xs font-semibold mb-2">Key Achievements:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {edu.achievements.map((achievement, j) => (
                        <p key={j} className="text-purple-200/70 text-sm flex items-start gap-2">
                          <span className="text-purple-400">✓</span>
                          <span>{achievement}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;