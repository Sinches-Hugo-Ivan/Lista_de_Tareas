import { createRoot } from 'react-dom/client';
import App from './components/App';
import { Reloj } from './components/Reloj';
import './index.css';

const root = document.getElementById('root');

createRoot(root).render(
  <>
    <div>
      {/* Mostrar el componente Reloj en un div separado */}
      <Reloj />
    </div>
    <div>
      {/* Mostrar la lista de tareas (componente App) en otro div */}
      <h1 className='titleNeon'>LISTA DE TAREAS</h1>
      <App />
    </div>
  </>
);
