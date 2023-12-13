import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider'
import Featured from './Components/Featured';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Slider/>
      <Featured/>
      <AboutUs/>
    </div>
  );
}

export default App;
