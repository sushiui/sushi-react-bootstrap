// import "@testing-library/react";
// import "bootstrap/dist/css/bootstrap.min.css";
// src/test/setup.ts

import "@testing-library/jest-dom/vitest"; 
import "bootstrap/dist/css/bootstrap.min.css";

// Setup for React Testing Library
import { cleanup } from "@testing-library/react";


// Runs a cleanup after each test case
afterEach(() => {
  cleanup();
});