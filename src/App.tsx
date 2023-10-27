import React from 'react';
import { ContactContainer } from './containers/ContactContainer/ContactContainer';
import { FaqContainer } from './containers/FaqContainer/FaqContainer';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { AboutUsContainer, CartContainer, HomePageContainer, ProductDescriptionContainer } from './containers';
import { ScrollToTop } from './utils';
import { MyAccountContainer } from './containers/MyAccountContainer/MyAccountContainer';
import { ContextProvider } from './context';
import { CheckoutContainer } from './containers/CheckoutContainer';

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomePageContainer />} />
            <Route path="/product-description/:id" element={<ProductDescriptionContainer />} />
            <Route path="/about-us" element={<AboutUsContainer />} />
            <Route path="/faq" element={<FaqContainer />} />
            <Route path="/contact-us" element={<ContactContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/my-account" element={<MyAccountContainer />} />
            <Route path="/checkout" element={<CheckoutContainer />} />
          </Routes>
        </ScrollToTop>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
