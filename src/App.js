import { Footer } from "./layouts/footer/footer";
import Header from "./layouts/header/header";
import Router from "./routes/router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
