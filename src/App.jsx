import "./App.css";
import Cart from "./components/Cart";
import Explore from "./components/Explore";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Hero />
      <Featured />
      <Explore /> */}
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
