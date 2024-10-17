/** @jsxImportSource @emotion/react */
import { Route, Routes, useLocation } from "react-router";
import Layout from "./Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import { HomePage } from "./Pages/UsersPage/HomePage";
import About from "./Pages/UsersPage/About/about";
import { Product } from "./Pages/UsersPage/ProductPage/product";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { Listing } from "./Pages/UsersPage/ListingPage/listing";
import { ErrorBoundarayContainer } from "./Pages/Additions/ErorrBoundry/erorrboundy";
import { NotFound } from "./Pages/Additions/NotFound/notFound";
import store from "./store";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
function App() {
  return (
    <BrowserRouter>
      <ErrorBoundarayContainer>
        <Provider store={store}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="*" element={<NotFound />} />
              <Route path="about" element={<About />} />
              <Route path="product" element={<Product />} />{" "}
              <Route path="listing" element={<Listing />} />{" "}
              <Route path="/product/:id" element={<Product />}></Route>
            </Route>
          </Routes>
        </Provider>
      </ErrorBoundarayContainer>
    </BrowserRouter>
  );
}

export default App;
