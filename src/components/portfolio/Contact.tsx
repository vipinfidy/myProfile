
import { Mail, Phone, Linkedin, Github, Home } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vipinpathak908@gmail.com",
      link: "mailto:vipinpathak908@gmail.com",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Phone,
      label: "Primary",
      value: "+91-9039620090",
      link: "tel:+919039620090",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Phone,
      label: "Secondary",
      value: "+91-6260171775",
      link: "tel:+916260171775",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Vipin Pathak",
      link: "https://www.linkedin.com/in/vipin-pathak-aa4375166/",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "vipinfidy",
      link: "https://github.com/vipinfidy",
      color: "from-gray-600 to-gray-800"
    },
    {
      icon: Home,
      label: "Address",
      value: "Indore, Madhya Pradesh, India",
      link: "https://github.com/vipinfidy",
      color: "from-red-600 to-orange-800"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 via-blue-700 to-purple-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Get In Touch
        </h2>
        <p className="text-xl text-center mb-12 text-blue-100 max-w-2xl mx-auto">
          Ready to collaborate on your next FinTech project? Let's build something amazing together.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <a 
                key={index}
                href={contact.link}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105 border border-white/20"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${contact.color} flex items-center justify-center mb-4 mx-auto`}>
                  <contact.icon size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-center mb-2">{contact.label}</h3>
                <p className="text-blue-100 text-center text-sm">{contact.value}</p>
              </a>
            ))}
          </div>

          <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Based in Indore, India</h3>
            <p className="text-blue-100 mb-6">
              Available for remote work and collaboration on innovative FinTech solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="mailto:vipinpathak908@gmail.com" 
                className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105"
              >
                Send Email
              </a>
              <a 
                href="https://www.linkedin.com/in/vipin-pathak-aa4375166/" 
                className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all transform hover:scale-105"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
