import './App.css'
import MainLayout from './layout/MainLayout'
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';          
import 'primeicons/primeicons.css';
import useRouteElement from './routers/useRouteElement';


function App() {
  const element = useRouteElement();
  return (
    <>
      {element}
    </>
  )
}

export default App;
