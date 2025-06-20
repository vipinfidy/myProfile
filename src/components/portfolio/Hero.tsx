
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Hero = ({ onViewProjects }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-600 via-blue-700 to-purple-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/30 shadow-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src="https://i.postimg.cc/wM6fwYfq/profile.jpg" 
                  alt="Professional Profile" 
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Vipin Pathak
            </h1>
            <h2 className="text-2xl lg:text-3xl mb-8 text-blue-100 font-medium leading-relaxed">
              Senior Frontend / Fullstack Developer
            </h2>
            <p className="text-xl lg:text-2xl mb-8 text-blue-200 font-light">
              5+ years of experience in FinTech
            </p>
            <p className="text-lg mb-12 text-blue-100 max-w-2xl">
            Web & Mobile Developer | Expertise in FinTech, POS Systems & Banking Applications
            </p>

            {/* Quick Contact */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a href="mailto:vipinpathak908@gmail.com" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20 transition-all">
                <Mail size={18} />
                <span>Email</span>
              </a>
              <a href="tel:+919039620090" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20 transition-all">
                <Phone size={18} />
                <span>Call</span>
              </a>
              <a href="https://www.linkedin.com/in/vipin-pathak-aa4375166/" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20 transition-all">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/vipinfidy" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20 transition-all">
                <Github size={18} />
                <span>GitHub</span>
              </a>
            </div>

            <button onClick={onViewProjects} className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all shadow-lg">
              View My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
