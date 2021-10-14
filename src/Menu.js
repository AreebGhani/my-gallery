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
       <Route exact path="/my-gallery/" component={MyGallery}/>
       <Route exact path="/my-gallery/about" component={About}/>
       <Route exact path="/my-gallery/contact" component={Contact}/>
       <Route exact path="/my-gallery/privacy_policy" component={PrivacyPolicy}/>
       <Route exact path="/my-gallery/terms&conditions" component={TermsConditions}/>
       <Route path="/my-gallery/" component={ErrorPage}/>
     </Switch>
    </>
    );
}
