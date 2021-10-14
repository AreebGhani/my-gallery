import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import MyGallery from "./MyGallery";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsConditions from "./TermsConditions";

export default function Menu() {
  return(
    <>
     <Switch>
       <Route exact path="/" component={MyGallery}/>
       <Route exact path="/about" component={About}/>
       <Route exact path="/contact" component={Contact}/>
       <Route exact path="/privacy_policy" component={PrivacyPolicy}/>
       <Route exact path="/terms&conditions" component={TermsConditions}/>
       <Route path="/" component={ErrorPage}/>
     </Switch>
    </>
    );
}