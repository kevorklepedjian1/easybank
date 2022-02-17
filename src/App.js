import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Reasons from './components/Reasons/Reasons';
import Articles from './components/Articles/Articles';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Reasons />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
