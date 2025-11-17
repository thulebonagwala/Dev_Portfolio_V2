import NavBar from './components/navBar';
import Hero from './components/Hero';
import Body from './components/Body';
import Projects from './components/Projects';
import SkillSection from './components/SkillSection';
import ContactSection from './components/ContactSection';
import Footer from './components/footer';

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Body/>
      <Projects/>
      <SkillSection/>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default App