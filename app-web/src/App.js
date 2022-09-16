import './App.css';
import React, { Suspense, lazy, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Menu from './Menu';

const Home = lazy(() => import("./pages/home/Home"));
const VacinaCon = lazy(() => import("./pages/vacina/VacinaCon"));

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Suspense fallback={<div>Carregando ...</div>}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/vacinas" element={<VacinaCon />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
