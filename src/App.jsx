import { Routes, Route } from "react-router-dom";
import HomePage from "./Page/HomePage";
import ArchivedPage from "./Page/ArchivedPage";
import ErrorPage from "./Page/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archive" element={<ArchivedPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
