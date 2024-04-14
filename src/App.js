import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider'
import Featured from './Components/Featured';
import AboutUs from './Components/AboutUs';
import OurTeam from './Components/OurTeam';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import TredingCourses from './Components/TredingCourses';


function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Slider/>
      <Featured/>
      <AboutUs/>
      <TredingCourses/>
      <OurTeam/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
