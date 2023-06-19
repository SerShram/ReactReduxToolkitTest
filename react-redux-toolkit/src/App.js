import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import LastTodos from "./pages/LastTodos";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <main>
          <div className="wrapper">
            <Routes>
              <Route path="/" element={<Main title="Todo list"/>}/>
              <Route path="/last-todos" element={<LastTodos title="Last Todos"/>}/>
            </Routes>
          </div>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
