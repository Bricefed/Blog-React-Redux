import Navigation from "./components/Navigation/Navigation";
import Home from "./container/Home/Home";
import { Routes, Route } from "react-router-dom";
import AddArticle from "./container/AddArticle/AddArticle";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ecrire" element={<AddArticle />} />
      </Routes>
    </>
  );
}

export default App;
