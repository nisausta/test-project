import Footer from "./components/Footer";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hakkımızda from "./components/Hakkımızda";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="main">
        <Hero></Hero>
        <Card></Card>
      <Hakkımızda></Hakkımızda>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
