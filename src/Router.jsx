import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home.page";
import CompanyInfo from "./components/CompanyInfo";
import CustomerInfo from "./components/CustomerInfo";
import MiscInfo from "./components/MiscInfo";
import CardList from "./components/CardList";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/company" component={CompanyInfo} />
        <Route path="/customer" component={CustomerInfo} />
        <Route path="/misc" component={MiscInfo} />
        <Route path="/services" component={CardList} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
