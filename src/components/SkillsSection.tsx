const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Node.js", level: 85 },
  { name: "Next.js", level: 88 },
  { name: "Python", level: 80 },
  { name: "PostgreSQL", level: 82 },
  { name: "Git & CI/CD", level: 90 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Expertise</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A blend of frontend mastery and backend proficiency, always learning and evolving.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-glass rounded-xl p-5">
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-foreground">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
