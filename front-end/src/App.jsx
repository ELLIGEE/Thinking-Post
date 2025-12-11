import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";

const App = () => {
  return (
    <div data-theme="forest">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/create" element={<CreatePage />} />

        <Route path="/note/:id" element={<NoteDetailPage />} />

        <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
      </Routes>
    </div>
  );
};

export default App;
