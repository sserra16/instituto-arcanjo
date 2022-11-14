import React from "react";
import { Route, Routes as RoutesDOMRouter } from "react-router-dom";
import IndexPage from "./pages";
import Mentoria from "./pages/Mentoria";

export default function Routes() {
  return (
    <RoutesDOMRouter>
      <Route path={"/"} element={<IndexPage />} />
      <Route path={"/mentoria"} element={<Mentoria />} />
    </RoutesDOMRouter>
  );
}
