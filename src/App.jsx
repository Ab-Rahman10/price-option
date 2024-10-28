import Navbar from "./components/navbar/navbar";
import PriceOption from "./components/priceOption/PriceOption";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-6xl font-bold text-center">Gym Center</h1>
      <PriceOption></PriceOption>
    </>
  );
}

export default App;
