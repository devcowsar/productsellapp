import "./App.css";
import About from "./Components/About";
import DiscountProduct from "./Components/DiscountProduct";
import Layout from "./Components/Layout";

function App() {
  return (
    <Layout>
      <DiscountProduct />
      <About />
    </Layout>
  );
}

export default App;
