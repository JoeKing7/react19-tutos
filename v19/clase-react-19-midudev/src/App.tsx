import { use, useState, version } from 'react';
import { preload } from 'react-dom';

import reactLogo from './assets/react.svg';
import './App.css';
import Seo from './components/Seo';
import Form from './components/Form';
import UseExample from './clase/useExample';
import UseContextExample from './clase/UseContextExample';
import { UserContext } from './context/user';
import Actions from './clase/Actions';

function App() {
  const [show, setShow] = useState(false);

  preload('https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css', {
    as: 'style',
    fetchPriority: 'low',
  });

  const { isLogged } = use(UserContext);

  return (
    <>
      {/* <title>Nuevo en react 19</title> */}
      {/* <title>{`Nuevo en React ${version}`}</title> */}
      <Seo />
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h3>Vite + React {version}</h3>
      </div>

      <button onClick={() => setShow(!show)}>Toggle</button>

      {show && <Form />}

      <UseExample></UseExample>

      <UseContextExample></UseContextExample>

      <footer>{isLogged ? 'Estás logueado' : 'No estás logueado'}</footer>

      <hr />
      <hr />

      <Actions></Actions>
    </>
  );
}

export default App;
