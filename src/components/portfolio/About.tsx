
const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            About Me
          </h2>
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-2xl shadow-lg">
            <p className="text-lg leading-relaxed text-gray-700">
              Seasoned developer with expertise in <span className="font-semibold text-indigo-600">Android POS systems</span>, 
              <span className="font-semibold text-indigo-600"> payment gateways</span>, 
              <span className="font-semibold text-indigo-600"> merchant/admin dashboards</span>, 
              <span className="font-semibold text-indigo-600"> cooperative banking apps</span>, and 
              <span className="font-semibold text-indigo-600"> BBPS systems</span>. 
              Strong in ReactJS, NodeJS, React Native, and payment technology.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mt-6">
              Currently leading frontend development at <span className="font-semibold text-indigo-600">Jambopay Express Pvt. Ltd. (FidyPay)</span>, 
              creating scalable, secure, and high-performance applications for web and mobile platforms. 
              Passionate about building fintech solutions that make financial services more accessible and secure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
