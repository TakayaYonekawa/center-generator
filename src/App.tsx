import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/style.scss";
import Header from "./component/templates/Header/Header";
import Footer from "./component/templates/Footer/Footer";
import Main from "./component/views/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyPage from "./component/views/MyPage";
import SaveCode from "./component/views/SaveCode";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path={`/save-code/:savePageId`} element={<SaveCode />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
