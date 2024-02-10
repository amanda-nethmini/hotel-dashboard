import "./App.css";
import Carousel from "./Components/Carousel/Carousel";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/NavBar/Navbar";
import Experience from "./Pages/Experience/Experience";
import Offers from "./Pages/Offers/Offers";
import OurDestinations from "./Pages/OurDestinations/OurDestinations";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Carousel />
      <OurDestinations />
      <Experience />
      <Offers />
      <Footer />
    </div>
  );
}

export default App;
