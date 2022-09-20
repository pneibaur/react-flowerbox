import './App.css';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import ItemShow from './Components/ItemShow';
import Navbar from './Components/Navbar';
import data from "./Components/seedData"

const cards = data.map((ele, index) => {
  return(
  <ItemShow {...ele} key={index} />
  );
});

function App() {
  return (
    <div className="App">
      <header className="appHeader">
        <Navbar />
      </header>
      <main>
        <Banner />
        <div className='mainCards'>
          {cards}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
