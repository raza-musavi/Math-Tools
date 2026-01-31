import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HCFTool } from './pages/HCFTool';
import { Blogs } from './pages/Blogs';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HCFTool />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
