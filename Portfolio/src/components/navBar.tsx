
const navBar = () => {
    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-slate-800">Portfolio</h1>
                <div className="flex gap-6">
                    <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
                    <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors">Projects</a>
                    <a href="#skills" className="text-slate-600 hover:text-slate-900 transition-colors">Skills</a>
                    <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default navBar;