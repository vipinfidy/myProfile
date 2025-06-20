
const Education = () => {
  const certifications = [
    "PCI DSS Compliance Training",
    "VAPT (Vulnerability Assessment & Penetration Testing) Certified",
    "TechAudit Participation & Security Best Practices"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Education & Compliance Involvement
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-indigo-600">Education</h3>
            <div className="space-y-2">
              <h4 className="text-xl font-semibold text-gray-800">Bachelor of Engineering</h4>
              <p className="text-lg text-gray-600">Computer Science</p>
              <p className="text-gray-500">2014 – 2018</p>
              <p className="text-gray-500">RGPV University, Bhopal</p>
            </div>
          </div>

          {/* Involvement */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Involvement</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
