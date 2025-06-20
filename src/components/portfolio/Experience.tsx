
const Experience = () => {
  const experiences = [
    {
      title: "Frontend Team Lead",
      company: "Jambopay Express Pvt. Ltd. (FidyPay)",
      period: "March 2023 – April 2025",
      description:[
      "Leading an 8-member frontend team, ensuring delivery of scalable and secure applications.",
      "Handling daily scrum calls, client communication, and technical documentation.",
      "Participating in audits and ensuring security best practices across applications.",
      "Mentoring team members on best coding practices and architecture decisions.",
      "Developing and maintaining React dashboards and integrating payment gateways."
    ],
      current: true
    },
    {
      title: "Sr. Subject Matter Expert",
      company: "Jambopay Express Pvt. Ltd. (FidyPay)",
      period: "March 2022 – March 2023",
      description: "Merchant and Admin dashboards with a focus on UI/UX and performance optimization. Integrated APIs and contributed to seamless integration of the Bharat Connect mobile app.",
      current: false
    },
    {
      title: "Subject Matter Expert",
      company: "Jambopay Express Pvt. Ltd. (FidyPay)",
      period: "March 2019 – March 2022",
      description: "Worked on multiple ULB (Urban Local Body) projects, contributing to government tax collection initiatives. Collaborated closely with banks and government agencies to support digital payment and tax solutions.",
      current: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Professional Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-600"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 ${exp.current ? 'bg-indigo-600 border-indigo-200' : 'bg-white border-indigo-300'} shadow-lg`}></div>
                
                {/* Content */}
                <div className="ml-20 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${exp.current ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-indigo-600 mb-4">{exp.company}</h4>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
