import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Pageeight from "./components/Pageeight";
import Pagefive from "./components/Pagefive";
import Pagefour from "./components/Pagefour";
import Pageone from "./components/Pageone";
import Pageseven from "./components/Pageseven";
import Pagesix from "./components/Pagesix";
import Pagethree from "./components/Pagethree";
import Pagetwo from "./components/Pagetwo";

function App() {
  return (
    <div className="App">
      <Header />
      <Pageone />
      <Pagetwo />
      <Pagethree />
      <Counter />
      <Pagefour />
      <Pagefive />
      <Pagesix />
      <Pageseven />
      <Pageeight />
    </div>
  );
}

export default App;
