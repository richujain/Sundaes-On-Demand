import "./App.css";
import Options from "./pages/entry/Options";
import SummaryForm from "./pages/summary/SummaryForm";

function App() {
  return (
    <div className="App">
      <h1>Scoops</h1>
      <Options optionType="scoops" />
      <h1>Toppings</h1>
      <Options optionType="toppings" />
      <SummaryForm />
    </div>
  );
}

export default App;
