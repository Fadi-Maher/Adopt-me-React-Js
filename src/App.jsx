import React, { useState } from "react";
import ReactDom from "react-dom/client";
import Search from "./Search.jsx";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Details from "./Details.jsx";
import { Provider } from "react-redux";
// import setAdoptedPetContext from "./adoptedPetContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "./store.js";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
const App = () => {
  // const adoptedPet= useState(null)
  return (
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <header>
            <Link to="/">Adopt Me</Link>
          </header>
          {/* <setAdoptedPetContext.Provider value={adoptedPet}> */}
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<Search />} />
          </Routes>
          {/* </setAdoptedPetContext.Provider> */}
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  );
};
const container = document.getElementById("root");
const root = ReactDom.createRoot(container);
root.render(<App />);
