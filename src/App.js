import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import NetFlixShow from "./pages/NetFlixShow";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Login from "./pages/login/login";
import Register from "./pages/register/register";

function App() {
  return (
    <BrowserRouter>
        <Switch>
       <Route  path="/login" component={Login} />
        <Route  path="/register" component={Register} />
        <React.Fragment>
       <div className="App">
        <ScrollToTop />
          <Route exact path="/" component={Home} />
          <Route path="/netflix-show" component={NetFlixShow} />
        <Footer />
      </div>
        </React.Fragment>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
