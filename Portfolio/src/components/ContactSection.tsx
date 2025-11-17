import { Github, Linkedin, Mail } from 'lucide-react';
const ContactSection = () => {
  return (
          <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Let's Work Together</h3>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex gap-6 justify-center">
            <a href="mailto:thulebonagwala@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a href="https://github.com/thulebonagwala" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/thulebona-gwala-15688a368" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
  )
}

export default ContactSection