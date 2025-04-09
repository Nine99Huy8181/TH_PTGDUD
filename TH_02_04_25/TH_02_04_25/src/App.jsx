import './App.css'
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';          
import 'primeicons/primeicons.css';
import useRouteElement from './routers/useRouteElement';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";


function App() {
  const element = useRouteElement();
  return (
    <>
      {element}
    </>
  )
}

export default App;
