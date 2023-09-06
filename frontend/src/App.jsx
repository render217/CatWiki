import React from "react";

import { AllBreed, Home, NotFound, SingleBreed } from "./pages";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="breeds" element={<AllBreed />} />
          <Route path="breeds/:breedName" element={<SingleBreed />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
