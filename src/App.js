import "./App.css";
import ArticleListPage from "./Components/ArticleListPage/ArticleListPage";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpecificArticlePage from "./Components/SpecificArticlePage/SpecificArticlePage";
import { useState } from 'react';
import { UsernameContext } from './Contexts/UsernameContext';

function App() {
  const [username, setUsername] = useState("Dawoud");
  return (
    <UsernameContext.Provider value={username}>
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ArticleListPage />} />
          <Route path="/:articleId" element={<SpecificArticlePage />} />
          {/* <Route path="/" element={} />
          <Route path="/" element={} /> */}
        </Routes>
      </div>
    </BrowserRouter>
    </UsernameContext.Provider>
  );
}

export default App;
