import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Avatar } from './components/Avatar/Avatar'
import { About } from './components/About/About'
import { Resume } from './components/Resume/Resume'
import { Portfolio } from './components/Portfolio/Portfolio'

function App() {
  

  return (
    <div className={styles.App}>
      <Navbar />
      <Avatar />
      <About />
      <Resume />
      <Portfolio />
    </div>
  )
}

export default App
