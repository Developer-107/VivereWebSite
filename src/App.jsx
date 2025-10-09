import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Vacancies from './pages/Vacancies';


function App() {
  

  return (
    <>
      <Routes>
          <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          </Route>
          <Route path="/vacancies" element={<Vacancies />} />
        </Routes>
    </>
  )
}

export default App
