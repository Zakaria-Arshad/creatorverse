import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';
import HomePage from "./pages/HomePage";
import '@picocss/pico';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="edit/:id" element={<EditCreator />} />
        <Route path="add" element={<AddCreator />} />
        <Route path="view/:id" element={<ViewCreator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
