import style from './App.module.scss';
import Card from './components/Card';
import Formulario from './components/Formulario';
import Calendario from './components/Calendario';
import ListaDeEventos from './components/ListaDeEventos';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';
import DebugObserver from './components/DebugObserver';

function App() {
  return (
    <RecoilRoot>
      <DebugObserver />
      <Suspense fallback="Está carregando">
        <div className={style.app}>
          <div className={style.coluna}>
            <Card>
              <Formulario />
            </Card>
            <Card>
              <ListaDeEventos />
            </Card>
          </div>
          <div className={style.coluna}>
            <Calendario />
          </div>
        </div>
      </Suspense>
    </RecoilRoot>

  );
}

export default App;
