import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import GoodInfo from "./components/goodInfo";
import Header from "./components/header";
import Main from "./components/main";
import MyBag from "./components/myBag";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/good-info/:goodId" element={<GoodInfo />} />
        <Route path="/my-bag" element={<MyBag />} />
      </Routes>
    </>
  );
}

export default App;
