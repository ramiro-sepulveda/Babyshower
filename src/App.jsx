import "./App.css";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import { Route, Routes } from "react-router-dom";
import BabyProvider from "./context/ContextBaby";
import Metas from "./views/Metas";
import Regalos from "./views/Regalos";

function App() {
  return (
    <>
      <div className="app">
        <BabyProvider>
          <Navigation />
          <Routes>
            <Route path="/babyshower/" element={<HomePage />} />
            <Route path="/babyshower/metas/" element={<Metas />} />
            <Route path="/babyshower/regalos/" element={<Regalos />} />
          </Routes>
        </BabyProvider>
      </div>
    </>
  );
}

export default App;
