import { ExternalLink } from 'lucide-react';
import PROJECT_IMG_3 from "../assets/images/project-2.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";
import PROJECT_IMG_1 from "../assets/images/project-1.png";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-slate-900 mb-12 text-center">Featured Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img src={PROJECT_IMG_1} alt="AI Powered eBook Creator" className="h-48 w-full object-cover" />
            <div className="p-6">
              <h4 className="text-2xl font-semibold text-slate-900 mb-2">AI Powered eBook Creator</h4>
              <p className="text-slate-600 mb-4">An intelligent platform that helps authors create, edit, and publish eBooks with AI-assisted writing and formatting capabilities.</p>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">AI Integration</span>
              </div>
              <a href="https://github.com/thulebonagwala/Mern-ebook-Creator-ai"
                target="_blank"
                className="inline-flex items-center gap-2 text-slate-900 hover:text-slate-600 transition-colors">
                View Project <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img src={PROJECT_IMG_2} alt="AI Powered Invoice App" className="h-48 w-full object-cover" />
            <div className="p-6">
              <h4 className="text-2xl font-semibold text-slate-900 mb-2">AI Powered Invoice App</h4>
              <p className="text-slate-600 mb-4">A full-stack invoicing platform with AI-assisted features for automated invoice generation and management.</p>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">PostgreSQL</span>
              </div>
              <a href="https://github.com/thulebonagwala/MERN-Invoice-Generator-ai" target="_blank" className="inline-flex items-center gap-2 text-slate-900 hover:text-slate-600 transition-colors">
                View Project <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img src={PROJECT_IMG_3} alt="MERN Task Manager App" className="h-48 w-full object-cover" />
            <div className="p-6">
              <h4 className="text-2xl font-semibold text-slate-900 mb-2">MERN Task Manager App</h4>
              <p className="text-slate-600 mb-4">A full-stack task management application with real-time updates, team collaboration, and comprehensive task tracking capabilities.</p>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Express</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">MongoDB</span>
              </div>
              <a href="https://github.com/thulebonagwala/Task-Manager" target="_blank" className="inline-flex items-center gap-2 text-slate-900 hover:text-slate-600 transition-colors">
                View Project <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-slate-500 to-slate-600"></div>
            <div className="p-6">
              <h4 className="text-2xl font-semibold text-slate-900 mb-2">Project Four</h4>
              <p className="text-slate-600 mb-4">An enterprise-level platform with robust architecture and scalability. COMING SOON!</p>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">GraphQL</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">AWS</span>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-slate-900 hover:text-slate-600 transition-colors">
                View Project <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects