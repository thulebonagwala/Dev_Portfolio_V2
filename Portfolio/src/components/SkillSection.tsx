
const SkillSection = () => {
    return (
        <section id="skills" className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-4xl font-bold text-slate-900 mb-12 text-center">Skills & Technologies</h3>
                <div className="grid md:grid-cols-4 gap-6">
                    {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'SQL', 'Git', 'AWS', 'Docker', 'Tailwind CSS', 'REST APIs', 'GraphQL'].map((skill) => (
                        <div key={skill} className="p-4 bg-slate-50 rounded-lg text-center hover:bg-slate-100 transition-colors">
                            <p className="font-medium text-slate-800">{skill}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillSection