import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Avatar } from './components/Avatar/Avatar'
import { About } from './components/About/About'
import { Resume } from './components/Resume/Resume'

function App() {
  

  return (
    <div className={styles.App}>
      <Navbar />
      <Avatar />
      <About />
      <Resume />
    </div>
  )
}

export default App
