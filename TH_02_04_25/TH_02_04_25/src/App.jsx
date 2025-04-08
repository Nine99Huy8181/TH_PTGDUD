import './App.css'
import MainLayout from './layout/MainLayout'
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';          
import 'primeicons/primeicons.css';
import { Route, Router, Routes } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import Project from './pages/Project';
import Teams from './pages/Teams';
import Analytics from './pages/Analytics';
import Messages from './pages/Messages';
import Integrations from './pages/Integrations';

function App() {
  return (
    <>
      {/* <MainLayout></MainLayout> */}
      <Routes>
        <Route path="/" element={<DashBoard></DashBoard>}></Route>
        <Route path="/project" element={<Project></Project>}></Route>
        <Route path="/teams" element={<Teams></Teams>}></Route>
        <Route path="/analytics" element={<Analytics></Analytics>}></Route>
        <Route path="/messages" element={<Messages></Messages>}></Route>
        <Route path="/integrations" element={<Integrations></Integrations>}></Route>
      </Routes>
    </>
  )
}

export default App
