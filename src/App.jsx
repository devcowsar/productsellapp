import "./App.css";
import About from "./Components/About";
import DiscountProduct from "./Components/DiscountProduct";
import Layout from "./Components/Layout";
import Slider from "./Components/Slider";

function App() {
  return (
    <Layout>
      <Slider />
      <DiscountProduct />
      <About />
    </Layout>
  );
}

export default App;
