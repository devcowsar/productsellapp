import "./App.css";
import About from "./Components/About";
import DiscountProduct from "./Components/DiscountProduct";
import Layout from "./Components/Layout";
import Slide from "./Components/Slide";

function App() {
  return (
    <Layout>
      <Slide />
      <DiscountProduct />
      <About />
    </Layout>
  );
}

export default App;
