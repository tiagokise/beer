import logo from './logo.svg';
import './App.css';
import BeerList from './pages/BeerList';
import Header from './components/Header/Header';
import { BeerProvider } from './store/beerContext';

function App() {
  return (
    <BeerProvider>
      <Header/>
      <BeerList/>
    </BeerProvider>
  );
}

export default App;
