import Header from './components/Header/Header';
import HeroSection from './components/Hero/HeroSection';
import Focus from './section/focus/Focus';
import Phase from './section/phase/Index';
import Products from './section/products/Index';
import TokenInfo from './section/tokenInfo/Index';
import TokenDetails from './section/utility/Index';

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <Focus />
      <Products />
      <TokenDetails />
      <TokenInfo />
      <Phase />
    </div>
  );
}

export default App;
