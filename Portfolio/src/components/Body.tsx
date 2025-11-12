import { Code2, Palette, Rocket } from 'lucide-react';

const Body = () => {
    return (
        <section id="about" className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-4xl font-bold text-slate-900 mb-12 text-center">About Me</h3>
                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                    <div>
                        <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                            I'm a passionate Software Engineer with a deep love for creating exceptional digital experiences that make a real impact. With a strong background in full-stack development and problem-solving, I’ve worked on projects that turn complex ideas into practical, reliable solutions — from fintech platforms to technical system designs.
                        </p>
                        <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                            My journey in tech began with curiosity — a desire to understand how things work. That curiosity grew into a commitment to building solutions that are not only efficient and scalable but also intuitive and user-focused. I take pride in writing clean, thoughtful code that contributes to a seamless experience for both businesses and their customers.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            When I’m not coding, I’m exploring new technologies, contributing to open-source projects, or collaborating with other developers to share knowledge. I believe in continuous learning, teamwork, and building technology that empowers people — values that deeply resonate with purpose-driven approach to fintech.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                            <h4 className="text-xl font-semibold text-slate-900 mb-2">My Philosophy</h4>
                            <p className="text-slate-700">Code is poetry. Every project is an opportunity to craft something beautiful that solves real problems and makes a difference.</p>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                            <h4 className="text-xl font-semibold text-slate-900 mb-2">What Drives Me</h4>
                            <p className="text-slate-700">I'm motivated by challenges that require creative thinking and technical excellence. I love collaborating with teams to bring ambitious visions to life.</p>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200">
                            <h4 className="text-xl font-semibold text-slate-900 mb-2">Beyond Code</h4>
                            <p className="text-slate-700">I enjoy mentoring upcoming developers and contributing to a tech community that’s open, collaborative, and inclusive—where everyone has the opportunity to learn, build, and thrive.</p>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow">
                        <Code2 className="w-12 h-12 text-slate-700 mb-4" />
                        <h4 className="text-xl font-semibold text-slate-900 mb-2">Clean Code</h4>
                        <p className="text-slate-600">Writing maintainable, scalable code with best practices and modern standards.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow">
                        <Palette className="w-12 h-12 text-slate-700 mb-4" />
                        <h4 className="text-xl font-semibold text-slate-900 mb-2">Design Focus</h4>
                        <p className="text-slate-600">Creating intuitive interfaces with attention to detail and user experience.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow">
                        <Rocket className="w-12 h-12 text-slate-700 mb-4" />
                        <h4 className="text-xl font-semibold text-slate-900 mb-2">Fast Delivery</h4>
                        <p className="text-slate-600">Efficient development process ensuring timely project completion.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Body

