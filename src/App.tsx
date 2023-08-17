import { BrowserRouter } from 'react-router-dom';
import { About,  Experience, Feedbacks, Hero, Navbar, Tech, Works, Achievements } from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        
        <About />
        
        <Experience />
        <Tech />
        <Achievements/>
        <Works />
        <Feedbacks />        
      </div>
    </BrowserRouter>
  )
}

export default App
