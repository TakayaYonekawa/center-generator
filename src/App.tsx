import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/style.scss";
import Header from "./component/templates/Header/Header";
import Footer from "./component/templates/Footer/Footer";
import Main from "./component/views/Main";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
