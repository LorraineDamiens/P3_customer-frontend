import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home.page";
import CompanyInfo from "./components/CompanyInfo";
import CustomerInfo from "./components/CustomerInfo";
import MiscInfo from "./components/MiscInfo";
import CardList from "./components/CardList";
import Confirmation from "./components/Confirmation";
import NavbarTop from "./components/Navbar";
import Footer from "./components/Footer";

function Router() {
  return (
    <BrowserRouter>
      <NavbarTop />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/company" component={CompanyInfo} />
        <Route path="/customer" component={CustomerInfo} />
        <Route path="/misc" component={MiscInfo} />
        <Route path="/services" component={CardList} />
        <Route path="/confirmation" component={Confirmation} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default Router;
