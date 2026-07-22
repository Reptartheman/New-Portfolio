import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Landing from './components/Landing/Landing';
import Web from './components/Web/Web';
import Music from './components/Music/Music';

export default function App() {
  return (
    <Routes>
      {/* Landing chooser: full-bleed, no global chrome */}
      <Route path="/" element={<Landing />} />

      {/* Content routes share the global Header + Footer */}
      <Route element={<Layout />}>
        <Route path="/web" element={<Web />} />
        <Route path="/music" element={<Music />} />
      </Route>
    </Routes>
  );
}
