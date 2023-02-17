// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Container } from "./components/Container/Container";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Container />} />
    </Routes>
  );
}

export default App;
