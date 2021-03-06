import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Body />
      </BrowserRouter>
    </>
  );
}

export default App;
