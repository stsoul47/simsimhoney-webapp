import { useRoutes } from "react-router-dom";
import { path } from './config/path';

function App() {
  let element = useRoutes(path);
  return element;
}

export default App;
