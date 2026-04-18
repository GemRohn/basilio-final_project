import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
          Contact Me
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-pulse"></span>
        </h2>
        <p className="text-cyan-200/60 mt-4 text-lg">Let's discuss your network security needs</p>
      </div>
      
      <div className="relative bg-slate-800/20 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 md:p-12 shadow-2xl shadow-cyan-500/10 cyber-card overflow-hidden">
        {/* Animated Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 animate-data-stream"></div>
        
        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          {/* Left Column - Contact Info */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                <span className="text-white text-sm">📡</span>
              </span>
              Get In Touch
            </h3>
            
            <p className="text-slate-200 text-lg leading-relaxed mb-8">
              Interested in network security consultation or infrastructure protection? Let's connect.
            </p>
            
            {/* Contact Details with Animation */}
            <div className="space-y-6">
              <div 
                className="flex items-center group p-4 bg-slate-700/20 rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 animate-slide-up"
                style={{ animationDelay: '0.2s' }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <p className="text-cyan-200/60 text-sm mb-0.5">Email</p>
                  <a 
                    href="mailto:gemrohnbasilio@gmail.com" 
                    className="text-white font-medium group-hover:text-cyan-300 transition-colors"
                  >
                    gemrohnbasilio@gmail.com
                  </a>
                </div>
              </div>
              
              <div 
                className="flex items-center group p-4 bg-slate-700/20 rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 animate-slide-up"
                style={{ animationDelay: '0.3s' }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <p className="text-cyan-200/60 text-sm mb-0.5">Phone</p>
                  <a 
                    href="tel:+09108828245" 
                    className="text-white font-medium group-hover:text-cyan-300 transition-colors"
                  >
                    +0910 882 8245
                  </a>
                </div>
              </div>
              
              <div 
                className="flex items-center group p-4 bg-slate-700/20 rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 animate-slide-up"
                style={{ animationDelay: '0.4s' }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <p className="text-cyan-200/60 text-sm mb-0.5">Location</p>
                  <span className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                    Philippines, Baguio City
                  </span>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              {[
                { name: 'LinkedIn', icon: '💼', color: 'from-blue-600 to-blue-700' },
                { name: 'GitHub', icon: '💻', color: 'from-gray-600 to-gray-700' },
                { name: 'Twitter', icon: '🐦', color: 'from-sky-500 to-sky-600' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#"
                  className="relative group overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  <div className="relative px-4 py-2 bg-slate-700/50 text-cyan-200 rounded-lg border border-cyan-500/20 group-hover:border-transparent transition-all flex items-center space-x-2">
                    <span>{social.icon}</span>
                    <span className="text-sm">{social.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Success Message */}
              {submitted && (
                <div className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-500 text-emerald-200 px-4 py-4 rounded-xl animate-scale-rotate">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">✅</span>
                    <div>
                      <p className="font-semibold">Message Sent Successfully!</p>
                      <p className="text-sm text-emerald-300">I'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Name Input */}
              <div className="group">
                <label className="block text-cyan-200/80 text-sm font-medium mb-2">
                  Your Name <span className="text-cyan-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Juan Dela Cruz"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-slate-700/30 border border-cyan-500/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 transition-all"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
                </div>
              </div>
              
              {/* Email Input */}
              <div className="group">
                <label className="block text-cyan-200/80 text-sm font-medium mb-2">
                  Your Email <span className="text-cyan-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-slate-700/30 border border-cyan-500/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 transition-all"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
                </div>
              </div>
              
              {/* Message Input */}
              <div className="group">
                <label className="block text-cyan-200/80 text-sm font-medium mb-2">
                  Your Message <span className="text-cyan-400">*</span>
                </label>
                <div className="relative">
                  <textarea
                    rows="5"
                    placeholder="Tell me about your network security needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-slate-700/30 border border-cyan-500/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 transition-all resize-none"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
                </div>
                {/* Character Count */}
                <div className="text-right mt-1">
                  <span className="text-cyan-400/50 text-xs">
                    {formData.message.length} characters
                  </span>
                </div>
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full py-4 group overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 animate-pulse-glow"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <span className="relative text-white font-semibold flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Secure Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      </div>
    </div>
  );
};

export default Contact;