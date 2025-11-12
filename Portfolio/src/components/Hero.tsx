

const Hero = () => {
    return (
        <section className="pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center">
                    <h2 className="text-6xl font-bold text-slate-900 mb-4">Hi, I'm Thulebona Gwala</h2>
                    <p className="text-2xl text-slate-600 mb-8">Full Stack Developer & Creative Problem Solver</p>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12">
                        I craft elegant solutions to complex problems, building web experiences that are both beautiful and functional.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a href="#contact" className="px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
                            Get in Touch
                        </a>
                        <a href="#projects" className="px-8 py-3 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-colors">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero