import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ErrorBoundary from './ErrorBoundary';

// Components
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <ErrorBoundary>
          <Home />
        </ErrorBoundary>
      }
    ></Route>
  )
);

export default router;
