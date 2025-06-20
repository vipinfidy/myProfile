
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["ReactJS", "Angular", "React Native", "JavaScript", "TypeScript", "HTML", "CSS"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Backend",
      skills: ["NodeJS", "ExpressJS", "REST APIs"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Database",
      skills: ["MongoDB"],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "DevOps / Cloud",
      skills: ["AWS", "Docker"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Swagger", "Postman", "Unit Testing"],
      color: "from-gray-600 to-gray-800"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${category.color} hover:scale-105 transition-transform cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
