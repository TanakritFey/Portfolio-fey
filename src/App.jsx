import Sidenav from "./components/Sidenav"
import Main from "./components/Main"
import Work from "./components/Work"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Skills from "./components/Skill"
import About from "./components/About"


function App() {


  return (
    <>
    <Sidenav/>
    <Main />
    <About/>
    <Work />
    <Skills />

    <Project/>
    <Contact/>
    </>
  )
}

export default App
