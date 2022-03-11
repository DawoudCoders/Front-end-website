import "./App.css";
import ArticleListPage from "./Components/ArticleListPage/ArticleListPage";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpecificArticlePage from "./Components/SpecificArticlePage/SpecificArticlePage";

import { useState, useContext } from "react";
import { UsernameContext } from "./Contexts/UsernameContext";
import SignInPage from "./Components/SignInPage/SignInPage";

function App() {
 const [username, setUsername] = useState("dawoud")
  return (
    <UsernameContext.Provider value={{username,setUsername}} >
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<ArticleListPage />} />
            <Route path="/:articleId" element={<SpecificArticlePage />} />
            <Route
              path="/signIn"
              element={<SignInPage/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </UsernameContext.Provider>
  );
}

export default App;
