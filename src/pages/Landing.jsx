import Hero from "../components/Hero.jsx";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import Community from "../components/Community.jsx";
import Coffee from "../components/Coffee.jsx";
import Cart from "../components/Cart.jsx";

const Landing = () => (
  <div className="bg-bg text-text min-h-screen pt-8 ">
    <Nav />
    <Hero />
    <Coffee />
    <Community />
    <Footer />
    <Cart />
  </div>
);

export default Landing;
