import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import ArchiveTodos from "./pages/ArchiveTodos";
import NotFound from "./pages/NotFound";
import EditTodo from "./pages/EditTodo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Main title="Todo list"/>}/>
            <Route path="/archive" element={<ArchiveTodos title="Archive Todos"/>}/>
            <Route path="/:id" element={<EditTodo title="Edit Todo"/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
