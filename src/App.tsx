import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Home } from "./components/Home/index";
import { ToDoContextProvider } from "./contexts/ToDo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <ToDoContextProvider>
        <Content />
      </ToDoContextProvider>
    </>
  );
}

export default App;
