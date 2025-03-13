import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Cart from "./components/Cart/Cart";
import Contact from "./components/Contact/Contact";
import CustomFeedback from "./components/CustomFeedback/CustomeFeedback";
import FAQ from "./components/FAQ/FAQ";
import FollowUs from "./components/FollowUs/FollowUs";
import MyAccount from "./components/MyAccount/MyAccount";
import Offer from "./components/Offer/Offer";
import Personalize from "./components/Personalize/Personalize";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import ReturnRefund from "./components/ReturnRefund/ReturnRefund";
import Shop from "./components/Shop/Shop";
import ShoppingPolicy from "./components/ShoppingPolicy/ShoppingPolicy";
import SizeChart from "./components/SizeChart/SizeChart";
import TermCondition from "./components/TermCondition/TermCondition";
import TrackOrder from "./components/TrackOrder/TrackOrder";
import NoFound from "./components/NoFound/NoFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/customfeedback" element={<CustomFeedback />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/followus" element={<FollowUs />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/offers" element={<Offer />} />
        <Route path="/personalize" element={<Personalize />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/returnrefund" element={<ReturnRefund />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shoppingpolicy" element={<ShoppingPolicy />} />
        <Route path="/sizechart" element={<SizeChart />} />
        <Route path="/termcondition" element={<TermCondition />} />
        <Route path="/trackorder" element={<TrackOrder />} />
        <Route path="*" element={<NoFound/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;