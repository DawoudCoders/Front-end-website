import "./App.css";
import ArticleListPage from "./Components/ArticleListPage/ArticleListPage";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import SpecificArticlePage from "./Components/SpecificArticlePage/SpecificArticlePage";

function App() {
  return (
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
  );
}

export default App;
