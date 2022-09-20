import './App.css';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import ItemShow from './Components/ItemShow';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="appHeader">
        <Navbar />
      </header>
      <main>
        <Banner />
        <div className='mainItems'>
          <ItemShow />
          <ItemShow />
          <ItemShow />
          <ItemShow />
          <ItemShow />
          <ItemShow />
          <ItemShow />
          <ItemShow />
          <ItemShow />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
